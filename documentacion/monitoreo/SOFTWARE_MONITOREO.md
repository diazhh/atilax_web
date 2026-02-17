# Software de Monitoreo y Visualización — Atilax Monitoring Platform

## Resumen

La **Plataforma de Monitoreo Atilax** es un sistema de visualización avanzado construido sobre ThingsBoard Professional Edition que proporciona dashboards interactivos para monitorear, optimizar y simular escenarios de producción de pozos petroleros en tiempo real. Incluye 33+ widgets (personalizados en Angular 18 con ECharts + widgets stock de TB) para visualización de datos de ingeniería de petróleo y simulación interactiva. Escalable a cualquier número de pozos, campos y macollas.

---

## Plataforma Base: ThingsBoard

### ¿Qué es ThingsBoard?
ThingsBoard es una plataforma IoT (Internet de las Cosas) de código abierto que provee:
- **Gestión de dispositivos**: Registro y organización de activos y dispositivos
- **Recolección de datos**: Ingesta de telemetría vía MQTT, HTTP, CoAP
- **Motor de reglas**: Procesamiento de datos en tiempo real con chains configurables
- **Dashboards**: Visualización con widgets nativos y extensiones personalizadas
- **Control de acceso**: Multi-tenancy con roles y permisos

### Modelo de Entidades
- Activos tipo **well** (pozos) con atributos de equipo, yacimiento y optimización
- **Macollas** (plataformas de producción) agrupando pozos
- **Campos petroleros** como nivel superior de la jerarquía
- Soporte para múltiples campos, macollas y pozos sin límite fijo

---

## Arquitectura de Dashboards

### Dashboards Principales

```
┌─────────────────────────────────────────┐
│              HUB (Centro de Control)     │
│     Portal central de navegación        │
│     KPIs globales + resumen por campo   │
├─────────────┬───────────┬───────────────┤
│             │           │               │
▼             ▼           ▼               │
┌──────────┐ ┌─────────┐ ┌────────────┐  │
│MONITOREO │ │ CAMPO   │ │OPTIMIZACIÓN│  │
│(Mosaico) │ │         │ │            │  │
│78 widgets│ │ KPIs    │ │ Portfolio  │  │
│20 estados│ │ Ranking │ │ Waterfall  │  │
│          │ │ Mapa    │ │ Scatter    │  │
│Detalle   │ │         │ │ Gas Alloc  │  │
│por tipo: │ │ Detalle │ │ ML Dash    │  │
│ESP,SRP,  │ │ de pozo │ │            │  │
│PCP,GL    │ │         │ │ Por tipo:  │  │
│          │ │         │ │ ESP,SRP,   │  │
│Modales:  │ │         │ │ PCP,GL     │  │
│Motor,    │ │         │ │            │  │
│Bomba,    │ │         │ │ Avanzada:  │  │
│Varillas  │ │         │ │ NSGA-II    │  │
└──────────┘ └─────────┘ └────────────┘  │
      │                                   │
      │  ┌────────────────┐               │
      │  │ SIMULACIÓN     │               │
      └─▶│ What-If v4     │               │
         │ Interactivo    │               │
         │ 53 widgets     │               │
         │ 5 estados      │               │
         └────────────────┘               │
              ┌────────────────┐           │
              │ADMINISTRACIÓN  │◄──────────┘
              │Configuración   │
              │de pozos        │
              └────────────────┘
```

### Navegación por Estados
- Cada dashboard tiene múltiples **estados** (vistas)
- Click en un pozo → navega al estado de detalle con ese pozo seleccionado
- Botones de acción → navegan entre dashboards y estados
- Aliases de entidad (`stateEntity`, `assetType`) resuelven datos dinámicamente

---

## Widgets Personalizados (33 Componentes)

### Tecnologías de los Widgets
| Componente | Tecnología |
|------------|------------|
| Framework | Angular 18.2 |
| Gráficos | ECharts 5.5 (fork ThingsBoard) |
| UI Components | PrimeNG 18.0 + Angular Material 18.2 |
| Estilos | Tailwind CSS 3.4 + SCSS |
| Build | SystemJS module (~1.2 MB compilado) |
| Datos | ThingsBoard REST API (misma sesión, mismo origen) |

