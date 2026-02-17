# Simulador Interactivo de Pozos — What-If Analysis en Tiempo Real

## Resumen

El **Simulador Interactivo** es un módulo de la plataforma Atilax que permite a ingenieros y operadores evaluar escenarios hipotéticos ("what-if") directamente desde el dashboard de ThingsBoard. El operador selecciona un pozo, modifica parámetros operativos mediante controles visuales, y el sistema recalcula automáticamente la producción, eficiencia y pronóstico del pozo con los nuevos parámetros — todo en tiempo real y sin afectar la operación real del pozo.

---

## Problema que Resuelve

En la operación petrolera, los ingenieros frecuentemente necesitan responder preguntas como:

- "¿Qué pasa si aumento la frecuencia del VSD de 50 a 60 Hz?"
- "¿Cuánto pierde el pozo si el corte de agua sube al 90%?"
- "¿Vale la pena profundizar la bomba 500 ft?"
- "¿Cuál es el impacto de una caída de presión del yacimiento?"

Hoy estas preguntas se responden con hojas de cálculo, software de escritorio (PIPESIM, Prosper) o estimaciones empíricas. El Simulador Interactivo integra estos análisis directamente en la plataforma de monitoreo, usando los datos reales del pozo como punto de partida.

---

## Flujo de Trabajo del Operador

```
1. SELECCIÓN
   Operador selecciona un pozo desde el dashboard de Monitoreo
   → Navega al estado de Simulación

2. VISUALIZACIÓN INICIAL
   Dashboard muestra datos REALES del pozo:
   • Producción actual, eficiencia, energía
   • Parámetros operativos actuales
   • Curvas nodal (IPR/VLP) reales
   • Pronóstico de producción real

3. MODIFICACIÓN DE PARÁMETROS
   Operador ajusta controles (sliders, inputs numéricos):
   • Frecuencia del VSD (ESP)
   • Velocidad de bombeo SPM (SRP)
   • RPM del rotor (PCP)
   • Tasa de inyección de gas (Gas Lift)
   • Corte de agua, presión de yacimiento, etc.

4. SIMULACIÓN AUTOMÁTICA
   Al cambiar un parámetro:
   → ThingsBoard detecta el cambio de atributo
   → Motor de Reglas dispara solicitud al simulador
   → Simulador recalcula producción con nuevos parámetros
   → Resultados se publican automáticamente en ThingsBoard

5. VISUALIZACIÓN DE RESULTADOS
   Dashboard se actualiza en tiempo real:
   • KPIs simulados vs reales (producción, eficiencia, energía)
   • Deltas con indicadores de mejora/deterioro
   • Curvas nodal simuladas superpuestas a las reales
   • Pronóstico de producción con los nuevos parámetros
   • Alertas si los parámetros violan restricciones

6. CIERRE
   Operador cierra la sesión de simulación
   → Datos simulados se eliminan del pozo
   → El pozo vuelve a mostrar solo datos reales
```

---

## Parámetros Modificables por Tipo de Levantamiento

### ESP — Bombeo Electrosumergible
| Parámetro | Unidad | Rango Típico | Efecto |
|-----------|--------|--------------|--------|
| Frecuencia VSD | Hz | 35 – 65 | Controla caudal y cabeza de la bomba |
| Profundidad de bomba | ft | 3,000 – 15,000 | Afecta presión de succión y sumergencia |
| Corte de agua | % | 0 – 99 | Modifica propiedades del fluido producido |
| Presión de yacimiento | psi | 500 – 8,000 | Simula depleción o estimulación |
| Factor de daño (skin) | — | -5 – 50 | Simula estimulación o daño de formación |

### SRP — Bombeo Mecánico
| Parámetro | Unidad | Rango Típico | Efecto |
|-----------|--------|--------------|--------|
| Velocidad de bombeo | SPM | 2 – 15 | Controla tasa de desplazamiento |
| Longitud de carrera | in | 36 – 192 | Afecta volumen por ciclo |
| Profundidad de bomba | ft | 3,000 – 12,000 | Modifica carga de varillas |
| Corte de agua | % | 0 – 99 | Afecta gravedad del fluido |
| Presión de yacimiento | psi | 500 – 8,000 | Simula depleción |

