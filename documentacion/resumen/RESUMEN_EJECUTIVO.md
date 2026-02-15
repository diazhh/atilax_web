# Atilax — Plataforma de Optimización de Producción Petrolera

## Resumen Ejecutivo

**Atilax** es una plataforma integral de monitoreo, diagnóstico y optimización de producción petrolera que combina ingeniería de yacimientos, inteligencia artificial y visualización en tiempo real para maximizar la producción de campos petroleros con múltiples métodos de levantamiento artificial.

---

## El Problema

Los campos petroleros venezolanos operan con condiciones desafiantes:
- **Múltiples métodos de levantamiento** (ESP, SRP, PCP, Gas Lift) con requisitos de monitoreo distintos
- **Crudos diversos**: desde extra-pesado (6 °API) en Faja del Orinoco hasta liviano (36 °API) en Oriente
- **Optimización manual**: ingenieros ajustan setpoints basándose en experiencia, no en datos en tiempo real
- **Detección tardía de anomalías**: fallas detectadas después de causar pérdida de producción o daño a equipos
- **Falta de visibilidad**: información dispersa entre sistemas SCADA, hojas de cálculo y reportes manuales

---

## La Solución

Atilax integra tres componentes que trabajan en conjunto:

### 1. Simulador de Pozos
Genera datos realistas de 63 pozos en 3 campos petroleros para desarrollo, demostración y entrenamiento de modelos ML.

### 2. Motor de Optimización (IA)
15 motores de cálculo que procesan telemetría cada 5 minutos:
- **Análisis nodal** (5 modelos IPR + VLP Beggs & Brill)
- **Curvas de declinación** (Arps + Monte Carlo probabilístico)
- **Optimización por tipo** (ESP/SRP/PCP/Gas Lift)
- **Detección de anomalías** (24 reglas + LSTM-Autoencoder)
- **Optimización multi-objetivo** (NSGA-II + Reinforcement Learning)

### 3. Software de Monitoreo
33 widgets especializados en 4 dashboards interactivos con navegación jerárquica campo → macolla → pozo → subsistema.

---

## Resultados Clave

| Métrica | Valor |
|---------|-------|
| **Producción actual** | 98,302 BPD |
| **Producción optimizada** | 130,986 BPD |
| **Ganancia potencial** | +32,684 BPD (+33.2%) |
| **Pozos monitoreados** | 63 |
| **Campos petroleros** | 3 |
| **Macollas** | 7 |
| **Métodos de levantamiento** | 4 (ESP, SRP, PCP, Gas Lift) |
| **Detección de anomalías** | < 5 minutos |
| **Variables por pozo** | 20+ |
| **Atributos de optimización** | 100+ por pozo |

---

## Arquitectura del Sistema

```
┌──────────────┐    ┌──────────────────────┐    ┌──────────────────┐
│  SIMULADOR   │    │  MOTOR OPTIMIZACIÓN  │    │  MONITOREO       │
│              │    │                      │    │                  │
│ 63 pozos     │───▶│ 15 motores de IA     │───▶│ 33 widgets       │
│ 3 campos     │    │ ML/DL (PyTorch)      │    │ 4 dashboards     │
│ 4 lift types │    │ FastAPI + Kafka       │    │ Angular 18       │
│ MQTT/REST    │    │ PostgreSQL + Redis    │    │ ECharts          │
│              │    │                      │    │                  │
│ Python       │    │ Python               │    │ TypeScript       │
└──────────────┘    └──────────────────────┘    └──────────────────┘
                              │
                    ┌─────────▼─────────┐
                    │   ThingsBoard PE   │
                    │   Plataforma IoT   │
                    │                    │
                    │  Telemetría MQTT   │
                    │  REST API          │
                    │  Gestión entidades │
                    │  Motor de reglas   │
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
- **Pozos**: 18 | **Optimiza**: Frecuencia (Hz)
- Monitoreo de motor, bomba centrífuga, variador
- Detección: gas lock, desgaste, sobrecalentamiento, falla eléctrica

### SRP — Bombeo Mecánico con Balancín
- **Pozos**: 18 | **Optimiza**: SPM (golpes/min)
- Carta dinamométrica, cargas de varilla, llenado de bomba
- Detección: fluid pound, gas lock, varilla partida, fugas

### PCP — Bombeo de Cavidad Progresiva
- **Pozos**: 16 | **Optimiza**: RPM
- Torque, desgaste de elastómero, eficiencia
- Modelo Arrhenius para vida remanente (NBR/HNBR/FKM)

### Gas Lift — Levantamiento por Gas
- **Pozos**: 9 | **Optimiza**: Inyección de gas (MSCFD)
- Curvas GLPC, casing heading, asignación multi-pozo
- Algoritmo equal-slope para distribución óptima de gas

---

## Dashboards

### Monitoreo de Pozos (Mosaico)
- 78 widgets, 20 estados
- Vista mosaico de 63 pozos con filtros
- Detalle por tipo con subsistemas modales
- KPIs en tiempo real con tendencias 24h

### Optimización de Producción
- Waterfall de producción (actual → ganancias → optimizado)
- Ranking de oportunidades con acciones recomendadas
- Scatter eficiencia vs salud por pozo
- Asignación óptima de gas lift

### Administración
- Navegador jerárquico (campo → macolla → pozo)
- Tabla de 63 pozos con estado de optimización
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
7. **Simulación incluida**: Datos realistas para demo y desarrollo sin depender de pozos reales
8. **Escalable**: Arquitectura modular para agregar campos, pozos y algoritmos

---

## Campos Petroleros

| Campo | Región | Crudo | Pozos | Producción |
|-------|--------|-------|-------|------------|
| **Cerro Negro** | Faja del Orinoco | Extra-pesado (6-12 °API) | 27 | 45,225 BPD |
| **Boscán** | Lago de Maracaibo | Pesado/Mediano (18-25 °API) | 24 | 40,249 BPD |
| **Anaco** | Oriente | Liviano (28-36 °API) | 12 | 12,828 BPD |
| **Total** | | | **63** | **98,302 BPD** |

---

## Contacto

- **Web**: https://atilax.io
- **Demo**: https://panel.atilax.io
- **Plataforma**: ThingsBoard Professional Edition
