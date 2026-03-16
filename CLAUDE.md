# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this project.

## Project: atilax_web

Corporate marketing website for **ATILAX** — a modular IoT platform for industrial monitoring, optimization, and control. Built by CONTROLTECH. Primarily oriented to the oil & gas industry (drilling, refining, well monitoring, fleet management) but applicable to mining, agriculture, ports, infrastructure, and general industry.

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Dev server at localhost:3000
npm run build        # Production build
npm run lint         # ESLint (v9 flat config)
```

No test framework is configured.

## Architecture

- **Framework**: Next.js 16 with App Router, React 19, TypeScript (strict mode).
- **Routing**: All pages in `src/app/`. Solution pages under `src/app/soluciones/` (petrolera, optimizacion, infraestructura, mineria, agroindustria, puertos, industria, flota, seguridad, simulador, pozos). Additional pages: `/plataforma`, `/erp`, `/empresa`, `/contacto`.
- **Components**:
  - `src/components/ui/` — shadcn/ui primitives (Card, Button, Badge, Sheet, NavigationMenu, Separator).
  - `src/components/layout/` — Navbar (megamenu with dropdowns) and Footer.
  - `src/components/shared/` — Reusable pieces (ImagePlaceholder, PageHeader).
- **Styling**: Tailwind CSS v4 via `@tailwindcss/postcss`. Framer Motion for scroll animations and page transitions. Global styles in `src/app/globals.css`.
- **Config**: `components.json` for shadcn/ui. Path alias `@/*` → `./src/*`.
- **Content**: All page content is hardcoded in page components. No CMS. The source of truth for product info is the **`atilax-knowledge-base`** collection in the `rag-mcp` server.

## Content Workflow

Before writing or modifying page content (feature lists, product descriptions, technical specs, use cases, benefits):

1. Query the RAG knowledge base to get accurate, up-to-date product information:
   ```
   Tool: mcp__rag-mcp__rag_query
   Collection: atilax-knowledge-base
   Query: <what you need — e.g. "ATILAX drilling monitoring features">
   ```
2. Use the retrieved information to write the page content in Spanish.
3. When creating new solution pages, query for the specific module/vertical to get detailed capabilities.

**Key RAG documents by page:**

| Page | Query topics |
|------|-------------|
| `/soluciones/petrolera` | ATILAX refinerías, mejoradores |
| `/soluciones/pozos` | Monitoreo de pozos, macollas |
| `/soluciones/optimizacion` | Motor de optimización, documento conceptual |
| `/soluciones/seguridad` | ATILAX Vision, visión artificial, vigilancia perimetral |
| `/soluciones/simulador` | Simulador de pozos petroleros |
| `/soluciones/flota` | Monitoreo de flotas |
| `/soluciones/mineria`, `/agroindustria`, etc. | Capacidades plataforma, multi-industria |
| `/plataforma` | Capacidades plataforma, características software, dashboards |
| `/erp` | ATILAX ERP brochure |
| `/empresa` | Resumen ejecutivo, experiencia y diferenciadores |

## Deployment

- **Domain**: `atilax.io` / `www.atilax.io`
- **GitHub**: `https://github.com/diazhh/atilax_web.git`
- **VPS path**: `/var/proyectos/atilax_web`
- **PM2 process**: `atilax-web` (port 3020)
- **HAProxy**: Routes `atilax.io` and `www.atilax.io` → `127.0.0.1:3020`

**Deploy after pushing to GitHub:**
```bash
ssh 144 "cd /var/proyectos/atilax_web && git pull && npm run build && pm2 restart atilax-web"
```

Only restart `atilax-web` — do NOT restart all PM2 processes.

## Key Patterns

- All content is in **Spanish**.
- Interactive components use `"use client"` directive (animations, menus, scroll detection).
- New UI components: use shadcn/ui (`npx shadcn@latest add <component>`).
- Animations: use Framer Motion (`motion.div`, `useInView`, `AnimatePresence`).
- Images go in `public/images/` and are referenced via Next.js `Image` component.
- Use `/frontend-design` skill when creating visually distinctive pages.
- Use `/vercel-react-best-practices` skill when writing or refactoring components.