### Categorías de Widgets

---

#### Hub — Centro de Control (2 widgets)

**Dashboard Hub** — Portal de navegación central
- Tarjetas de resumen por campo con KPIs principales
- Tendencias de producción global
- Resumen de alertas activas
- Navegación directa a cada dashboard

**Field Summary** — Resumen rápido de campo
- Métricas clave por campo en formato compacto

---

#### Campo — Vista de Campo (6 widgets)

**Field KPI** — KPIs Agregados del Campo
- Producción total actual vs optimizada
- Ganancia potencial por optimización
- Pozos activos por tipo de levantamiento
- Eficiencia del campo

**Well Ranking** — Tabla de Ranking de Pozos
- Tabla ordenable con todos los pozos del campo
- Métricas: producción, eficiencia, salud, ganancia potencial
- Click en fila navega al detalle del pozo

**Production Composition** — Composición de Producción
- Gráfico dona: distribución por tipo de levantamiento
- Barras: producción actual vs optimizada

**Field Map** — Mapa del Campo
- Scatter plot con coordenadas GPS reales
- Tamaño de burbuja proporcional a producción
- Color indica estado de optimización
- Click en marcador navega al detalle

**Field Tree Navigator** — Árbol de Navegación
- Jerarquía: campo → macolla → pozo
- Filtrado y búsqueda
- Navegación directa al detalle

**Well Status Card** — Tarjetas de Estado
- Vista de tarjetas con estado rápido de cada pozo

---

#### Pozo — Detalle de Pozo (11 widgets)

**Optimization Card** — Tarjeta de Optimización
- KPIs principales: caudal actual, recomendado, ganancia potencial
- Eficiencia energética (kWh/bbl)
- Acción recomendada detallada

**Well Health Gauge** — Indicador de Salud
- Gauge semicircular 0-100
- Radar chart con componentes de salud (mecánico, eléctrico, hidráulico, producción, eficiencia)
- Código de color: verde (>70), ámbar (40-70), rojo (<40)

**Nodal Analysis** — Análisis Nodal *(Widget Signature)*
- Curvas IPR y VLP graficadas juntas
- Punto de operación (intersección) resaltado
- Toggle para overlay de VLP óptima
- Sidebar con: Pr, PI, Qmax, Pwf
- 100 puntos por curva para visualización suave

**Production Forecast** — Pronóstico de Producción
- Serie temporal histórica + pronóstico DCA (línea punteada)
- Indicador de tendencia
- Ventana de 180 días por defecto

**Equipment Diagnostics** — Diagnóstico de Equipo
Widget polimórfico que se adapta al tipo de levantamiento:
- **ESP**: Curva de rendimiento de bomba, posición vs BEP
- **SRP**: Barra de fillage, indicador de estado de bomba (normal/gas_lock/fluid_pound/fuga)
- **Gas Lift**: Curva GLPC con tasa actual vs óptima
- **PCP**: Gráfico torque vs RPM, gauge de desgaste

**Anomaly Alerts** — Alertas de Anomalías
- Lista de anomalías detectadas con badges de severidad
- Scores ML de anomalía
- Timestamps y duración

**Optimization History** — Historial de Optimización
- Log de cambios de optimización aplicados

**Failure Prediction** — Predicción de Fallas
- Indicadores de riesgo basados en ML
- Probabilidad de falla trending

**Dynamo Card** — Carta Dinamométrica
- Carga vs posición de varilla para SRP
- Clasificación: normal, fluid pound, gas lock, fuga

**Classic vs ML** — Clásico vs ML
- Comparación lado a lado de recomendaciones clásicas vs ML

**Optimization Config** — Configuración de Optimización
- Panel de ajustes de parámetros por pozo

---

#### Macolla — Comparación de Cluster (3 widgets)

