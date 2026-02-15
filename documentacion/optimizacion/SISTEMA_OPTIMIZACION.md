# Sistema de Optimización de Producción — Optimización Service

## Resumen

El **Sistema de Optimización Atilax** es un microservicio avanzado que analiza, diagnostica y optimiza la producción de pozos petroleros en tiempo real. Implementa más de 15 motores de cálculo que van desde análisis nodal clásico hasta aprendizaje por refuerzo, procesando datos de 63 pozos con 4 tipos de levantamiento artificial.

El servicio opera en tres capas: monitoreo en tiempo real (cada 5 minutos), diagnóstico y anomalías (horario), y optimización avanzada (diario). Publica más de 100 atributos de optimización por pozo en ThingsBoard.

---

## Arquitectura del Sistema

### Modelo de Tres Capas

```
CAPA 3: OPTIMIZACIÓN ─── "¿Cómo produzco más?"
         ↑ Requiere: datos de pruebas + análisis nodal + DCA

CAPA 2: DIAGNÓSTICO Y ANOMALÍAS ─── "¿Qué está mal?"
         ↑ Requiere: telemetría + líneas base

CAPA 1: MONITOREO EN TIEMPO REAL ─── "¿Qué está pasando ahora?"
         ↓ Entrada: Telemetría RTU vía MQTT/Kafka (cada 5 min)
```

### Pipeline de Datos

1. **Ingesta** — Kafka consume telemetría de 4 topics (ESP, SRP, PCP, Gas Lift)
2. **Buffer** — Redis almacena ventana deslizante de 24 horas por pozo
3. **Procesamiento** — Motores de cálculo ejecutan análisis según schedule
4. **Publicación** — Resultados escritos como server attributes en ThingsBoard
5. **Persistencia** — PostgreSQL almacena historial de optimizaciones y pronósticos

---

## Motores de Cálculo (15 motores, ~10,000 LOC)

### 1. Análisis Nodal (IPR × VLP)

El análisis nodal determina el punto de operación del pozo encontrando la intersección entre la curva de oferta del yacimiento (IPR) y la curva de demanda del sistema de producción (VLP).

**Modelos IPR implementados:**
| Modelo | Uso | Ecuación |
|--------|-----|----------|
| **Vogel** | Yacimientos saturados (Pr < Pb) | Qo/Qmax = 1 - 0.2(Pwf/Pr) - 0.8(Pwf/Pr)² |
| **Darcy** | Yacimientos subsaturados (Pr > Pb) | Q = PI × (Pr - Pwf) |
| **Compuesto** | Transición suave | Darcy arriba de Pb + Vogel debajo |
| **Fetkovich** | Yacimientos con exponente n | Q = C × (Pr² - Pwf²)ⁿ |
| **Jones-Blount-Glaze** | Flujo turbulento | Pr - Pwf = a·q + b·q² |

**Modelos VLP implementados:**
- Correlación hidrostática simplificada
- **Correlación de Beggs & Brill** — Flujo multifásico a cualquier inclinación, 4 regímenes de flujo

**Resultados generados (curvas de 100 puntos):**
- Punto de operación: caudal (BPD) y presión de fondo (Pwf)
- Curvas IPR y VLP completas para visualización
- AOF (Absolute Open Flow), drawdown, índice de productividad

### 2. Análisis de Curvas de Declinación (DCA)

Pronostica la producción futura ajustando modelos matemáticos al historial de producción.

**Modelos Arps:**
| Modelo | Factor b | Característica |
|--------|----------|----------------|
| **Exponencial** | b = 0 | Declinación constante D |
| **Hiperbólico** | 0 < b < 1 | Curvatura controlada por b |
| **Armónico** | b = 1 | Caso especial |
| **Hiperbólico Modificado** | Variable → 0 | Transición a exponencial cuando D < D_lim |

**Capacidades adicionales:**
- Selección automática de modelo por AIC/BIC
- **Monte Carlo Probabilístico**: P10/P50/P90 de EUR (Estimated Ultimate Recovery)
- Pronóstico a 60 meses con intervalo a 12 meses
- Construcción de historial desde telemetría (fallback)

### 3. Optimizadores por Tipo de Levantamiento

#### ESP — Bombeo Electrosumergible
- **Variable de decisión**: Frecuencia (Hz), rango 30-90 Hz
- Evaluación del BEP (Best Efficiency Point)
- Leyes de afinidad para escalar curvas con frecuencia
- Cálculo de consumo específico de energía (kWh/bbl)
- Evita zonas de surge/stall

#### SRP — Bombeo Mecánico
- **Variable de decisión**: SPM (golpes por minuto), rango 4-14
- Relación fillage vs SPM
- Análisis nodal en rango de SPM
- Transformación de carta dinamométrica (Gibbs)
- Clasificación de carta: normal, fluid pound, gas lock, fuga

