# Simulador de Pozos Petroleros — Atilax Sim Pozos

## Resumen

El **Simulador de Pozos Atilax** es una herramienta de software que genera datos realistas de operación de campos petroleros. Crea pozos simulados con modelos físicos de producción, genera telemetría en tiempo real y datos históricos, e inyecta anomalías y escenarios de falla realistas.

El simulador alimenta la plataforma ThingsBoard IoT con datos idénticos a los que produciría instrumentación real en campo, permitiendo el desarrollo, prueba y demostración de sistemas de monitoreo y optimización sin necesidad de conexión a pozos reales. Soporta múltiples campos petroleros con distintos tipos de crudo y métodos de levantamiento artificial.

---

## Propósito y Caso de Uso

- **Desarrollo y pruebas**: Proporciona datos realistas para desarrollar dashboards, widgets y algoritmos de optimización
- **Demostración comercial**: Permite mostrar el sistema completo funcionando con datos representativos de campos venezolanos
- **Entrenamiento de ML**: Genera datos con anomalías etiquetadas para entrenar modelos de detección y predicción
- **Validación de algoritmos**: Permite verificar motores de optimización contra comportamientos conocidos

---

## Campos Petroleros Simulados

El simulador puede replicar múltiples campos petroleros con características de yacimiento diferenciadas. Soporta la configuración de:

| Tipo de Campo | Rango API | Métodos de Levantamiento Típicos |
|---------------|-----------|----------------------------------|
| Extra-pesado | 6-12 °API | PCP, ESP |
| Pesado/Mediano | 18-25 °API | SRP, ESP |
| Liviano | 28-36 °API | Gas Lift, ESP |

Cada campo se configura con número de pozos, macollas, tipo de crudo, y distribución de métodos de levantamiento.

---

## Métodos de Levantamiento Artificial

El simulador implementa modelos físicos detallados para 4 tipos de levantamiento artificial:

### ESP — Bombeo Electrosumergible
- Modelo de curvas de bomba con etapas (200 etapas típico)
- Motor eléctrico sumergible (150 HP, 2200V, 45A)
- Variador de frecuencia (VSD) con control 30-90 Hz
- Monitoreo: vibración, temperatura de motor, resistencia de aislamiento
- Caudal de diseño: 1,200 BPD, cabeza de diseño: 5,000 ft

### SRP — Bombeo Mecánico con Balancín
- Unidad de bombeo C-320D-256-120
- Carrera 144", 12 SPM, capacidad de viga 25,000 lbs
- Modelado de carta dinamométrica (cargas de varilla)
- Sarta de varillas multi-grado
- Bore de bomba 2"

### PCP — Bombeo de Cavidad Progresiva
- Bomba Moyno 7L6, geometría 2-3 lóbulos
- Desplazamiento 1,200 cc/rev, caudal máximo 2,000 BPD
- Torque hasta 4,500 ft-lbs, motor 60 HP @ 460V
- Límite térmico del elastómero: 275°F (material NBR)
- Ideal para crudo extra-pesado

### Gas Lift — Levantamiento por Gas
- 5 mandriles con válvulas configuradas por profundidad
- Presión de inyección: 1,200 psi, tasa óptima: 500 MSCFD
- Simulación de casing heading (oscilaciones con período de 15 min)
- Volumen anular: 120 bbl

---

## Modelos Físicos Implementados

### Modelo de Yacimiento (IPR)
- **Ecuación de Vogel** para yacimientos saturados (Pr < Pb)
- **Ley de Darcy** para flujo lineal (Pr > Pb)
- Depleción de presión mediante balance de materiales (OOIP)
- Evolución del corte de agua en el tiempo

### Propiedades de Fluido (PVT)
- **Correlación de Standing**: Rs (GOR en solución) y Bo (factor volumétrico)
- **Correlación de Beggs-Robinson**: viscosidad del petróleo muerto y vivo
- Cálculos de densidad multifásica (petróleo, agua, gas)

### Parámetros de Yacimiento Configurables (rangos típicos por tipo de crudo)
| Parámetro | Pesado/Mediano | Extra-pesado | Liviano |
|-----------|----------------|-------------|---------|
| Presión (psi) | 2,200-3,000 | 800-1,500 | 2,800-4,000 |
| Temperatura (°F) | 150-200 | 120-180 | 200-280 |
| API | 18-25 | 6-12 | 28-36 |
| Viscosidad (cp) | 50-500 | 2,000-12,000 | 1-10 |
| Corte de agua (%) | 30-70 | 10-40 | 40-85 |
| GOR (scf/stb) | 100-400 | 50-150 | 500-1,500 |

