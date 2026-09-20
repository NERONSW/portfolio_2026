---
name: Pitch Editorial / Technical Atelier
project: Minimalist Software Engineer Portfolio (16464944731010537952)
designer_spec: Stitch MCP Consolidate
date: 2026-09-20
---

# Design System Specification — Portfolio 2026

## 1. Architectural Philosophy & Brand Identity

This design system fuses **Swiss International Typographic Print**, **Neo-Brutalist Precision**, and **Technical Atelier Discipline**. Built for an elite software engineer and systems architect based in Melbourne, Australia, the aesthetic prioritizes:

- **Absolute Restraint:** No heavy decorative blurs, loud gradients, or unnecessary visual noise.
- **Architectural Elevation:** Depth achieved exclusively through 1px hairline borders (`border-hairline`) and subtle surface luminosity tiering.
- **Micro-Accents:** Burnt Terracotta (`#D97043`) as the sole intentional brand accent, paired with Emerald Green (`#10B981`) for live runtime and availability signals.
- **Editorial Cadence:** Numbered chapter indexing (`00 Hero`, `01 About`, `02 Stack`, `03 Exp`, `04 Works`, `05 Academics`, `06 Contact`) with monospaced metadata and high line-height reading measures.

---

## 2. Canvas Screens & Viewport Specs

Extracted across the 6 canvas frames in Stitch project `16464944731010537952`:

| Screen Index | Screen Title & Theme                                            | Canvas Target | Resolution  | Key Screen Intent                                |
| :----------- | :-------------------------------------------------------------- | :------------ | :---------- | :----------------------------------------------- |
| **01**       | `Nipuna Wasala — Warm Mocha Dark Theme Portfolio`               | Desktop       | 2560 × 9476 | Primary desktop experience (Dark mode canonical) |
| **02**       | `Nipuna Wasala — Warm Editorial Portfolio (Variant 2)`          | Desktop       | 2560 × 9476 | Asymmetrical ledger layout with grid dividers    |
| **03**       | `Nipuna Wasala — Mobile Nav Drawer Open (Warm Mocha Dark)`      | Mobile        | 780 × 9390  | Mobile navigation drawer open state (Dark mode)  |
| **04**       | `Nipuna Wasala — Warm Mocha Dark Theme Mobile Portfolio`        | Mobile        | 780 × 9302  | Mobile single-column flow (Dark mode)            |
| **05**       | `Nipuna Wasala — Editorial Wireframe Mobile (V2)`               | Mobile        | 780 × 9302  | Ambient glow & wireframe register mobile layout  |
| **06**       | `Nipuna Wasala — Mobile Nav Drawer Open (Warm Light Editorial)` | Mobile        | 780 × 9228  | Mobile drawer open state (Light mode canonical)  |

---

## 3. Color Tokens & Theme Surface Variables

The design system implements a dual-theme surface token architecture built on warm, organic earth tones.

### 3.1 Light Theme (`.light` / Warm Editorial Paper)

- **Canvas Background:** `#FDFBF7` (`bg-cream`)
- **Surface Card:** `#F5EFE6` (`bg-ivory`)
- **Sub-Surface Header:** `#EDE6DB`
- **Chip / Tag Background:** `#E8E1D5`
- **Hairline Border:** `#E8E1D5` (`border-sand`)
- **Primary Text:** `#2A2118` (`text-espresso`)
- **Body Text:** `#7A6A5E` (`text-warm-brown`)
- **Muted Meta:** `#A39588`
- **Brand Accent:** `#C25E30` (`text-terracotta`)
- **Accent Subtile / Pill:** `#FAECE4` (`bg-terracotta-light`)

### 3.2 Dark Theme (`.dark` / Roasted Mocha & Coffee)

- **Canvas Background:** `#181310` (`bg-mocha`)
- **Surface Card:** `#241E19` (`bg-coffee`)
- **Sub-Surface Header:** `#1E1814`
- **Chip / Tag Background:** `#1C1613`
- **Hairline Border:** `#382E27` (`border-walnut`)
- **Primary Text:** `#FDFBF7` (`text-cream`)
- **Body Text:** `#C4B8A5` (`text-sand`)
- **Muted Meta:** `#8E8272` (`text-sand-dim`)
- **Brand Accent:** `#D97043` (`text-terracotta`)
- **Accent Hover:** `#B8572D` (`bg-terracotta-dark`)
- **Accent Subtile Tint:** `rgba(217, 112, 67, 0.12)` (`bg-terracotta-soft`)