#### PCP — Cavidad Progresiva
- **Variable de decisión**: RPM, rango 50-400
- Caudal proporcional a RPM × desplazamiento
- Balance torque/desgaste vs producción
- **Modelo de Arrhenius**: predicción de vida del elastómero
- Tipos de elastómero: NBR (10 años), HNBR (15 años), FKM (20 años)

#### Gas Lift
- **Variable de decisión**: Tasa de inyección de gas (MSCFD)
- Curvas GLPC (Gas Lift Performance Curve)
- Detección de casing heading
- **Asignación de gas multi-pozo**: algoritmo equal-slope para distribución óptima de gas disponible

### 4. Detección de Anomalías (Sistema Híbrido de 2 Capas)

**Capa 1: Detección estadística**
- Líneas base adaptativas por pozo (30 días, percentiles robustos)
- CUSUM (Cumulative Sum Control Chart) con umbral adaptativo
- Umbrales configurables: 2σ, 3σ, 4σ
- Fallback: Isolation Forest cuando no hay baseline

**Capa 2: 24 reglas específicas por tipo de levantamiento**
| Tipo | Anomalías Detectadas |
|------|---------------------|
| **ESP** (5) | Gas lock, desgaste de bomba, sobrecalentamiento, falla eléctrica, desbalanceo mecánico |
| **SRP** (6) | Fluid pound, gas lock, fuga TV, fuga SV, varilla partida (CRÍTICA), desbalanceo |
| **PCP** (7) | Desgaste PCP, sand up, sobrecarga motor, spike de torque, presión intake baja, presión tubing alta, aumento de slip |
| **Gas Lift** (6) | Casing heading, sobreinyección, fuga de gas, inundación de separador, caída de presión, irrupción de agua |

### 5. Puntuación de Salud del Pozo

Score ponderado de 0-100 basado en componentes específicos por tipo de levantamiento:

| Rango | Estado | Acción |
|-------|--------|--------|
| 90-100 | Excelente | Operación normal |
| 70-89 | Bueno | Degradación menor |
| 50-69 | Regular | Mantenimiento recomendado |
| < 50 | Pobre | Acción inmediata requerida |

Componentes evaluados: mecánico, eléctrico, hidráulico, producción, eficiencia.
Incluye bonus/penalización por tendencia (7 días).

### 6. Control de Procesos Estadístico (EWMA + PCA)

- **EWMA**: Detecta deriva gradual (shifts de 0.5-2.0σ)
- **PCA**: Monitoreo multivariable con estadístico Hotelling T² y SPE
- Análisis de contribución para identificar causa raíz

### 7. Gestión Industrial de Alarmas (ISA-18.2)

- Deadband, time-delay, shelving
- Métricas de rendimiento de alarmas
- Cumple estándar industrial ISA-18.2

---

## Motores Avanzados (Fase 3-4)

### Correlación de Beggs & Brill (VLP Multifásico)
- Determinación de régimen de flujo (segregado, intermitente, distribuido, transición)
- Corrección de holdup por ángulo de inclinación (-90° a +90°)
- Factor de fricción bifásico (diagrama de Moody + holdup)
- Gradiente total de presión: gravedad + fricción + aceleración

### Ecuación de Onda de Gibbs (SRP)
- Transforma carta dinamométrica de superficie a fondo
- Ecuación de onda amortiguada: d²u/dt² = v²·d²u/dx² - c·du/dt
- Condición de Courant para estabilidad numérica
- Carta estándar de 360 puntos

### Degradación Térmica de Arrhenius (PCP)
- Modelo: k(T) = A × exp(-Ea / (R·T))
- Base de datos de elastómeros (NBR, HNBR, FKM)
- Predicción de vida remanente en días
- Factor de derating por temperatura

### NSGA-II Optimización Multi-Objetivo
- 3 objetivos simultáneos: maximizar producción, minimizar energía específica, maximizar vida del equipo
- Población: 100, Generaciones: 200
- Crossover SBX (η=20), Mutación polinomial
- Frente de Pareto completo con selección de punto de rodilla
- Pesos de preferencia configurables

### Agente de Aprendizaje por Refuerzo (RL)
- Arquitectura actor-crítico PPO con red MLP [256, 128]
- Entrenamiento offline sobre historial de telemetría
- Capa de seguridad: restricciones duras, rate limiting (máx 1 cambio / 15 min)
- Modo aprobación manual (human-in-the-loop)
- Acciones: ajustes discretos de frecuencia/SPM/RPM/inyección

---

## Componentes de Machine Learning

