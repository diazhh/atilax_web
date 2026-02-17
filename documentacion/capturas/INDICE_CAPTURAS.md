# Índice de Capturas de Pantalla

Las capturas fueron tomadas directamente del sistema en operación.

**Nota**: Las capturas están almacenadas en el historial de la sesión de Claude. Para obtener capturas actualizadas, acceder al sistema ThingsBoard.

---

## Capturas Disponibles

### Monitoreo

| # | Descripción | Screenshot ID | Dashboard |
|---|-------------|---------------|-----------|
| 1 | **Login Atilax** — Pantalla de inicio de sesión con branding Atilax | ss_84619xpyc | Login |
| 2 | **Mosaico Principal** — Vista general con KPIs de producción: actual, potencial, oportunidad, donut de producción por tipo, filtros campo/macolla/tipo | ss_60639hj36 | Monitoreo |
| 3 | **Detalle ESP (BOS-01-005)** — KPIs: 1,772 BPD, 7.2A, 186.9°F, 1867.6 PSI, 56.7 Hz, 0.1 IPS. Gráfico de tendencia con producción, corriente, temp motor, P. intake | ss_52831bhve | Monitoreo > detalle_esp |
| 4 | **Mosaico filtrado SRP** — Filtro SRP activo mostrando solo los pozos de bombeo mecánico con métrica FILLAGE y BPD | ss_5042f4qw5 | Monitoreo (filtro SRP) |
| 5 | **Detalle SRP (BOS-01-001)** — KPIs: 932.7 BPD, 12.1A, 9.2 SPM, 12,846 lb carga máx, 100% llenado, 69.4 PSI P. Tubing. Botones: Varillas, Hidraulico, Electrico, Produccion | ss_10924ymeg | Monitoreo > detalle_srp |
| 6 | **Modal Térmico ESP** — Subsistema térmico del pozo ESP con gráfico de temperatura del motor | ss_0765s0jtk | Monitoreo > detalle_esp > modal_termico |

### Optimización

| # | Descripción | Screenshot ID | Dashboard |
|---|-------------|---------------|-----------|
| 7 | **Waterfall de Producción** — Cascada mostrando producción actual → ganancias por pozo → total optimizado con porcentaje de oportunidad | ss_5789t5s4x | Optimización |
| 8 | **Ranking de Oportunidades + Scatter Eficiencia vs Salud** — Top oportunidades: CA-MAC-ANA-02-002 (+6,699 BPD, +1,340%), acciones recomendadas, scatter bubble chart con Producción (BPD) vs Salud del Pozo | ss_scroll_opt | Optimización (scrolled) |

### Administración

| # | Descripción | Screenshot ID | Dashboard |
|---|-------------|---------------|-----------|
| 9 | **Panel de Administración** — Navegador de campo (árbol jerárquico), tabla de pozos con: tipo, campo, macolla, estado optimización, data readiness (L2/L3) | ss_733702y8u | Administración |

### Panel de Gestión ThingsBoard

| # | Descripción | Screenshot ID | Dashboard |
|---|-------------|---------------|-----------|
| 10 | **Lista de Dashboards** — 12 dashboards Atilax: Administración, Optimización, Detalle Gas Lift/PCP/SRP/ESP, Monitoreo (Mosaico), Centro de Control, Optimización de Campo, Dashboard de Campo | ss_1545kgevw | panel.atilax.io |

### Página Web Comercial

| # | Descripción | Screenshot ID | Página |
|---|-------------|---------------|--------|
| 11 | **Landing page "Monitoreo de Pozos Petroleros"** — Hero con estadísticas: 4 métodos, 24/7 telemetría, 20+ variables, <5min detección | ss_7477tavao | atilax.io/soluciones/pozos |
| 12 | **Jerarquía de Monitoreo** — 4 niveles: Campo → Macolla → Pozo → RTU/Dispositivo, con navegación jerárquica completa | ss_web_scroll1 | atilax.io (scrolled) |
| 13 | **Telemetría por Tipo de Levantamiento** — Sección ESP con lista de analítica básica | ss_web_scroll2 | atilax.io (scrolled) |

### Simulación Interactiva (Dashboard v4)

| # | Descripción | Dashboard |
|---|-------------|-----------|
| 14 | **Tabla de Pozos (default)** — Estado raíz con tabla de entidades, click en pozo navega al estado sim_{tipo} | Simulación > default |
| 15 | **Simulación ESP** — Parámetros, KPIs, chart con proyección punteada 12h, tabla comparación original/modificado | Simulación > sim_esp |
| 16 | **Simulación SRP** — Parámetros, KPIs, chart con proyección punteada 12h, tabla comparación original/modificado | Simulación > sim_srp |
| 17 | **Simulación PCP** — Parámetros, KPIs, chart con proyección punteada 12h, tabla comparación original/modificado | Simulación > sim_pcp |
| 18 | **Simulación Gas Lift** — Parámetros, KPIs, chart con proyección punteada 12h, tabla comparación original/modificado | Simulación > sim_gaslift |