---

## Sistema de Inyección de Anomalías

El simulador puede inyectar 8 tipos de fallas realistas con progresión gradual:

| Anomalía | Aplica a | Descripción |
|----------|----------|-------------|
| **Degradación de bomba** | ESP, SRP, PCP | Pérdida de eficiencia 0.15%/día, aumento de corriente y vibración |
| **Interferencia de gas** | ESP, SRP | Gas libre bloqueando la bomba (gas lock) |
| **Problemas eléctricos** | ESP | Caída de voltaje, sobrecorriente, desbalance de fases |
| **Irrupción de agua** | Todos | Aumento rápido del corte de agua |
| **Producción de arena** | PCP, ESP | Conteo elevado de arena con aumento de torque |
| **Casing heading** | Gas Lift | Oscilaciones periódicas en presión de cabeza |
| **Carga de pozo** | Gas Lift | Carga de líquido en pozos productores de gas |
| **Sensor atascado** | Todos | Congelamiento de señal seguido de recuperación |

Cada anomalía tiene:
- Probabilidad configurable (default: 2% por pozo por día)
- Período de desarrollo gradual (30 días de onset)
- Modulación de múltiples variables telemetría correlacionadas
- Posibilidad de solapamiento con otras anomalías activas

---

## Comunicación con ThingsBoard

### MQTT (Modo Tiempo Real)
- Un dispositivo RTU por pozo con token de acceso único
- Topic: `v1/devices/me/telemetry`
- Intervalo configurable (default: 30 segundos)
- Aceleración temporal: 1× hasta 60× (1 minuto real = 1 hora simulada)

### REST API (Creación y Datos Históricos)
- Autenticación JWT con renovación automática
- Creación de entidades: campos → macollas → pozos → dispositivos RTU
- Relaciones jerárquicas padre-hijo
- Carga masiva de datos históricos (hasta 365 días, 48 muestras/día)

### Jerarquía de Entidades en ThingsBoard
```
Campo Petrolero (asset: field)
├── Macolla (asset: macolla)
│    ├── Pozo (asset: well)
│    │    ├── RTU (device: rtu_esp/srp/pcp/gaslift)
│    │    ├── Gauge de fondo (device, opcional)
│    │    └── Medidor multifásico (device, opcional)
│    ├── Separador (asset: facility)
│    ├── Compresor (asset: facility)
│    ├── Tanque (asset: facility)
│    └── Gateway IoT (device: por macolla)
└── [Relaciones a nivel de campo]
```

---

## Variables de Telemetría Generadas

### Comunes a Todos los Pozos
- `flow_rate_bpd` — Caudal de producción (barriles por día)
- `water_cut_pct` — Corte de agua (%)
- `gor_scf_stb` — Relación gas-petróleo
- `wellhead_pressure_psi` — Presión de cabeza
- `wellhead_temp_f` — Temperatura de cabeza
- `casing_pressure_psi` — Presión de casing
- `tubing_pressure_psi` — Presión de tubing
- `oil_cumulative_stb` — Producción acumulada de petróleo
- `water_cumulative_stb` — Producción acumulada de agua
- `gas_cumulative_mscf` — Producción acumulada de gas

### ESP Específicas
- `esp_current_a`, `esp_voltage_v`, `esp_frequency_hz`
- `esp_motor_temp_f`, `esp_vibration_ips`
- `esp_intake_pressure_psi`, `esp_discharge_pressure_psi`
- `esp_power_kw`, `esp_isolation_mohm`

### SRP Específicas
- `srp_spm`, `srp_load_max_lbs`, `srp_load_min_lbs`
- `srp_pump_fillage_pct`, `srp_motor_current_a`
- `srp_fluid_level_ft`, `srp_polished_rod_hp`

### PCP Específicas
- `pcp_rpm`, `pcp_torque_ftlbs`, `pcp_motor_current_a`
- `pcp_intake_pressure_psi`, `pcp_discharge_pressure_psi`
- `pcp_efficiency_pct`, `pcp_vibration_ips`

### Gas Lift Específicas
- `gl_injection_rate_mscfd`, `gl_choke_pct`
- `gl_casing_pressure_psi`, `gl_separator_pressure_psi`
- `gl_glr_scf_stb`

