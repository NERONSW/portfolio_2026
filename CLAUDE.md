# Portfolio 2026 — Claude Code Guidelines

## 1. Primary Commands

- **Dev Server:** `pnpm dev`
- **Build:** `pnpm build`
- **Start Production:** `pnpm start`

## 2. Protected Foundation Rules (Permission First)

- **CSS & Tokens:** `app/globals.css` contains established design tokens and `.dark` mode variables. Do NOT edit CSS variables or design tokens without **asking for explicit permission first**.
- **Dependencies:** Core packages (`next-themes`, `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`, and `sass`) are already installed in `package.json`. Do NOT run `pnpm add` or modify `package.json` without **asking for explicit permission first**.
- **Package Manager:** Exclusively use `pnpm` for all script execution.

## 3. Directory Architecture & Conventions

Always adhere strictly to this Next.js App Router tree:

portfolio_2026/
├── app/
│ ├── projects/[slug]/page.tsx
│ ├── projects/page.tsx
│ ├── globals.css # Protected design tokens
│ ├── layout.tsx
│ ├── page.tsx
│ └── providers.tsx # 'use client' theme wrapper (next-themes)
├── components/
│ ├── layout/ # Navbar.tsx, Footer.tsx
│ ├── sections/ # Hero.tsx, TechStack.tsx, Experience.tsx, Projects.tsx
│ └── ui/ # Button.tsx, ProjectCard.tsx, ThemeToggle.tsx
├── data/ # Decoupled CMS content (typed TS objects & interfaces)
│ ├── experience.ts
│ ├── projects.ts
│ └── skills.ts
├── styles/ # SCSS Styling Architecture
│ ├── \_mixins.scss # Responsive & flex/grid mixins
│ ├── \_animations.scss # Keyframe animations
│ └── components/ # Component-specific SCSS files (e.g., \_Hero.module.scss)
├── public/ # Static assets (images, documents/CV)
└── lib/ # utils.ts (cn helper)

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
