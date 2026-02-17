# Atilax — Plataforma de Optimización de Producción Petrolera

## Resumen Ejecutivo

**Atilax** es una plataforma integral de monitoreo, diagnóstico y optimización de producción petrolera que combina ingeniería de yacimientos, inteligencia artificial y visualización en tiempo real para maximizar la producción de campos petroleros con múltiples métodos de levantamiento artificial. Escalable a cualquier número de pozos, campos y regiones operativas.

---

## El Problema

Los campos petroleros operan con condiciones desafiantes:
- **Múltiples métodos de levantamiento** (ESP, SRP, PCP, Gas Lift) con requisitos de monitoreo distintos
- **Crudos diversos**: desde extra-pesado (6 °API) hasta liviano (36+ °API) en diversas regiones
- **Optimización manual**: ingenieros ajustan setpoints basándose en experiencia, no en datos en tiempo real
- **Detección tardía de anomalías**: fallas detectadas después de causar pérdida de producción o daño a equipos
- **Falta de visibilidad**: información dispersa entre sistemas SCADA, hojas de cálculo y reportes manuales

---

## La Solución

Atilax integra tres componentes que trabajan en conjunto:

### 1. Simulador de Pozos
Genera datos realistas de pozos en múltiples campos petroleros para desarrollo, demostración y entrenamiento de modelos ML.

### 2. Simulador Interactivo (What-If)
Permite a ingenieros evaluar escenarios hipotéticos en tiempo real: el operador modifica parámetros operativos (frecuencia, corte de agua, presión) desde el dashboard y el sistema recalcula automáticamente producción, eficiencia y pronóstico sin afectar la operación real del pozo. Incluye proyección visual de 12 horas futuras con series punteadas en los gráficos, comparación dinámica de parámetros originales vs modificados, y pronóstico DCA basado en 180 días de historial de producción.

### 3. Motor de Optimización (IA)
15 motores de cálculo que procesan telemetría cada 5 minutos:
- **Análisis nodal** (5 modelos IPR + VLP Beggs & Brill)
- **Curvas de declinación** (Arps + Monte Carlo probabilístico)
- **Optimización por tipo** (ESP/SRP/PCP/Gas Lift)
- **Detección de anomalías** (24 reglas + LSTM-Autoencoder)
- **Optimización multi-objetivo** (NSGA-II + Reinforcement Learning)

### 4. Software de Monitoreo
33+ widgets especializados en múltiples dashboards interactivos con navegación jerárquica campo → macolla → pozo → subsistema → simulación.

---

## Capacidades Clave

| Capacidad | Detalle |
|-----------|---------|
| **Métodos de levantamiento** | 4 tipos soportados (ESP, SRP, PCP, Gas Lift) |
| **Detección de anomalías** | < 5 minutos |
| **Variables por pozo** | 20+ telemetrías en tiempo real |
| **Atributos de optimización** | 100+ por pozo |
| **Motores de IA** | 15 motores de cálculo y optimización |
| **Simulación what-if** | Tiempo real, reactiva por parámetro, proyección 12h, comparación original/modificado |
| **Proyección de producción** | 144 puntos futuros (12h) con visualización punteada en gráficos |
| **Widgets especializados** | 33+ componentes de visualización |
| **Escalabilidad** | Múltiples campos, pozos y macollas sin límite fijo |

---

## Arquitectura del Sistema

```
┌──────────────┐    ┌──────────────────────┐    ┌──────────────────┐
│  SIMULADOR   │    │  MOTOR OPTIMIZACIÓN  │    │  MONITOREO       │
│              │    │                      │    │                  │
│ N pozos      │───▶│ 15 motores de IA     │───▶│ 33+ widgets      │
│ N campos     │    │ ML/DL (PyTorch)      │    │ Dashboards       │
│ 4 lift types │    │ FastAPI + Kafka       │    │ Angular 18       │
│ MQTT/REST    │    │ PostgreSQL + Redis    │    │ ECharts          │
│              │    │                      │    │                  │
│ Python       │    │ Python               │    │ TypeScript       │
└──────────────┘    └──────────────────────┘    └──────────────────┘
                              │         ▲
                    ┌─────────▼─────────┤
                    │   ThingsBoard PE   │
                    │   Plataforma IoT   │
                    │                    │
                    │  Telemetría MQTT   │
                    │  REST API          │
                    │  Gestión entidades │
                    │  Motor de reglas ──┤
                    │                    │
                    │  ┌──────────────┐  │
                    │  │ SIMULADOR    │  │
                    │  │ INTERACTIVO  │  │
                    │  │ What-If      │  │
                    │  │ reactivo     │  │
                    │  └──────────────┘  │
                    └────────────────────┘
```

---

## Capacidades de IA / Machine Learning

| Capacidad | Algoritmo | Beneficio |
|-----------|-----------|-----------|
| **Análisis Nodal** | IPR (Vogel, Darcy, Fetkovich, Jones-Blount-Glaze) × VLP (Beggs & Brill) | Encuentra punto óptimo de operación |
| **Pronóstico de Producción** | DCA (Arps Modificado) + Monte Carlo P10/P50/P90 | Planificación de producción con incertidumbre |
| **Detección de Anomalías** | CUSUM + 24 reglas + LSTM-Autoencoder | Alerta temprana antes de falla |
| **Predicción de Fallas** | XGBoost clasificador | Anticipa fallas ESP en 30 días |
| **Clasificación de Carta** | CNN / Heurístico | Diagnóstico automático SRP |
| **Optimización Multi-Objetivo** | NSGA-II (producción × energía × vida útil) | Pareto-óptimo con trade-offs explícitos |
| **Control Autónomo** | Reinforcement Learning (PPO) con safety gates | Ajustes automáticos supervisados |
| **Desgaste de Elastómero** | Arrhenius térmico | Predicción vida útil PCP |
| **Dinámica de Varillas** | Gibbs Wave Equation | Carta dinamométrica de fondo SRP |
| **Control Estadístico** | EWMA + PCA (Hotelling T²) | Detección de drift gradual |