### 3.3 Ambient Spotlight Layer (Dark Mode Only)

Three animated radial gradient spotlights float behind the dark theme layout to prevent flat visual hierarchy:

- **Top Right:** `rgba(217, 112, 67, 0.06)` (26s float animation)
- **Mid-Page Left:** `rgba(217, 112, 67, 0.05)` (32s float animation)
- **Lower Right:** `rgba(217, 112, 67, 0.055)` (28s float animation)
- **Accessibility:** Animations automatically disable under `@media (prefers-reduced-motion: reduce)`.

## 4. Typography System

The design enforces a triple-voice typographic cadence:

1. **Sans-Serif (`Hanken Grotesk`):** Primary headlines, body copy, and card titles.
2. **Monospace (`JetBrains Mono`):** Chapter indices (`01 //`), nav links, telemetry timestamps, stack chips, and buttons.
3. **Editorial Serif (`Newsreader` Italic):** Emphasized hero phrases and manifesto callouts.

### 4.1 Type Scales & Metrics

- **Headline XL / Hero Display:**
  - Desktop: `48px` / Line Height `52px` / Weight `600` / Tracking `-0.03em`
  - Mobile: `32px` / Line Height `38px` / Weight `600` / Tracking `-0.02em`
- **Headline LG (Section Headers):**
  - Desktop: `32px` / Line Height `38px` / Weight `500` / Tracking `-0.025em`
  - Mobile: `24px` / Line Height `30px` / Weight `500` / Tracking `-0.02em`
- **Headline MD (Card Titles):**
  - `20px` / Line Height `28px` / Weight `500` / Tracking `-0.015em`
- **Headline SM (Sub-headers):**
  - `16px` / Line Height `24px` / Weight `500` / Tracking `-0.01em`
- **Body LG (Editorial Lead):**
  - `18px` / Line Height `28px` / Weight `400` / Tracking `-0.01em`
- **Body MD (Standard Body Copy):**
  - `15px` / Line Height `24px` / Weight `400` / Tracking `-0.005em`
- **Body SM (Secondary Annotations):**
  - `13px` / Line Height `20px` / Weight `400` / Tracking `0em`
- **Mono Code / Tech Arsenal:**
  - `13px` / Line Height `20px` / Weight `400` / Tracking `-0.01em`
- **Mono Tag / Chips:**
  - `12px` / Line Height `16px` / Weight `500` / Tracking `0.02em`
- **Mono Meta / Timestamps:**
  - `11px` / Line Height `14px` / Weight `400` / Tracking `0.04em`

---

## 5. Layout Geometry, Spacing & Elevation

### 5.1 Grid & Spacing Progression

- **Base Metric:** 4px geometric progression (`4px`, `8px`, `12px`, `16px`, `24px`, `32px`, `40px`, `64px`, `96px`).
- **Gutters:**
  - Desktop: `1.5rem` (`24px`)
  - Mobile: `1.0rem` (`16px`)
- **Page Outer Margins:**
  - Desktop: `2.0rem` – `4.0rem`
  - Mobile: `1.0rem` – `1.25rem`
- **Reading Width Constraints:**
  - Optimal reading column: `680px` – `768px`
  - Wide grid / Dashboard tables: `1024px` – `1120px`

### 5.2 Corner Geometry (`border-radius`)

- **Base Radius (4px / `0.25rem`):** Buttons, inputs, project cards, inline code chips, and badge elements.
- **Containers (8px / `0.5rem`):** Full-frame modals, code console frames, and drawer containers.
- **Pill (9999px / `full`):** Binary status indicator lights and availability status pills only.

### 5.3 Elevation & Structural Boundaries