### PCP — Cavidad Progresiva
| Parámetro | Unidad | Rango Típico | Efecto |
|-----------|--------|--------------|--------|
| RPM | rev/min | 50 – 500 | Controla caudal (proporcional) |
| Profundidad de bomba | ft | 1,000 – 6,000 | Afecta torque y desgaste |
| Corte de agua | % | 0 – 99 | Modifica viscosidad efectiva |
| Presión de yacimiento | psi | 500 – 8,000 | Simula depleción |

### Gas Lift — Levantamiento por Gas
| Parámetro | Unidad | Rango Típico | Efecto |
|-----------|--------|--------------|--------|
| Tasa de inyección de gas | MSCFD | 50 – 5,000 | Controla aligeramiento de columna |
| Corte de agua | % | 0 – 99 | Afecta densidad de mezcla |
| Presión de yacimiento | psi | 500 – 8,000 | Simula depleción |

---

## Modelos de Simulación

El simulador utiliza los mismos modelos de ingeniería del Motor de Optimización, pero los ejecuta con los parámetros modificados por el operador:

### Análisis Nodal (IPR × VLP)
- Recalcula las curvas IPR y VLP con los nuevos parámetros
- Encuentra el nuevo punto de operación (intersección)
- Compara con el punto de operación real
- Genera curvas simuladas de 100 puntos para visualización

### Predicción de Producción
- Ajusta los parámetros del modelo DCA con los nuevos setpoints
- Genera pronóstico de producción a 60 meses con los parámetros modificados
- Calcula EUR (Estimated Ultimate Recovery) simulado vs real

### Evaluación de Restricciones
- Verifica que los parámetros simulados no violen restricciones operativas:
  - Presión de intake mínima (evitar gas lock)
  - Temperatura máxima de motor
  - Vibración máxima permitida
  - Corriente máxima del motor
  - Torque máximo (PCP)
- Genera advertencias si se detectan violaciones

### Comparación Real vs Simulado
- Calcula deltas de producción (BPD y %)
- Calcula delta de eficiencia
- Calcula delta de consumo energético (kWh/bbl)
- Genera recomendaciones basadas en los resultados

---

## Arquitectura Técnica

### Flujo de Datos Reactivo

```
┌──────────────────────────────────────────────────────────────────┐
│                     THINGSBOARD PE                                │
│                                                                   │
│  ┌─────────────────┐     ┌──────────────────┐                   │
│  │ Widget Control   │     │ Motor de Reglas   │                   │
│  │ (update_multiple │────▶│ (Rule Chain)      │                   │
│  │  _attributes)    │     │                   │                   │
│  │                  │     │ Detecta cambio en │                   │
│  │ Escribe:         │     │ sim_param_* del   │                   │
│  │ sim_param_freq_hz│     │ asset             │                   │
│  │ sim_param_wc_pct │     │                   │                   │
│  └─────────────────┘     └────────┬──────────┘                   │
│                                    │                              │
│                                    │ HTTP POST                    │
│                                    ▼                              │
│                          ┌─────────────────┐                     │
│                          │ Servicio de      │                     │
│                          │ Simulación       │                     │
│                          │ (FastAPI)        │                     │
│                          │                  │                     │
│                          │ 1. Lee params    │                     │
│                          │ 2. Ejecuta modelo│                     │
│                          │ 3. Publica sim_* │                     │
│                          └────────┬─────────┘                     │
│                                    │                              │
│                                    │ REST API (save attributes)   │
│                                    ▼                              │
│  ┌─────────────────┐     ┌──────────────────┐                   │
│  │ Widgets de       │◀────│ Asset del Pozo    │                   │
│  │ Resultado        │     │                   │                   │
│  │                  │     │ sim_opt_prod_bpd  │                   │
│  │ KPIs, Charts,    │     │ sim_opt_eff_pct   │                   │
│  │ Tabla Comparación│     │ sim_opt_ipr_curve │                   │
│  │                  │     │ sim_flow_rate_bpd │                   │
│  └─────────────────┘     └──────────────────┘                   │
└──────────────────────────────────────────────────────────────────┘
```