**Well Comparison Table** — Tabla de Comparación
- Multi-pozo dentro de una macolla
- Badges de estado, iconos de tipo, salud, eficiencia

**Resource Allocation** — Asignación de Recursos
- Barras horizontales: producción actual vs optimizada por pozo
- Potencial inmediato de optimización visible

**Cluster Benchmarking** — Benchmarking de Cluster *(Widget Signature)*
- Radar chart 5D comparando pozos en:
  - Eficiencia
  - Salud
  - Potencial de ganancia
  - Rating energético
  - Confiabilidad

---

#### Optimización — Vista de Portafolio (5 widgets)

**Production Waterfall** — Cascada de Producción *(Widget Signature)*
- Gráfico waterfall: producción base → ganancias por pozo → total optimizado
- Visualización clara del impacto de cada optimización

**Opportunity Ranking** — Ranking de Oportunidades
- Lista rankeada de oportunidades por ganancia en BPD
- Barras de % de ganancia, badges de estado
- Acción recomendada por pozo

**Cluster Scatter** — Dispersión de Clusters *(Widget Signature)*
- Scatter 2D (X: caudal actual, Y: score de salud)
- Color por asignación de cluster ML
- Identifica segmentos de pozos con características similares

**Gas Allocation** — Asignación de Gas
- Optimización de portafolio gas lift
- Distribución de gas disponible entre pozos GL
- % de utilización e impacto económico

**ML Dashboard** — Dashboard de ML
- Métricas de rendimiento de modelos ML
- Importancia de features, calidad de clusters
- Fecha de entrenamiento y estado de modelos

---

#### Administración (3 componentes)

**Well Config Form** — Formulario de configuración de pozo
**GLPC Entry** — Entrada de datos de curvas GLPC
**Dynamo Entry** — Entrada de datos de carta dinamométrica

---

#### Simulación Interactiva — What-If Analysis (10 widgets por estado de tipo, 53 total en dashboard v4)

**Controles de Parámetros** — Panel de modificación de variables (reducido a sizeY=5 en v4)
- Widget stock `update_multiple_attributes` de ThingsBoard
- Sliders/inputs numéricos para parámetros operativos por tipo de pozo:
  - ESP: frecuencia VSD, profundidad de bomba, corte de agua, presión de yacimiento, skin
  - SRP: SPM, longitud de carrera, profundidad de bomba, corte de agua, presión
  - PCP: RPM, profundidad de bomba, corte de agua, presión
  - Gas Lift: tasa de inyección, corte de agua, presión
- Al modificar un valor, escribe `sim_param_*` en el asset → dispara simulación automática vía Motor de Reglas

**KPI Producción Simulada** — Tasa simulada (BPD)
- Widget stock `horizontal_value_card`
- Muestra `sim_opt_production_bpd` con actualización reactiva

**KPI Delta Producción** — Indicador de cambio (%)
- Muestra `sim_compare_production_delta_pct` con flecha ↑↓ y color verde/rojo

**KPI Eficiencia Simulada** — Eficiencia del sistema (%)
- Muestra `sim_opt_efficiency_pct`

**KPI Energía Simulada** — Consumo energético (kWh/bbl)
- Muestra `sim_opt_energy_kwh_bbl`

**Chart Producción Real + Simulada** — Gráfico de series de tiempo
- Widget stock `time_series_chart` con ventana de 36 horas
- Superpone `flow_rate_bpd` (histórico real, línea sólida) con series simuladas `sim_*` (proyección futura, **línea punteada** con colores más claros)
- Series simuladas por tipo de levantamiento:
  - ESP: `sim_frequency_hz`, `sim_flow_rate_bpd`, `sim_intake_pressure_psi`
  - SRP: `sim_spm`, `sim_flow_rate_bpd`, `sim_pump_fillage_pct`
  - PCP: `sim_drive_rpm`, `sim_flow_rate_bpd`, `sim_motor_power_kw`
  - Gas Lift: `sim_gas_injection_rate_mscfd`, `sim_flow_rate_bpd`, `sim_injection_pressure_psi`