- **Level 0 (Canvas):** `--surface-base` without borders.
- **Level 1 (Card & Modular Cells):** `--surface-card` encased in 1px solid `--border-hairline`.
- **Level 2 (Hover Focus & Drawers):** `--surface-hover` or `--surface-base` with `backdrop-filter: blur(12px)` and 1px `--border-strong`.
- **Rule:** Strict ban on fuzzy diffuse drop shadows; depth is strictly tactile and bounded by 1px hairlines.

---

## 6. Component Patterns Across All Screens

### 6.1 Header & Navigation (`Navbar`)

- **Monogram / Brand Identity:** `NW.` or `NW` inside a 28×28px card frame with terracotta dot.
- **Real-Time Presence:** Emerald pulse ring alongside `"Available for work — Melbourne, VIC"`.
- **Chapter Index Links:** Numbers preceding labels (`01 About`, `02 Stack`, `03 Exp`, `04 Works`).
- **Controls:** `ThemeToggle` (Sun/Moon icons) with transition rotation.
- **Mobile Drawer:** Slide-down / fade drawer with section count (`04 Sections`), chevron links, and direct email dispatch link.

### 6.2 Hero Section (`Index 00 // System Architecture & Engineering`)

- **Sub-Header:** Category index and architectural domain.
- **Display Headline:** High-impact, negative-tracking title emphasizing full-stack engineering and distributed systems.
- **Actions:** High-contrast primary CTA button (`#D97043`), secondary outline button (`Download CV`), and Australian working rights verification badge.

### 6.3 Technical Arsenal (`02 // Technical Arsenal`)

- **Categorized Bento Grid:**
  - `Frontend`: React 19, Next.js 15, TypeScript, Tailwind CSS, Vite.
  - `Backend`: Node.js, Spring Boot, REST APIs, GraphQL.
  - `Databases`: PostgreSQL, Redis, MongoDB, MariaDB.
  - `Cloud & DevOps`: AWS (Lambda, S3, API Gateway), GitHub Actions, Docker.
  - `Tooling`: Claude Code, Gemini, Ollama, Git, Figma.
- **Chip Style:** Monospace `JetBrains Mono` 12px tags on `--surface-subtle` with `--border-hairline`.

### 6.4 Experience Chronicle (`03 // Experience Chronicle`)

- **Timeline Structure:** Continuous 1px vertical or horizontal hairline register.
- **Role Header:** Job title + company badge + location (`Melbourne, AU`) + tenure.
- **Bullet Highlights:** Concise metric-driven impact points with micro-terracotta bullets.
- **Inline Tech Badges:** Monospace stack tags associated with each tenure.

### 6.5 Featured Deployments (`04 // Works Catalogued`)

- **Card Structure:** Responsive cards with year, category badge (`Full Stack`, `Design Engineering`), title with external link icon, and summary.
- **Telemetry Metrics Grid:** 3-column key-value metrics matrix (e.g., `Throughput: 1.2M req/s`, `Query Latency: < 80ms`).
- **Micro-Interactions:** Subtle vertical lift on hover, hairline border shift from `--border-hairline` to `--border-strong`.

### 6.6 Academic Credentials (`05 // Academic Credentials`)

- **Formal Education & Certification Ledger:**
  - Degree: Bachelor of Computing in Software Engineering (Curtin University).
  - Certification: AWS Certified Cloud Practitioner (CLF-C02).
  - Diploma: Higher Diploma in IT (SLIIT).

### 6.7 Initiate Transmission (`06 // Initiate Transmission`)

- **Container:** Large `bg-ivory` card (`rounded-2xl border-sand`) containing section title and availability messaging.
- **Actions:** High-contrast `INITIATE DISPATCH` mailto button (`bg-espresso` to `bg-terracotta` hover) and `VIEW CV / RÉSUMÉ` button.
- **Telemetry Bar:** Horizontal link list (`GitHub`, `LinkedIn`, `Twitter/X`, `ReadCV`) with live `Melbourne (AEST/AEDT)` digital clock.

### 6.8 Colophon / Page Footer

- **Placement:** Separate `<footer>` tag below `<main>`.
- **Layout:** Single-row flex layout (`justify-between items-center py-10`).
- **Content:** Left: `Nipuna Wasala / Crafted with architectural discipline` | Right: `© 2025 · Melbourne, Victoria, AU`.