### Aislamiento de Datos

Todos los datos de simulación coexisten en el mismo asset (pozo) que los datos reales, pero con un prefijo `sim_` que los identifica inequívocamente:

| Tipo | Datos Reales | Datos Simulados |
|------|-------------|-----------------|
| Parámetros de entrada | `vsd_frequency_hz` | `sim_param_freq_hz` |
| Producción | `flow_rate_bpd` | `sim_flow_rate_bpd` |
| Optimización | `opt_rate_bpd` | `sim_opt_production_bpd` |
| Eficiencia | `opt_efficiency_pct` | `sim_opt_efficiency_pct` |
| Curvas nodal | `opt_ipr_curve` | `sim_opt_ipr_curve` |
| Estado | — | `sim_active` (true/false) |
| Timestamp | — | `sim_last_run` |

Al cerrar la sesión de simulación, todos los atributos y telemetría con prefijo `sim_` se eliminan automáticamente del asset, dejando el pozo limpio con solo datos reales.

### Endpoints de Simulación

| Método | Endpoint | Función |
|--------|----------|---------|
| `POST` | `/simulation/create` | Inicia sesión para un pozo, captura snapshot |
| `POST` | `/simulation/reactive` | Trigger desde Rule Chain: recibe params, ejecuta, publica |
| `PATCH` | `/simulation/{id}/params` | Modifica parámetros de sesión activa |
| `POST` | `/simulation/{id}/run` | Ejecuta simulación manual |
| `GET` | `/simulation/{id}/compare` | Obtiene comparación detallada real vs simulado |
| `POST` | `/simulation/{id}/reset` | Restaura parámetros originales |
| `DELETE` | `/simulation/{id}` | Cierra sesión y limpia datos sim_* |
| `GET` | `/simulation/well/{well_id}` | Consulta sesión activa de un pozo |
| `POST` | `/simulation/calibrate` | Calibra modelo contra datos reales |

### Motor de Reglas (Rule Chain)

El Motor de Reglas de ThingsBoard conecta los widgets de control con el servicio de simulación:

1. **Filtro**: Solo procesa mensajes `ATTRIBUTES_UPDATED` con claves que empiezan por `sim_param_`
2. **Enriquecimiento**: Agrega el ID del pozo (originator) al mensaje
3. **Transformación**: Extrae los parámetros modificados del mensaje
4. **HTTP Call**: Envía `POST /simulation/reactive` con los parámetros al servicio
5. **Log**: Registra el resultado de la simulación

---

## Dashboard de Simulación

### Widgets Utilizados

Todos los widgets son componentes stock de ThingsBoard — sin desarrollo Angular adicional:

| Widget | Tipo TB | Función |
|--------|---------|---------|
| **Controles de Parámetros** | Update Multiple Attributes | Sliders/inputs que escriben `sim_param_*` en el asset |
| **KPI Producción Simulada** | Horizontal Value Card | Muestra `sim_opt_production_bpd` |
| **KPI Delta Producción** | Horizontal Value Card | Muestra `sim_compare_production_delta_pct` con indicador ↑↓ |
| **KPI Eficiencia Simulada** | Horizontal Value Card | Muestra `sim_opt_efficiency_pct` |
| **KPI Energía Simulada** | Horizontal Value Card | Muestra `sim_opt_energy_kwh_bbl` |
| **Chart Producción** | Time Series Chart | Superpone `flow_rate_bpd` (real histórico) + `sim_flow_rate_bpd` (simulado futuro) |
| **Tabla Comparación** | Markdown Card | Tabla HTML dinámica con parámetros y resultados reales vs simulados |
| **Curvas Nodal** | Markdown Card | Canvas HTML con IPR/VLP reales vs simuladas |
| **Botones de Acción** | Action Button | Navegar, iniciar/cerrar simulación |

### Navegación

El dashboard de Simulación se accede desde los dashboards existentes:
- Desde **Monitoreo** → botón "Simular" en el detalle del pozo
- Desde **Optimización** → botón "What-If" en la vista por tipo