**Widgets nuevos en v4:**
- Widget de comparación de parámetros (markdown_card): tabla HTML dinámica con `sim_param_*` vs `sim_original_*`, estados coloreados (verde "Original" / amarillo "Modificado")
- Series punteadas en chart de producción: líneas `sim_*` con `lineType: "dashed"` mostrando proyección de 12h futuras
- 13 widgets por estado de tipo (antes 12), 53 total en el dashboard

---

## Captura Automática de Pantallas (`capturar_pantallas.py`)

Script de Selenium que automatiza la captura de screenshots de los dashboards en producción.

### Requisitos

```bash
pip install selenium
```

Adicionalmente se requiere:
- **Google Chrome** instalado
- **ChromeDriver** compatible con la versión de Chrome instalada (descargable desde chromedriver.chromium.org)

### Ejecución

```bash
cd documentacion/capturas
python capturar_pantallas.py
```

### Funcionamiento

1. **Login automático**: accede a la instancia TB (`http://144.126.150.120:8080`), ingresa credenciales (`well@atilax.io`)
2. **Navegación a dashboards**: recorre Monitoreo, Optimización y Administración por sus IDs de dashboard
3. **Espera de widgets Angular**: la función `wait_for_data()` espera a que los widgets custom Angular carguen datos reales, buscando textos marcadores como `CA-MAC-`, `BPD`, `Volver` en el DOM
4. **Click en tarjetas**: usa `driver.execute_script()` (JavaScript) para hacer click en tarjetas de pozos y navegar a estados de detalle por tipo de levantamiento
5. **Guardado de screenshots**: guarda archivos PNG en subcarpetas organizadas:
   - `monitoreo/` — Mosaico, filtros por tipo, detalle ESP, detalle SRP
   - `optimizacion/` — Waterfall, ranking, scatter
   - `general/` — Login, administración, assets, dashboards list

### Capturas Generadas

| Carpeta | Archivo | Descripción |
|---------|---------|-------------|
| `general/` | `01_login_atilax.png` | Pantalla de login |
| `monitoreo/` | `01_monitoreo_mosaico_63_pozos.png` | Mosaico de 63 pozos |
| `monitoreo/` | `02_monitoreo_mosaico_scroll.png` | Mosaico con scroll |
| `monitoreo/` | `03_monitoreo_filtro_esp.png` | Filtro ESP activo |
| `monitoreo/` | `04_monitoreo_filtro_pcp.png` | Filtro PCP activo |
| `monitoreo/` | `05_detalle_esp_kpis.png` | Detalle ESP KPIs |
| `monitoreo/` | `06_detalle_esp_tendencia.png` | Detalle ESP gráfico |
| `monitoreo/` | `05_detalle_srp_kpis.png` | Detalle SRP KPIs |
| `monitoreo/` | `06_detalle_srp_tendencia.png` | Detalle SRP gráfico |
| `optimizacion/` | `01_optimizacion_waterfall.png` | Waterfall producción |
| `optimizacion/` | `02_optimizacion_ranking_scatter.png` | Ranking + scatter |
| `optimizacion/` | `03_optimizacion_detalle_ranking.png` | Detalle ranking |
| `general/` | `02_administracion_tabla_pozos.png` | Administración |
| `general/` | `03_thingsboard_activos.png` | Página de activos TB |
| `general/` | `04_thingsboard_dashboards.png` | Lista de dashboards TB |

### Configuración Clave

| Parámetro | Valor | Descripción |
|-----------|-------|-------------|
| `WAIT_DASHBOARD_LOAD` | 20s | Tiempo base para dashboards con widgets Angular custom |
| `WAIT_DETAIL_LOAD` | 15s | Tiempo para estados de detalle de pozo |
| `wait_for_data() timeout` | 25-45s | Timeout adaptativo por dashboard (mosaico: 40s, optimización: 45s) |
| Resolución | 1920x1080 | Chrome headless en Full HD |
| `marker_text` | `CA-MAC-`, `BPD`, `Volver` | Textos buscados para detectar datos reales vs spinners |

### Extensión del Script

Si se agregan nuevos dashboards o estados al sistema:

1. Agregar el ID del dashboard al diccionario `DASHBOARDS`
2. Crear una nueva función `capture_*()` siguiendo el patrón existente
3. Usar `wait_for_data(driver, marker_text="...", timeout=N)` con un texto marcador que indique datos cargados
4. Para estados de detalle: usar `driver.execute_script()` para click en JavaScript y luego `wait_for_data(driver, marker_text="Volver")` para esperar la navegación
5. Agregar la llamada a la nueva función en `main()`
6. Tiempos recomendados: 25-45s para widgets custom Angular, 10s para páginas stock TB

---

## Cómo Reproducir las Capturas Manualmente

Para obtener imágenes de alta resolución sin el script, acceder a la instancia de ThingsBoard y navegar a los dashboards de Monitoreo, Optimización, Simulación y Administración.

Resolución recomendada para presentaciones: 1920x1080 (Full HD)
