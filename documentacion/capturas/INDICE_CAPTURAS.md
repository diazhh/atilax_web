# Índice de Capturas de Pantalla

Las capturas fueron tomadas el 15 de febrero de 2026 directamente del sistema en producción (144.126.150.120:8080).

**Nota**: Las capturas están almacenadas en el historial de la sesión de Claude. Para exportarlas como archivos de imagen, se pueden descargar manualmente desde el sistema ThingsBoard navegando a las mismas URLs indicadas abajo.

---

## Capturas Disponibles

### Monitoreo

| # | Descripción | Screenshot ID | Dashboard |
|---|-------------|---------------|-----------|
| 1 | **Login Atilax** — Pantalla de inicio de sesión con branding Atilax | ss_84619xpyc | Login |
| 2 | **Mosaico Principal (63 pozos)** — Vista general con KPIs: 98,302 BPD actual, 130,986 BPD potencial, +32,684 BPD oportunidad (+33.2%), donut de producción por tipo, filtros campo/macolla/tipo | ss_60639hj36 | Monitoreo |
| 3 | **Detalle ESP (BOS-01-005)** — KPIs: 1,772 BPD, 7.2A, 186.9°F, 1867.6 PSI, 56.7 Hz, 0.1 IPS. Gráfico de tendencia con producción, corriente, temp motor, P. intake | ss_52831bhve | Monitoreo > detalle_esp |
| 4 | **Mosaico filtrado SRP (20 pozos)** — Filtro SRP activo mostrando solo los 20 pozos de bombeo mecánico con métrica FILLAGE y BPD | ss_5042f4qw5 | Monitoreo (filtro SRP) |
| 5 | **Detalle SRP (BOS-01-001)** — KPIs: 932.7 BPD, 12.1A, 9.2 SPM, 12,846 lb carga máx, 100% llenado, 69.4 PSI P. Tubing. Botones: Varillas, Hidraulico, Electrico, Produccion | ss_10924ymeg | Monitoreo > detalle_srp |
| 6 | **Modal Térmico ESP** — Subsistema térmico del pozo ESP con gráfico de temperatura del motor | ss_0765s0jtk | Monitoreo > detalle_esp > modal_termico |

### Optimización

| # | Descripción | Screenshot ID | Dashboard |
|---|-------------|---------------|-----------|
| 7 | **Waterfall de Producción** — Oportunidad total: +38,569 BPD (39.2%). Cascada mostrando producción actual (98,302) → ganancias por pozo → total optimizado (136,871) | ss_5789t5s4x | Optimización |
| 8 | **Ranking de Oportunidades + Scatter Eficiencia vs Salud** — Top oportunidades: CA-MAC-ANA-02-002 (+6,699 BPD, +1,340%), acciones recomendadas, scatter bubble chart con Producción (BPD) vs Salud del Pozo | ss_scroll_opt | Optimización (scrolled) |

### Administración

| # | Descripción | Screenshot ID | Dashboard |
|---|-------------|---------------|-----------|
| 9 | **Panel de Administración** — Navegador de campo (árbol jerárquico), tabla de 63 pozos con: tipo, campo, macolla, estado optimización, data readiness (L2/L3) | ss_733702y8u | Administración |

### Panel de Gestión ThingsBoard

| # | Descripción | Screenshot ID | Dashboard |
|---|-------------|---------------|-----------|
| 10 | **Lista de Dashboards** — 12 dashboards Atilax: Administración, Optimización, Detalle Gas Lift/PCP/SRP/ESP, Monitoreo (Mosaico), Centro de Control, Optimización de Campo, Dashboard de Campo | ss_1545kgevw | panel.atilax.io |

### Página Web Comercial

| # | Descripción | Screenshot ID | Página |
|---|-------------|---------------|--------|
| 11 | **Landing page "Monitoreo de Pozos Petroleros"** — Hero con estadísticas: 4 métodos, 24/7 telemetría, 20+ variables, <5min detección | ss_7477tavao | atilax.io/soluciones/pozos |
| 12 | **Jerarquía de Monitoreo** — 4 niveles: Campo → Macolla → Pozo → RTU/Dispositivo, con estadísticas: 3 campos, 7 macollas, 63+ pozos | ss_web_scroll1 | atilax.io (scrolled) |
| 13 | **Telemetría por Tipo de Levantamiento** — Sección ESP con lista de analítica básica | ss_web_scroll2 | atilax.io (scrolled) |

---

## Cómo Reproducir las Capturas

Para obtener imágenes de alta resolución, navegar manualmente a:

1. **Monitoreo**: `http://144.126.150.120:8080/dashboard/38505670-0824-11f1-9173-f191cb13c4bf`
2. **Optimización**: `http://144.126.150.120:8080/dashboard/f9343110-0827-11f1-9173-f191cb13c4bf`
3. **Administración**: `http://144.126.150.120:8080/dashboard/0cbe2ce0-0828-11f1-9173-f191cb13c4bf`
4. **Credenciales**: well@atilax.io / 10203040

Resolución recomendada para presentaciones: 1920×1080 (Full HD)