### LSTM-Autoencoder (Detección de Anomalías)
- **Arquitectura**: Encoder LSTM(64→32) → latente z ∈ ℝ³² → Decoder LSTM(32→64)
- Modelo por pozo, entrenado en 30 días de datos estables
- Ventana: 24 horas, reentrenamiento cada 30 días
- Score de anomalía basado en error de reconstrucción
- Fallback NumPy cuando PyTorch no disponible

### Predicción de Producción (XGBoost)
- Features temporales: lags (t-1, t-7, t-30), scores de anomalía, tendencia de presión
- Pronóstico a 30 días

### Predicción de Falla ESP (XGBoost)
- Clasificador binario: probabilidad de falla en 30 días
- Features: tendencias de corriente, temperatura, vibración, horas desde workover

### Clasificador de Carta Dinamométrica
- Clasifica: normal, fluid pound, gas lock, fuga
- Heurístico CNN con fallback

---

## Sistema de Schedulers

| Frecuencia | Tareas | Datos |
|------------|--------|-------|
| **Cada 5 min** | Detección de anomalías (2 capas), creación de alarmas | Últimos 5 min de telemetría |
| **Cada hora** | Análisis nodal, optimización por tipo, NSGA-II, RL, asignación de gas | 24 horas de historial |
| **Diario (6 AM)** | DCA, pronósticos, salud del pozo, entrenamiento LSTM-AE | 30 días de historial |
| **Semanal** | Resumen de anomalías, KPIs de campo, tendencias | Última semana |
| **Mensual** | Recomputación completa de baselines, auditoría de modelos ML | 30 días completos |

---

## API REST (FastAPI)

| Dominio | Endpoints |
|---------|-----------|
| Health | `GET /health`, `/version` |
| Pozos | `GET /wells`, `/wells/{id}`, `/wells/{id}/telemetry` |
| Optimización | `GET /optimization/{id}`, `POST /optimization/{id}/run`, `POST /what-if` |
| Pronósticos | `GET /forecasts/{id}`, `/forecasts/{id}/dca` |
| ML | `GET /clusters`, `/anomaly-patterns`, `POST /train-lstm-ae` |
| Campo | `GET /field/allocation`, `POST /field/allocate-gas` |
| Alarmas | `GET /alarms`, `/alarms/{id}`, `POST /alarms/acknowledge` |

---

## Tecnologías

| Componente | Tecnología |
|------------|------------|
| Framework web | FastAPI 0.115 + Uvicorn |
| Base de datos | PostgreSQL (SQLAlchemy 2.0 async) + Redis |
| ML/AI | PyTorch 2.1, scikit-learn 1.6, XGBoost 2.1 |
| Mensajería | Apache Kafka (confluent-kafka) |
| Cálculos | NumPy 2.2, SciPy 1.15, Pandas 2.2 |
| Scheduling | APScheduler 3.10 |
| Monitoreo | Prometheus metrics |
| Despliegue | Docker + PM2 |

---

## Atributos Publicados por Pozo (~100+)

### Análisis Nodal
`opt_nodal_q_bpd`, `opt_nodal_pwf_psi`, `opt_nodal_ipr_curve`, `opt_nodal_vlp_curve`, `opt_nodal_aof_bpd`, `opt_nodal_pi_stb_d_psi`

### DCA / Pronóstico
`opt_dca_model`, `opt_dca_qi_bpd`, `opt_dca_di_pct_month`, `opt_dca_b_factor`, `opt_dca_eur_stb`, `opt_dca_forecast`, `opt_dca_eur_p10/p50/p90`

### Optimización por Tipo
`opt_esp_freq_recommended_hz`, `opt_srp_spm_recommended`, `opt_pcp_rpm_recommended`, `opt_gl_injection_recommended_mscfd`

### Anomalías
`opt_anomaly_detected`, `opt_anomaly_score`, `opt_anomaly_type`, `opt_anomaly_severity`

### Salud
`opt_well_health_score`, `opt_health_status`, `opt_health_components`, `opt_health_trend`

### ML
`opt_lstm_ae_anomaly_score`, `opt_rl_recommended_action`, `opt_rl_confidence`

---

## Valor para el Negocio

1. **Incremento de producción**: Identifica ganancias potenciales optimizando setpoints (frecuencia, SPM, RPM, inyección de gas)
2. **Reducción de downtime**: Detección temprana de anomalías y predicción de fallas antes de que ocurran
3. **Eficiencia energética**: Minimiza consumo eléctrico por barril producido (kWh/bbl)
4. **Extensión de vida útil**: Modelos de desgaste predicen vida remanente de equipos
5. **Decisiones informadas**: Análisis what-if permite evaluar escenarios antes de implementar cambios
6. **Optimización de portafolio**: Asignación óptima de recursos (gas, energía) a nivel de campo completo
7. **Autonomía operacional**: RL permite control autónomo con supervisión humana configurable
