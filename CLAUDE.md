# Portfolio 2026 — Claude Code Guidelines

## 1. Primary Commands

- **Dev Server:** `pnpm dev`
- **Build:** `pnpm build`
- **Start Production:** `pnpm start`

## 2. Protected Foundation Rules & Design System

- **Design System Rules:** Strictly adhere to `DESIGN.md` for all styling, color tokens, and typography. Do not introduce arbitrary inline hex colors or custom utility classes outside those defined in `DESIGN.md`.
- **CSS & Tokens:** `app/globals.css` contains established design tokens and `.dark` mode variables. Do NOT edit CSS variables or design tokens without asking for explicit permission first.
- **Dependencies:** Core packages are already installed in `package.json`. Do NOT run `pnpm add` or modify `package.json` without asking for explicit permission first.
- **Package Manager:** Exclusively use `pnpm` for all script execution.

## 3. Directory Architecture & Conventions

Always adhere strictly to this standard Next.js App Router tree inside `src/`:

portfolio*2026/
├── src/
│ ├── app/
│ │ ├── projects/[slug]/page.tsx
│ │ ├── projects/page.tsx
│ │ ├── globals.css # Protected design tokens
│ │ ├── layout.tsx
│ │ ├── page.tsx
│ │ └── providers.tsx # 'use client' theme wrapper (next-themes)
│ ├── components/
│ │ ├── layout/ # Navbar.tsx, Footer.tsx
│ │ ├── sections/ # Hero.tsx, TechStack.tsx, Experience.tsx, Projects.tsx
│ │ └── ui/ # Button.tsx, ProjectCard.tsx, ThemeToggle.tsx
│ ├── data/ # Decoupled CMS content (typed TS objects & interfaces)
│ │ ├── experience.ts
│ │ ├── projects.ts
│ │ └── skills.ts
│ ├── styles/ # SCSS Styling Architecture
│ │ ├── \_mixins.scss # Responsive & flex/grid mixins
│ │ ├── \_animations.scss # Keyframe animations
│ │ └── components/ # Modular component SCSS files
│ └── lib/ # utils.ts (cn helper)
├── public/ # Static assets (images, documents/CV)
├── CLAUDE.md # Project guidelines
├── tsconfig.json # Paths alias "@/*": ["./src/_"]
└── package.json

## 4. Responsiveness & SEO Optimization

- **Mobile-First Priority:** Build all layout structures with mobile viewports as the primary target. Use touch-friendly targets (minimum 44x44px) and fluid typography. Test explicitly across `sm`, `md`, `lg`, and `xl` breakpoints.
- **App Router Metadata API:** Every page (`app/page.tsx`, `app/projects/page.tsx`, `app/projects/[slug]/page.tsx`) must export comprehensive dynamic metadata (title, description, canonical URL, OpenGraph, and Twitter cards).
- **Semantic HTML & Accessibility:** Use strict semantic markup (`<main>`, `<section>`, `<article>`, `<header>`, `<footer>`, `<nav>`) with accurate `aria-` attributes and descriptive image `alt` texts to ensure max crawlability and lighthouse performance.

## 5. Animation & Motion System (`framer-motion`)

- **Framer Motion Integration:** Use `framer-motion` for page transitions, element entry animations (`whileInView`, `viewport={{ once: true }}`), and layout shifts.
- **Ambient Background Animations:** Implement subtle, professional background ambient effects (e.g., floating gradient orbs, subtle particle grids, or slow terracotta pulse accents) that do not degrade performance.
- **Smooth Scrolling:** Enable smooth scroll behavior globally (`html { scroll-behavior: smooth; }`) and support smooth section linking.

## 6. Styling Strategy: Tailwind CSS + Component SCSS

- **Foundational Styling:** Use Tailwind CSS utility classes for grid systems, flexbox alignments, responsive padding/margin, and design-token colors (`bg-surface-base`, `bg-surface-card`, `border-border-hairline`, `text-accent`).
- **Complex Custom Styling (SCSS):** Store custom CSS/SCSS effects, complex pseudo-elements, multi-layer gradients, or marquee tracks separately in `styles/components/` using modular named files (e.g., `styles/components/_TechStack.module.scss`).
- **Theme Parity (`next-themes`):** Ensure every component seamlessly transitions between Light (`#FDFBF7`) and Dark (`#181310`) using `next-themes` with `attribute="class"`.

## 7. Component Architecture & Code Standards

- **Clean Component Split:**
  - `components/layout/`: Global framing (header, footer, navigation drawers).
  - `components/sections/`: High-level landing sections (`Hero`, `Experience`, `TechStack`).
  - `components/ui/`: Reusable, atomic primitives (`Button`, `Badge`, `ProjectCard`).
- **Code Standards & Brevity:** Write modern React 19 / Next.js 15 TypeScript code. Keep logic concise, modular, and DRY without bloated helper functions or unnecessary verbosity.
- **Documentation & Comments:** Include clear, meaningful inline comments for non-obvious state transitions, dynamic metadata logic, or complex CSS/animation calculations.
- **Imports:** Always use path aliases starting with `@/` matching `tsconfig.json` (e.g., `@/components/ui/Button`, `@/data/projects`, `@/styles/components/...`).

## 8. Visual Verification (Stitch MCP)

- **Availability:** Stitch MCP is available for visual layout and component verification.
- **When to Use:** Invoke Stitch MCP tools _only_ when:
  - Scaffolding new major sections or complex UI primitives.
  - Resolving layout or responsiveness ambiguity not fully covered by `DESIGN.md`.
  - Explicitly asked to verify visual parity against the canvas.
- **When to Skip:** Skip Stitch MCP for text/data updates, minor bug fixes, backend logic, or standard components fully specified in `DESIGN.md`.
- **Viewport Constraints:** When inspecting frames, strictly match mobile (`390px` stacked layouts, 44px+ touch targets) and desktop specs.