- Proyección de 12 horas futuras (144 puntos a intervalos de 5 min) con `lineType: "dashed"`
- El operador ve la producción real pasada y la proyección futura con los parámetros modificados

**Tabla de Comparación de Parámetros** — Original vs Modificado *(Nuevo en v4)*
- Widget `markdown_card` con `useMarkdownTextFunction: true`
- Genera tabla HTML dinámica comparando `sim_param_*` vs `sim_original_*`
- Estado por parámetro con código de color: verde "Original" / amarillo "Modificado"
- Ubicación: debajo del panel de parámetros (row=9, col=0, sizeX=8, sizeY=2)

**Tabla de Comparación** — Real vs Simulado
- Widget `markdown_card` con tabla HTML dinámica
- Muestra parámetros y resultados lado a lado con deltas y código de color

**Curvas Nodal Simuladas** — IPR/VLP
- Widget `markdown_card` con Canvas HTML
- Dibuja curvas IPR/VLP reales (originales) y simuladas (con parámetros modificados)
- Muestra punto de operación real vs simulado

**Botones de Acción** — Navegación y control
- Iniciar/cerrar sesión de simulación
- Volver al dashboard anterior

---

## Paleta de Colores Estandarizada

### Por Estado de Optimización
| Estado | Color | Hex |
|--------|-------|-----|
| Óptimo | Verde | #22C55E |
| Subóptimo | Ámbar | #F59E0B |
| Crítico | Rojo | #EF4444 |
| Desconocido | Gris | #94A3B8 |
| Offline | Gris oscuro | #475569 |

### Por Tipo de Levantamiento
| Tipo | Color | Hex |
|------|-------|-----|
| ESP | Azul | #3B82F6 |
| SRP | Púrpura | #8B5CF6 |
| Gas Lift | Cian | #06B6D4 |
| PCP | Naranja | #F97316 |