---

## Sistema de Simulación Interactiva

El simulador alimenta un sistema de simulación interactiva (What-If) que permite a los ingenieros modificar parámetros operativos desde el dashboard y ver el impacto en tiempo real.

### Buffer de Telemetría Extendido (Redis)

El sistema mantiene un buffer en Redis por cada pozo con sesión de simulación activa:

| Parámetro | Valor | Descripción |
|-----------|-------|-------------|
| `redis_buffer_count` | 288 | Entradas en buffer (24h a intervalos de 5 min) |
| `dca_history_days` | 180 | Días de historial de `flow_rate_bpd` consultados vía TB REST API |
| `dca_tb_limit` | 10,000 | Máximo de puntos consultados a TB para historial DCA |

El snapshot del pozo utiliza dos fuentes de datos:
1. **Buffer Redis** (288 entradas) — telemetría reciente para análisis nodal y cálculos de estado actual
2. **Historial extendido TB** (180 días de `flow_rate_bpd`) — consultado vía `_fetch_extended_telemetry()` para pronóstico DCA con mayor precisión

Cuando el historial extendido tiene 30+ entradas, el predictor DCA lo usa en lugar del buffer Redis, mejorando significativamente la calidad del pronóstico.

### Proyección de Telemetría Simulada

Cuando se ejecuta una simulación, el sistema publica telemetría proyectada con **timestamps futuros** para que los gráficos de series de tiempo muestren la producción simulada como extensión visual del histórico real.

| Parámetro | Valor | Descripción |
|-----------|-------|-------------|
| `sim_projection_points` | 144 | Puntos de proyección (12 horas futuras) |
| `sim_projection_interval_ms` | 300,000 | Intervalo entre puntos (5 minutos) |

**Claves de telemetría por tipo de levantamiento (`SIM_TELEMETRY_KEYS`):**

| Tipo | Claves de Telemetría Simulada |
|------|-------------------------------|
| **ESP** | `sim_frequency_hz`, `sim_flow_rate_bpd`, `sim_intake_pressure_psi` |
| **SRP** | `sim_spm`, `sim_flow_rate_bpd`, `sim_pump_fillage_pct` |
| **PCP** | `sim_drive_rpm`, `sim_flow_rate_bpd`, `sim_motor_power_kw` |
| **Gas Lift** | `sim_gas_injection_rate_mscfd`, `sim_flow_rate_bpd`, `sim_injection_pressure_psi` |

La función `_publish_sim_telemetry_projection()` publica los 144 puntos como timeseries con timestamps que van desde `now` hasta `now + 12h`. Esto permite que el chart de ThingsBoard muestre la línea simulada como continuación punteada del histórico real.

### Limpieza de Datos de Simulación

Al cerrar una sesión de simulación, el sistema elimina **11 claves de telemetría** (todas las proyecciones de todos los tipos de levantamiento) además de los atributos `sim_*` del asset, garantizando que no queden datos residuales.

---

## Modos de Simulación

### Tiempo Real
```bash
python main.py simulate --config config/default_config.yaml --mode realtime
```
- Loop continuo con intervalo configurable
- Streaming MQTT por dispositivo
- Aceleración temporal hasta 60×
- Apagado gracioso con Ctrl+C

### Histórico (Backfill)
```bash
python main.py simulate --config config/default_config.yaml --mode historical --days 365
```
- Genera datos pasados en lotes (365 días default)
- Hasta 48 muestras por día
- Carga vía REST API
- Sin delays de tiempo real

---

## Tecnologías

| Componente | Tecnología |
|------------|------------|
| Lenguaje | Python 3.x |
| Cálculos numéricos | NumPy, SciPy |
| MQTT | Paho MQTT |
| REST API | Requests |
| Configuración | YAML |
| Contenedores | Docker, Docker Compose |

---

## Valor para el Negocio

1. **Reducción de costos de desarrollo**: Elimina la necesidad de datos reales de campo para desarrollo y pruebas
2. **Demostración inmediata**: Sistema funcional en minutos, sin dependencia de infraestructura de campo
3. **Entrenamiento de personal**: Escenarios controlados para capacitar operadores
4. **Validación de algoritmos**: Datos con ground truth conocido para verificar optimización
5. **Escalabilidad**: Fácil extensión a más campos, más pozos, nuevos escenarios