---

## Tipos de Levantamiento Soportados

### ESP — Bombeo Electrosumergible
- **Optimiza**: Frecuencia (Hz)
- Monitoreo de motor, bomba centrífuga, variador
- Detección: gas lock, desgaste, sobrecalentamiento, falla eléctrica

### SRP — Bombeo Mecánico con Balancín
- **Optimiza**: SPM (golpes/min)
- Carta dinamométrica, cargas de varilla, llenado de bomba
- Detección: fluid pound, gas lock, varilla partida, fugas

### PCP — Bombeo de Cavidad Progresiva
- **Optimiza**: RPM
- Torque, desgaste de elastómero, eficiencia
- Modelo Arrhenius para vida remanente (NBR/HNBR/FKM)

### Gas Lift — Levantamiento por Gas
- **Optimiza**: Inyección de gas (MSCFD)
- Curvas GLPC, casing heading, asignación multi-pozo
- Algoritmo equal-slope para distribución óptima de gas

---

## Dashboards

### Monitoreo de Pozos (Mosaico)
- Vista mosaico de todos los pozos con filtros por campo, macolla y tipo
- Detalle por tipo de levantamiento con subsistemas modales
- KPIs en tiempo real con tendencias 24h
- Múltiples estados y widgets especializados

### Simulación Interactiva (Dashboard v4 — 53 widgets, 5 estados)
- Análisis what-if en tiempo real desde el dashboard
- Controles de parámetros operativos (frecuencia, SPM, RPM, inyección)
- Resultados reactivos: cambiar slider → recálculo automático
- Superposición de datos reales vs simulados en gráficos con series punteadas
- Proyección de 12 horas futuras (144 puntos a intervalos de 5 min)
- Tabla de comparación dinámica: parámetros originales vs modificados con estado coloreado
- Pronóstico DCA basado en 180 días de historial de producción
- Restauración selectiva de parámetros individuales a valores originales
- Aislamiento total: datos simulados no afectan operación real

### Optimización de Producción
- Waterfall de producción (actual → ganancias → optimizado)
- Ranking de oportunidades con acciones recomendadas
- Scatter eficiencia vs salud por pozo
- Asignación óptima de gas lift

### Administración
- Navegador jerárquico (campo → macolla → pozo)
- Tabla de pozos con estado de optimización
- Configuración de parámetros por pozo
- Niveles de data readiness (L1/L2/L3)

---

## Tecnologías

| Capa | Tecnologías |
|------|-------------|
| **Frontend** | Angular 18, ECharts 5.5, PrimeNG, Tailwind CSS |
| **Backend** | FastAPI, Python 3.11, SQLAlchemy 2.0, APScheduler |
| **ML/AI** | PyTorch 2.1, scikit-learn, XGBoost, NumPy, SciPy |
| **IoT** | ThingsBoard PE, MQTT (Paho), Apache Kafka |
| **Base de datos** | PostgreSQL (async), Redis |
| **Infraestructura** | Docker, PM2, Prometheus |
| **Simulación** | Python, NumPy, SciPy, Paho MQTT |

---

## Diferenciadores

1. **Cobertura completa**: Único sistema que soporta 4 tipos de levantamiento con optimización específica para cada uno
2. **IA de producción**: No solo monitoreo — el sistema calcula y recomienda setpoints óptimos automáticamente
3. **Detección proactiva**: Anomalías detectadas en menos de 5 minutos con 24 reglas + ML
4. **Análisis probabilístico**: Pronósticos DCA con bandas P10/P50/P90 para decisiones informadas
5. **Optimización de portafolio**: No solo pozo por pozo — optimización a nivel de campo con asignación de recursos
6. **Autonomía supervisada**: RL con safety gates permite control automático con aprobación humana
7. **Simulador integrado**: Generación de datos realistas para demostración y desarrollo sin depender de pozos reales
8. **What-If interactivo**: Evaluar escenarios hipotéticos en tiempo real sin afectar la operación, con proyección visual de 12 horas y comparación dinámica de parámetros
9. **Escalable**: Arquitectura modular para agregar campos, pozos y algoritmos

---

## Soporte Multi-Campo

La plataforma soporta múltiples campos petroleros con características de yacimiento diferenciadas:

| Tipo de Crudo | Rango API | Regiones Típicas |
|---------------|-----------|-----------------|
| Extra-pesado | 6-12 °API | Faja del Orinoco |
| Pesado/Mediano | 18-25 °API | Lago de Maracaibo |
| Liviano | 28-36 °API | Oriente |

Cada campo se configura con sus parámetros de yacimiento, tipos de levantamiento predominantes y estructura de macollas. La arquitectura permite agregar campos y pozos de forma ilimitada.

---

## Contacto

- **Web**: https://atilax.io
- **Plataforma base**: ThingsBoard Professional Edition