### Curvas de Ingeniería
| Curva | Color |
|-------|-------|
| IPR | Rojo (#EF4444) |
| VLP | Azul (#3B82F6) |
| Óptima | Verde (#22C55E) |
| Pronóstico | Violeta (#A855F7) |

### Rangos de Gauge
- 0-40: Rojo (crítico)
- 40-70: Ámbar (atención)
- 70-100: Verde (normal)

---

## Servicio de Datos (TbDataService)

El servicio central que conecta todos los widgets con ThingsBoard:

| Método | Función |
|--------|---------|
| `getWellAssets()` | Lista todos los pozos con atributos resumen (cache 30s) |
| `getAttributes(assetId, keys?)` | Atributos de un pozo específico (opt_*, equipo, yacimiento) |
| `getTelemetry(assetId, keys, startTs, endTs)` | Series temporales para gráficos históricos |
| `getAlarms(assetId)` | Alarmas y anomalías por pozo |

**Widgets multi-pozo** (Field KPI, Well Ranking, etc.) usan `getWellAssets()` + filtros.
**Widgets single-pozo** (Nodal Analysis, Health Gauge, etc.) usan `getAttributes(assetId)`.

---

## Dashboard Monitoreo — Estructura Multi-Estado

El dashboard de Monitoreo es el más complejo con **20 estados**:

### Estado default (raíz)
- Mosaico de todos los pozos con estado rápido
- Filtros por campo, macolla, tipo de levantamiento

### Estados de detalle por tipo (4)
- `detalle_esp` — Vista completa ESP
- `detalle_srp` — Vista completa SRP
- `detalle_pcp` — Vista completa PCP
- `detalle_gaslift` — Vista completa Gas Lift

### Estados modales (15)
- Subsistemas de equipo (motor, bomba, variador)
- Análisis detallado de componentes
- Configuración y calibración

---

## Dashboard Optimización — Estructura de 5 Estados

| Estado | Contenido |
|--------|-----------|
| `default` | Vista de portafolio completa |
| `opt_esp` | Optimización específica ESP |
| `opt_srp` | Optimización específica SRP |
| `opt_pcp` | Optimización específica PCP |
| `opt_gaslift` | Optimización específica Gas Lift |
| `optimizacion_avanzada` | NSGA-II y RL avanzado |

---

## Dashboard Simulación v4 — Estructura de 5 Estados (53 widgets)

Dashboard ID: `21b9fe80-0c15-11f1-90c6-8f12f97ce13a`

| Estado | Widgets | Contenido |
|--------|---------|-----------|
| `default` | Tabla de pozos | Tabla de entidades con click → navega al estado sim_{tipo} según `lift_type` |
| `sim_esp` | 13 | Parámetros ESP + KPIs + chart con proyección + comparación original/modificado |
| `sim_srp` | 13 | Parámetros SRP + KPIs + chart con proyección + comparación original/modificado |
| `sim_pcp` | 13 | Parámetros PCP + KPIs + chart con proyección + comparación original/modificado |
| `sim_gaslift` | 13 | Parámetros Gas Lift + KPIs + chart con proyección + comparación original/modificado |

Cada estado de tipo contiene 13 widgets (antes 12):
1. Título con nombre del pozo
2. Controles de parámetros (sizeY=5, reducido de 7)
3. KPI Producción simulada
4. KPI Delta producción
5. KPI Eficiencia simulada
6. KPI Energía simulada
7. Chart real + simulado (36h, series punteadas)
8. **Tabla comparación original vs modificado** *(nuevo en v4)*
9. Tabla comparación real vs simulado
10. Curvas nodal simuladas
11. Botón volver
12. Botón cerrar sesión
13. Estado de simulación

Cambios clave en v4:
- **Widget de comparación de parámetros**: markdown_card con `useMarkdownTextFunction: true`, genera tabla HTML dinámica comparando `sim_param_*` vs `sim_original_*` con colores de estado
- **Series punteadas en chart**: cada tipo incluye sus claves `sim_*` con `lineType: "dashed"` y colores más claros, mostrando 12h de proyección futura
- **Ventana temporal extendida**: chart ampliado a 36h (antes 24h) para mostrar datos reales + proyección futura
- **Layout ajustado**: panel de parámetros reducido (sizeY=5), widget de comparación insertado (row=9, sizeY=2)

---

## Flujo de Datos Completo

```
Pozo Real / Simulador
         │
         ▼ (MQTT/Kafka)
┌─────────────────────┐
│    ThingsBoard       │
│  ┌───────────────┐  │
│  │  Telemetría    │  │ ← Datos en tiempo real
│  │  (time-series) │  │
│  ├───────────────┤  │
│  │  Server Attrs  │  │ ← Resultados de optimización (opt_*)
│  │  (key-value)   │  │
│  ├───────────────┤  │
│  │  Alarmas       │  │ ← Anomalías detectadas
│  │  (events)      │  │
│  └───────────────┘  │
│         │            │
│         ▼            │
│  ┌───────────────┐  │
│  │  REST API      │  │
│  │  (same origin) │  │
│  └───────────────┘  │
│         │            │
│         ▼            │
│  ┌───────────────┐  │
│  │  Dashboards    │  │
│  │  + 33 Widgets  │  │ ← Visualización interactiva
│  │  Angular 18    │  │
│  └───────────────┘  │
└─────────────────────┘
```

---

## Valor para el Negocio

1. **Visibilidad completa**: Todos los pozos monitoreados en tiempo real desde un solo portal
2. **Decisiones rápidas**: KPIs claros con código de color para identificar pozos que requieren atención
3. **Análisis de ingeniería**: Curvas nodal, DCA, dinamométricas integradas sin software adicional
4. **Optimización visual**: Waterfall y scatter charts muestran el potencial de mejora del campo
5. **Navegación intuitiva**: De visión general de campo a detalle de pozo en 2 clicks
6. **Acceso web**: Sin instalación de software, accesible desde cualquier navegador
7. **Multi-dispositivo**: Responsive para desktop, tablet y móvil
8. **Personalizable**: Widgets configurables, umbrales ajustables, layouts flexibles
