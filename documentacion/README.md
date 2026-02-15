# Documentación Atilax — Plataforma de Optimización Petrolera

Esta carpeta contiene documentación completa del sistema Atilax para uso en presentaciones, brochures, página web y material comercial.

---

## Estructura

```
documentacion/
├── README.md                          ← Este archivo
├── resumen/
│   └── RESUMEN_EJECUTIVO.md           ← Visión general del sistema completo
├── simulador/
│   └── SIMULADOR_POZOS.md             ← Simulador de Pozos (atilax_sim_pozos)
├── optimizacion/
│   └── SISTEMA_OPTIMIZACION.md        ← Motor de Optimización IA (optimizacion_service)
├── monitoreo/
│   └── SOFTWARE_MONITOREO.md          ← Software de Monitoreo (ThingsBoard + Widgets)
└── capturas/
    ├── INDICE_CAPTURAS.md             ← Índice de todas las capturas de pantalla
    ├── monitoreo/                     ← Capturas del dashboard de Monitoreo
    ├── optimizacion/                  ← Capturas del dashboard de Optimización
    ├── simulador/                     ← Capturas del simulador
    └── general/                       ← Capturas generales (login, admin, web)
```

---

## Documentos

| Documento | Contenido | Uso |
|-----------|-----------|-----|
| [Resumen Ejecutivo](resumen/RESUMEN_EJECUTIVO.md) | Visión general, arquitectura, resultados, diferenciadores | Presentaciones, pitch deck, brochure |
| [Simulador de Pozos](simulador/SIMULADOR_POZOS.md) | Descripción técnica del simulador de 63 pozos | Documentación técnica, propuestas |
| [Sistema de Optimización](optimizacion/SISTEMA_OPTIMIZACION.md) | 15 motores de IA, ML, algoritmos, schedulers | Documentación técnica, white papers |
| [Software de Monitoreo](monitoreo/SOFTWARE_MONITOREO.md) | 33 widgets, dashboards, navegación, paleta de colores | Demos, material visual, UX |
| [Índice de Capturas](capturas/INDICE_CAPTURAS.md) | Listado de screenshots con descripción y IDs | Referencia para diseño gráfico |

---

## Datos Clave para Material Comercial

### Cifras Principales
- **98,302 BPD** producción actual monitoreada
- **+32,684 BPD** ganancia potencial identificada (+33.2%)
- **63 pozos** en 3 campos petroleros
- **4 tipos** de levantamiento artificial
- **< 5 min** detección de anomalías
- **15 motores** de optimización con IA
- **33 widgets** especializados
- **24/7** monitoreo en tiempo real

### Frases para Marketing
- "Optimización de producción petrolera impulsada por Inteligencia Artificial"
- "Supervisión integral de todos los métodos de levantamiento artificial"
- "De la telemetría a la acción: detección, diagnóstico y optimización automática"
- "Monitoreo en tiempo real de 63+ pozos desde un solo portal web"
- "+33% de potencial de producción identificado mediante IA"

### Paleta de Colores de Marca
- **Verde Atilax** (marca): #0D6E3A
- **Naranja Atilax** (CTA): #F97316
- **Fondo oscuro** (web): #1E293B
- **Dorado** (acentos web): #F59E0B

---

## Cómo Actualizar

1. **Datos en vivo**: Los datos de producción cambian con el simulador — las cifras de BPD son del 15 Feb 2026
2. **Capturas**: Para capturas frescas, usar credenciales: well@atilax.io / 10203040 en http://144.126.150.120:8080
3. **Nuevos widgets**: Actualizar monitoreo/SOFTWARE_MONITOREO.md al agregar widgets
4. **Nuevos algoritmos**: Actualizar optimizacion/SISTEMA_OPTIMIZACION.md al implementar nuevos motores

---

*Documentación generada el 15 de febrero de 2026*