Al entrar, el pozo seleccionado se pasa como `stateEntity`, y el dashboard carga automáticamente sus datos reales como punto de partida.

---

## Gestión de Sesiones

### Características
- **Una sesión por pozo**: No se permiten sesiones simultáneas sobre el mismo pozo
- **Máximo 10 sesiones**: Límite configurable de sesiones activas globales
- **TTL automático**: Las sesiones expiran tras 2 horas de inactividad
- **Persistencia**: Las sesiones se almacenan en PostgreSQL con estado en Redis
- **Limpieza automática**: Al expirar o cerrar, se eliminan todos los datos `sim_*` del asset

### Ciclo de Vida

```
CREATED ──▶ ACTIVE ──▶ CLOSED
                │
                └──▶ EXPIRED (TTL 2h)
```

Ambos estados terminales (CLOSED y EXPIRED) ejecutan la limpieza automática de datos `sim_*`.

---

## Resultados Generados

Al ejecutar una simulación, el servicio genera y publica:

### Atributos del Asset (SERVER_SCOPE)
| Atributo | Tipo | Descripción |
|----------|------|-------------|
| `sim_active` | boolean | Indica si hay simulación activa |
| `sim_last_run` | timestamp | Fecha/hora de la última ejecución |
| `sim_opt_status` | string | Estado de la optimización simulada |
| `sim_opt_production_bpd` | float | Tasa de producción simulada |
| `sim_opt_efficiency_pct` | float | Eficiencia simulada de la bomba/sistema |
| `sim_opt_energy_kwh_bbl` | float | Consumo energético simulado |
| `sim_opt_recommended_action` | string | Acción recomendada basada en la simulación |
| `sim_opt_recommended_value` | float | Valor óptimo recomendado |
| `sim_opt_ipr_curve` | JSON array | Curva IPR simulada (100 puntos [Q, Pwf]) |
| `sim_opt_vlp_curve` | JSON array | Curva VLP simulada (100 puntos [Q, Pwf]) |
| `sim_compare_production_delta_bpd` | float | Diferencia de producción (simulado - real) |
| `sim_compare_production_delta_pct` | float | Diferencia de producción en porcentaje |
| `sim_compare_efficiency_delta_pct` | float | Diferencia de eficiencia |
| `sim_compare_warnings` | JSON array | Advertencias y violaciones de restricciones |
| `sim_compare_data` | JSON object | Datos completos de comparación |

### Telemetría del Asset
| Key | Descripción |
|-----|-------------|
| `sim_flow_rate_bpd` | Producción simulada como serie temporal con timestamps futuros |

La telemetría con timestamps futuros permite que el `time_series_chart` de ThingsBoard muestre la proyección de producción como extensión natural de la curva histórica real.

---

## Seguridad y Restricciones

- **Solo lectura sobre datos reales**: La simulación nunca modifica atributos ni telemetría real del pozo
- **Aislamiento por prefijo**: Todo dato simulado usa el prefijo `sim_` — imposible confundir con datos reales
- **Limpieza garantizada**: Al cerrar sesión, el sistema elimina exhaustivamente todos los datos `sim_*`
- **TTL de seguridad**: Sesiones abandonadas se cierran automáticamente tras 2 horas
- **Una sesión por pozo**: Previene conflictos de datos entre operadores simulando el mismo pozo
- **No afecta Kafka**: Los datos `sim_*` no se propagan a Kafka ni al detector de anomalías — solo existen en el asset de TB

---

## Valor para el Negocio

1. **Decisiones informadas**: Ingenieros evalúan el impacto de cambios operativos ANTES de implementarlos
2. **Reducción de riesgo**: Identifica violaciones de restricciones antes de que ocurran en campo
3. **Optimización acelerada**: What-if analysis en segundos vs horas con software de escritorio
4. **Integrado en el flujo de trabajo**: Sin cambiar de herramienta — todo dentro del dashboard de monitoreo
5. **Basado en datos reales**: Usa el estado actual del pozo como punto de partida, no modelos genéricos
6. **Colaborativo**: Múltiples operadores pueden simular distintos pozos simultáneamente
7. **Trazable**: Cada sesión de simulación queda registrada con usuario, duración y resultados
