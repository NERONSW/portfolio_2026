# DESIGN.md — Nipuna Wasala Portfolio Design System & Architectural Specification

> **Design Direction:** Warm Earthy Minimalist Editorial / Wireframe (Dual-Theme: Warm Paper Light & Warm Mocha Dark)  
> **Target:** Responsive Single Page Application (Desktop 1440px+ & Mobile 390px)  
> **Core Principle:** Architectural rigor, editorial typography, hairline precision, and authentic engineering telemetry.
> **Date:** 2026-09-20

---

## 1. Design Philosophy & Aesthetic Pillars

1. **Editorial Typography Meets Architectural Wireframe**
   - High-contrast editorial display typography (`Newsreader` / Serif Italic accents) balanced against clean Grotesk sans (`Hanken Grotesk` / `Inter`) and structured Monospace metadata (`JetBrains Mono` / `Space Mono`).
   - Technical spec numbering (`INDEX 00 //`, `01 // ARCHITECTURAL MANIFESTO`, `02 // TECHNICAL ARSENAL`) gives the feeling of an authentic engineering dossier or blueprint.

2. **Subtle Hairline Grid & Spec Sheets**
   - Delicate 1px borders (`#E8E1D5` in Light / `#382E27` in Dark) outline cards, tags, and sections.
   - Clean grouping of items into modular cards without heavy drop shadows or skeuomorphism.

3. **Warm Atmospheric Dual-Theme Palette**
   - Avoids sterile pure whites (`#FFFFFF`) or harsh pitch blacks (`#000000`).
   - Built on tactile cream paper tones for light mode (`#FAF7F2` canvas, `#F5F2EB` cards) and rich roasted mocha tones for dark mode (`#181310` canvas, `#241E19` cards), unified by a signature **Burnt Terracotta** accent (`#D97043` / `#C25E30`).

---

## 2. Color System & Token Matrix

| Token Name                    | Light Theme (Warm Paper) | Dark Theme (Warm Mocha) | Usage / Context                                        |
| :---------------------------- | :----------------------- | :---------------------- | :----------------------------------------------------- |
| **`bg-canvas`**               | `#FAF7F2` (`#FBF9F5`)    | `#181310` (`#17120F`)   | Global page viewport background                        |
| **`bg-surface`**              | `#F5F2EB` (`#F5F3EF`)    | `#241E19` (`#201A17`)   | Cards, spec boxes, manifesto block, drawers            |
| **`bg-surface-elevated`**     | `#EFEAE1`                | `#2D2520`               | Hover states, pill containers, subtle insets           |
| **`border-hairline`**         | `#E8E1D5`                | `#382E27`               | 1px card borders, dividers, wireframe frames           |
| **`border-subtle`**           | `#DCD4C7`                | `#4A3E35`               | Interactive button borders, active pill outlines       |
| **`text-primary`**            | `#181310` (`#2A2118`)    | `#FDFBF7` (`#FAF7F2`)   | Headings, hero display text, primary button text       |
| **`text-secondary`**          | `#786F66`                | `#C4B8A5`               | Body prose, narrative paragraphs, project descriptions |
| **`text-muted`**              | `#A89F91`                | `#8C827A`               | Section indexing (`01 //`), timestamps, labels         |
| **`accent-terracotta`**       | `#D97043` (`#C25E30`)    | `#D97043`               | Primary CTA, highlight keywords, arrows (`↗`, `↓`)     |
| **`accent-terracotta-hover`** | `#BF552B`                | `#E87E50`               | CTA button hover state                                 |
| **`accent-emerald`**          | `#10B981`                | `#10B981`               | Live availability status dot ("Available for work")    |
| **`pill-bg`**                 | `#FFFFFF` / `#F0ECE1`    | `#1C1613`               | Tech stack tags, metadata chips                        |

---

## 3. Typography Hierarchy & Font Scales

### Font Families

- **Display & Emphases:** `Newsreader`, `Playfair Display`, or serif italic fallback (`font-serif italic font-normal`)
- **Body & Headings:** `Hanken Grotesk`, `Inter`, or `system-ui`, sans-serif (`font-sans`)
- **Telemetry, Badges & Labels:** `JetBrains Mono`, `Space Mono`, or monospace (`font-mono`)

### Typographic Scales (Desktop & Mobile)

- **Hero Display Headline:**
  - Desktop: `text-5xl` to `text-6xl` (`48px – 60px`), leading `tight` (`1.1`), font weight `700` (`font-bold`).
  - Mobile (390px): `text-3xl` to `text-4xl` (`30px – 36px`), leading `tight` (`1.15`), font weight `700`.
  - Accent treatment: Italic serif (`italic font-normal font-serif text-accent-terracotta`).
- **Section Headers (e.g. `01 // ARCHITECTURAL MANIFESTO`):**
  - Monospace uppercase label: `text-xs font-mono tracking-widest text-muted`.
  - Right-aligned section meta (e.g. `Engineering Manifesto`, `Invariants`, `Spec Sheet`, `03 Catalogued`, `Credentials`, `< 24h reply`): `text-xs font-mono text-muted` or badge chip format (`bg-accent-terracotta/10 text-accent-terracotta border border-accent-terracotta/20 rounded px-2 py-0.5`).
- **Card Titles & Role Titles:**
  - Desktop: `text-xl` to `text-2xl` (`20px – 24px`), font weight `600` (`font-semibold`).
  - Mobile (390px): `text-lg` to `text-xl` (`18px – 20px`), font weight `600` (`font-semibold`).
- **Body Narrative:**
  - Desktop: `text-base` (`15px – 16px`), leading `relaxed` (`1.65`), `text-secondary`.
  - Mobile (390px): `text-sm` (`14px – 15px`), leading `relaxed` (`1.6`), `text-secondary`.
- **Telemetry & Metadata (Tags, Dates, Metrics):**
  - `text-xs font-mono tracking-wide uppercase`.

---

## 4. Layout Structure & Spacing Rules

- **Max Layout Container:** `max-w-7xl` (`1280px`), centered (`mx-auto`), reducing excessive lateral margins and allowing multi-column cards sufficient horizontal breathing room.
- **Mobile Viewport Specification (390px Canvas):**
  - Fixed root width: `w-full max-w-[390px] mx-auto` or `w-[390px]` edge-to-edge container without horizontal gutters or side overflow (`overflow-x-hidden`).
  - Viewport Edge Padding: `px-4` to `px-5` (`16px – 20px`), ensuring content cleanly hugs the 390px frame.
  - Touch Target Sizing: Minimum `44px` height (`h-11` to `h-12`) on all interactive buttons and inputs.
- **Horizontal Viewport Padding:**
  - Desktop: `px-4 sm:px-6 lg:px-8` (`16px – 32px`).
  - Mobile (390px): `px-4` to `px-5` (`16px – 20px`), perfectly hugging viewport edges with zero lateral overflow.
- **Vertical Section Rhythm:**
  - Desktop: `py-16` to `py-20` (`64px – 80px`) between numbered sections.
  - Mobile (390px): `py-8` to `py-10` (`32px – 40px`) between numbered sections, with hairline divider borders.
- **Dividers & Wireframe Separators:**
  - Subtle hairline borders (`border-b border-hairline`) spanning section bounds.

---

## 5. Mobile View UI Design Patterns (390px Architecture)

### 5.1 Mobile Header Bar & Action Utilities

- **Layout:** Sticky top pinned single-row header (`h-14` / `56px`), `px-4`, `flex items-center justify-between`, `backdrop-blur-md bg-canvas/90 border-b border-hairline`.
- **Left Cluster:**
  - Monogram brand mark: `NW.` in bold uppercase (`font-bold text-sm tracking-tight`).
  - Status beacon indicator: Emerald pulse dot (`w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block mr-1.5`).
  - Location tag: `Available  MEL, AU` in compact monospace (`text-[11px] font-mono text-secondary tracking-tight`).
- **Right Cluster:**
  - Theme toggle glyph: Sun icon (`w-8 h-8 rounded-full border border-hairline flex items-center justify-center text-secondary hover:text-primary`).
  - Hamburger menu trigger: `≡` icon button (`w-8 h-8 rounded border border-hairline flex items-center justify-center text-primary`).

### 5.2 Mobile Collapsible Navigation Drawer

- **Overlay Format:** Fit-to-content dropdown card positioned immediately below the header bar (`absolute top-full left-0 right-0 w-full bg-surface/98 backdrop-blur-xl border-b border-hairline shadow-xl z-40`).
- **Vertical Indexed Link List:**
  - Full-width rows (`01 ABOUT`, `02 STACK`, `03 EXP`, `04 WORKS`, `05 ACADEMICS`, `06 CONTACT`).
  - Left indicator: Number prefix in Burnt Terracotta (`01`–`06`, `font-mono text-xs font-semibold text-accent-terracotta`).
  - Center label: Link title in uppercase (`font-mono text-xs tracking-wider text-primary`).
  - Right indicator: Trailing diagonal arrow (`↗`, `text-xs text-muted`).
  - Row separator: Subtle hairline border between navigation items (`border-b border-hairline/60`).
- **Quick Dispatch Strip & Social Pills:**
  - Monospace direct email anchor (`hello@nipuna.dev`, `text-xs font-mono text-accent-terracotta`).
  - Pill grid: Full-width or half-width touch pills (`GitHub ↗`, `LinkedIn ↗`, `CV Résumé ↗`, `Download Curriculum Vitae ⤓`).

### 5.3 Mobile Hero Section & Action Stack

- **Header Clearance:** `pt-20 pb-8` (`80px` top padding) ensuring headline clears the fixed top navigation bar.
- **Top Overline:** Monospace badge `INDEX 00 // SYSTEMS ENGINEERING` with terracotta slash accent.
- **Display Headline:** Responsive 3-line editorial stack (`text-3xl leading-[1.18] font-bold text-primary`), highlighting _`scalable web platforms`_ in italic serif Burnt Terracotta.
- **Summary Prose:** `text-sm text-secondary leading-relaxed`.
- **Vertical Button Stack:**
  - **Primary CTA (`View Catalogued Works (03) ↓`):** 100% full-width (`w-full`), solid high-contrast dark fill (`bg-text-primary text-canvas`), `h-12`, rounded-md, `flex items-center justify-center font-medium text-sm`, smooth scroll anchor to `#works`.
  - **Secondary CTA (`Download Curriculum Vitae ⤓`):** 100% full-width (`w-full`), ivory/coffee card surface (`bg-surface border border-hairline hover:border-text-primary`), `h-12`, rounded-md, `flex items-center justify-center font-medium text-sm text-primary`.
- **Working Rights Status Tag:** Centered monospace indicator with emerald active dot (`● Full Working Rights in Australia | MEL, AU`, `text-xs font-mono text-secondary`).

### 5.4 Mobile Section 01 // Architectural Manifesto

- **Section Heading:** `01 // ARCHITECTURAL MANIFESTO` (left) | `INVARIANTS` pill tag (right).
- **Single-Column Vertical Stack:**
  - **Quote Box:** Full-width card (`bg-surface border border-hairline rounded-lg p-5`).
    - Large decorative quotation glyph (`“` in `text-accent-terracotta text-2xl`).
    - Serif italic quote: _"Building systems centered on architectural clarity, strict data invariants, and defensive simplicity."_
    - Bottom telemetry strip: Monospace tags `DEFENSIVE SIMPLICITY` (left) and `CORE RULE` (right) in `text-[11px] font-mono text-muted`.
  - **Narrative Prose:** Paragraph breakdown below the quote card in `text-sm text-secondary leading-relaxed`.
  - **Telemetry Stat Cards (3-Column Horizontal Grid):**
    - Grid layout: `grid grid-cols-3 gap-2.5 mt-5`.
    - Box style: Centered miniature card (`bg-surface border border-hairline rounded-md p-2.5 text-center`).
    - Stat 1: `EXP` / **4+ Years** / `Full-Stack`.
    - Stat 2: `DOMAINS` / **FinTech, MarTech & CMS** / `Production`.
    - Stat 3: `CLOUD` / **AWS Certified** / `Practitioner`.

### 5.5 Mobile Section 02 // Technical Arsenal

- **Section Heading:** `02 // TECHNICAL ARSENAL` (left) | `Spec Sheet` (right).
- **Category Spec Cards (1-Column Stack):**
  - 4 stacked cards for **Frontend Systems**, **Backend & Runtime**, **Storage & Cache**, and **Cloud & DevOps**.
  - **Header Row in Card:** Terracotta bullet indicator (`■`) + category title (`text-xs font-mono font-bold uppercase tracking-wider`) + item count pill (`06 items`, `05 items`, `04 items` in terracotta/muted font).
  - **Pill Flex Wrap:** Flex row wrap container (`flex flex-wrap gap-2 pt-3`).
  - **Tech Stack Pill:** Compact ivory/mocha container (`bg-canvas border border-hairline rounded px-2.5 py-1 text-xs font-mono text-primary`).
- **AI & Tooling Strip:**
  - Full-width scrollable or wrapping ticker strip (`bg-surface border border-hairline rounded-md p-3 text-xs font-mono text-secondary`):  
    `// AI & Tooling // Claude Code · Gemini · Ollama · Git · GitLab · Bitbucket · Jira · Figma`.

### 5.6 Mobile Section 03 // Experience Chronicle

- **Section Heading:** `03 // EXPERIENCE CHRONICLE` (left) | `2021 — 2025` (right).
- **Timeline Layout:**
  - Vertical layout with date/location header above each position.
  - **Date & Location Meta:** `JUN 2023 – JUL 2025` (left in terracotta) | `Melbourne, AU` (right in muted mono).
  - **Role & Company:** `Full-Stack Developer` (bold text) — `HRC Labs (K1)` (terracotta font).
  - **Deliverable Bullets:** Left-facing return arrow glyph (`↳`) in Burnt Terracotta preceding each bullet text in `text-xs text-secondary leading-relaxed`.

### 5.7 Mobile Section 04 // Featured Deployments

- **Section Heading:** `04 // FEATURED DEPLOYMENTS` (left) | `03 Catalogued` (right).
- **Stacked Spec Cards:**
  - Header row: Project index (`01 INDEXER UTILITY`) + Telemetry badge (`99.98% Uptime` / `POS Sync Engine` / `Headless CMS`).
  - Project Title: `ABN Data Finder`, `Restaurant Order Processor`, `Social Reach Analytics` in `text-lg font-bold text-primary`.
  - Body Description: 2–3 line summary in `text-xs text-secondary leading-relaxed`.
  - Tech Pills Row: Flex wrap container of stack badges (`Go`, `Next.js`, `Redis`, `PostgreSQL`, `Meilisearch`).
  - **Full-Width Action Buttons:**
    - Primary Action: `INSPECT LIVE DEMO ↗` (100% width, solid high-contrast fill, `h-11`, rounded-md, `text-xs font-mono font-medium`).
    - Secondary Action: `VIEW SOURCE CODE ↗` (100% width, surface fill with hairline border, terracotta arrow `↗`, `h-11`, rounded-md, `text-xs font-mono`).
    - Restricted State: `🔒 PRIVATE REPO // NDA` (100% width, disabled muted surface, lock glyph).

### 5.8 Mobile Section 05 // Academic Credentials

- **Section Heading:** `05 // ACADEMIC CREDENTIALS` (left) | `Credentials` (right).
- **1-Column Modular Stack:**
  - Three stacked cards (`Bachelor of Computing in Software Engineering`, `AWS Certified Cloud Practitioner`, `Higher Diploma in IT`).
  - Card format: Category label + verified status tag (`ACTIVE` badge with shield icon) + title + institution + timeline.

### 5.9 Mobile Section 06 // Initiate Transmission & Local Time

- **Section Heading:** `06 // INITIATE TRANSMISSION` (left) | `< 24h reply` (right).
- **Dispatch Terminal Card:**
  - Card container: `rounded-2xl` with hairline border using current surface/border theme tokens (`border-border-hairline bg-surface`).
  - Headline: `Let's engineer resilient systems together.` (`text-xl font-bold`).
  - Availability statement: `Currently open to senior engineering roles, high-impact distributed architecture contracts, and technical advisory in Melbourne or remote.` (`text-xs text-secondary leading-relaxed`).
  - **CTA Action Controls (Top Row):**
    - Flexible row layout (`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8`).
    - **Primary Button (`INITIATE DISPATCH ↗`):** Burnt Terracotta fill (`bg-accent text-white hover:bg-accent-hover`), bold uppercase monospace text (`font-mono text-sm font-bold`), integrated email copy button, right arrow glyph `↗`, padded with rounded corners (`rounded-xl px-6 py-3`).
    - **Secondary Button (`↓ VIEW CV / RÉSUMÉ ↗`):** Surface/wireframe fill (`bg-surface border border-hairline hover:bg-surface-elevated text-primary`), monospace text (`font-mono text-sm font-medium`), download arrow `↓` on left and external arrow `↗` on right, matching rounded corners (`rounded-xl px-6 py-3`).
  - **Section Divider:** Full-width horizontal hairline divider (`my-6 border-t border-border-hairline`).
  - **Footer Telemetry & Links Bar (Bottom Row):**
    - Responsive layout (`flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono`).
    - **Left Side — Social Links:** Inline flex list (`flex flex-wrap items-center gap-4 sm:gap-5`) for `GitHub ↗`, `LinkedIn ↗`, `Twitter/X ↗`, and `ReadCV ↗` in monospace muted/secondary text with terracotta hover.
    - **Right Side — Live Telemetry Clock:** Real-time clock reading (`flex items-center gap-2 font-mono text-xs text-secondary`) with active pulsing indicator dot in primary accent terracotta (`●`) and format `Melbourne (AEST/AEDT) · HH:mm:ss`.

---

## 6. Header to Footer Component Architecture & Content

### 6.1 Sticky Top Navigation Bar

- **Positioning:** Fixed or sticky top (`sticky top-0 z-50 backdrop-blur-md bg-canvas/90 border-b border-hairline`).
- **Desktop Layout:**
  - **Left:** Monogram brand mark (`NW.` in bold uppercase) + Live availability badge (`● Available for work — Melbourne, VIC`). Green pulse indicator (`#10B981`).
  - **Right Navigation Links:**
    - `01 About`
    - `02 Stack`
    - `03 Exp`
    - `04 Works`
    - `05 Academics`
    - `06 Contact`
  - **Theme Toggle:** Minimalist sun/moon glyph icon button (`w-8 h-8 rounded-full border border-hairline flex items-center justify-center hover:border-text-primary`).
- **Mobile (390px) Layout:**
  - Left: `NW.` + Availability dot.
  - Right: Theme toggle icon + Hamburger menu trigger button (`≡`).
  - **Mobile Drawer (Open State):**
    - Compact fit-to-content translucent overlay (`bg-surface/95 backdrop-blur-lg border-b border-hairline shadow-lg`).
    - Indexed vertical list (`01 ABOUT` through `06 CONTACT`) with Terracotta numbers (`01`–`06`) and trailing arrow indicators (`↗`).
    - Quick dispatch banner (`hello@nipuna.dev`) and social pill links (`GitHub ↗`, `LinkedIn ↗`, `CV Résumé ↗`).

---

### 6.2 Index 00 // Hero Section

- **Overline Tag:** `INDEX 00 // SYSTEM ARCHITECTURE & ENGINEERING` (monospace, terracotta/muted).
- **Display Headline:**  
  `Full-Stack Software Engineer specializing in scalable web platforms & distributed systems.`  
  _(with `scalable web platforms` in italic serif Burnt Terracotta)_.
- **Lead Description:**  
  `4+ years of experience designing and engineering scalable web applications, CRM platforms, and customer engagement solutions across FinTech, MarTech, and CMS domains.`
- **Action CTA Group:**
  - **Primary CTA:** `View Works (03) ↓` (Desktop) / `View Catalogued Works (03) ↓` (Mobile)  
    _Styling:_ Solid high-contrast fill (`bg-text-primary text-canvas` or `bg-accent-terracotta text-white`), rounded-full/rounded-md, font-medium, smooth scroll anchor to `#works`.
  - **Secondary CTA:** `Download CV ⤓` / `Download Curriculum Vitae`  
    _Styling:_ Translucent/Ivory surface with 1px border (`bg-surface border border-hairline hover:border-text-primary`).
  - **Right Badge:** Monospace tag `Full Working Rights in Australia | MEL, AU`.

---

### 6.3 Section 01 // Architectural Manifesto

- **Section Heading:** `01 // ARCHITECTURAL MANIFESTO` (Left) | `Engineering Manifesto` (Right).
- **Layout:** Asymmetrical 2-column wireframe grid (Desktop) / Single-column vertical stack (Mobile 390px).
  - **Left Box (Quote / Invariant Card):**
    - Ivory/Coffee card surface with 1px hairline border.
    - Large decorative quotation mark glyph (`“`).
    - Serif italic quote: _"Building systems centered on architectural clarity, strict data invariants, and defensive simplicity."_
    - Bottom bar: Monospace tag `SYSTEM INTEGRITY & PRAGMATISM` (left) + `CORE RULE` (right).
  - **Right Narrative Prose:**
    - Paragraph 1: Detailed breakdown of engineering principles (bounded contexts, deterministic contracts, sub-50ms latency profiles, eliminating hidden assumptions).
    - Paragraph 2: Experience across FinTech, MarTech, and CMS domains maintaining rock-solid telemetry during peak spikes.
    - **Telemetry Stat Badges (3-Column Grid):**
      1. `PRODUCTION EXP`: **4+ Years**
      2. `DOMAINS`: **FinTech, MarTech & CMS**
      3. `CLOUD PRACTITIONER`: **AWS Certified**

---

### 6.4 Section 02 // Technical Arsenal

- **Section Heading:** `02 // TECHNICAL ARSENAL` (Left) | `Engineering Spec Sheet` (Right).
- **Spec Sheet Grid:** 4 structured modular category cards (`border border-hairline bg-surface p-5 rounded-lg`):
  1. **Frontend Systems (`06 Items`):**  
     `React.js`, `Next.js`, `TypeScript`, `JavaScript (ES6+)`, `Tailwind CSS`, `Vite`.
  2. **Backend & Runtime (`05 Items`):**  
     `Node.js`, `Express.js`, `Spring Boot`, `REST APIs`, `GraphQL`.
  3. **Databases & Storage (`05 Items`):**  
     `PostgreSQL`, `MongoDB`, `MariaDB`, `MySQL`, `Redis`.
  4. **Cloud & DevOps (`04 Items`):**  
     `AWS (Lambda, S3, API Gateway, DynamoDB)`, `GitHub Actions`, `Jenkins`, `CI/CD`.
- **AI & Tooling Marquee Bar:**
  - Full-width ticker or inline strip with terracotta bullet dividers:  
    `// AI & TOOLING // Claude Code · Gemini · Ollama · Git · GitLab · Bitbucket · Jira · Figma`.

---

### 6.5 Section 03 // Experience Chronicle

- **Section Heading:** `03 // EXPERIENCE CHRONICLE` (Left) | `2021 — 2025` (Right).
- **Layout:** Vertical timeline ledger with date/tenure column on left and details on right (Desktop) / stacked date header over details with terracotta `↳` bullet markers (Mobile 390px).
- **Entries:**
  1. **Full-Stack Developer** — `HRC Labs (K1)`
     - _Timeline:_ `JUN 2023 – JUL 2025` | `Melbourne, AU` | `Tenure: 2 yrs 2 mos`
     - Bullet points:
       - Developed end-to-end features for cloud-based payment collection platforms using React, Node.js, TypeScript, and MariaDB.
       - Designed RESTful APIs for automated customer communications and installment workflows.
       - Built core frontend architecture and analytics dashboards for healthcare CRM applications using React, Vite, and Tailwind CSS.
  2. **Software Engineer II** — `Arimac`
     - _Timeline:_ `APR 2022 – JUN 2023` | `Digital Innovation` | `Tenure: 1 yr 3 mos`
     - Bullet points:
       - Led frontend engineering for Social Reach analytics platform utilizing Next.js and Tailwind CSS.
       - Engineered analytics dashboards processing audience sentiment and campaign engagement metrics.
       - Developed REST API integrations for Headless CMS content workflows.
  3. **Software Engineer I** — `Arimac`
     - _Timeline:_ `JUN 2021 – APR 2022` | `Enterprise Services` | `Tenure: 11 mos`
     - Bullet points:
       - Developed customer self-service portals and responsive UI components for international enterprise telecommunications.

---

### 6.6 Section 04 // Featured Deployments

- **Section Heading:** `04 // FEATURED DEPLOYMENTS` (Left) | `03 Works Catalogued` (Right).
- **Projects (Wireframe Spec Cards):**
  1. **ABN Data Finder**
     - _Header:_ `01 INDEXER UTILITY` (left) | `99.98% Uptime` (right pill).
     - _Description:_ High-performance Australian Business Register search engine & lookup utility with instant fuzzy search caching and automated bulk indexer.
     - _Stack Pills:_ `Go`, `Next.js`, `Redis`, `PostgreSQL`, `Meilisearch`.
     - _Actions:_ `Inspect Live Demo ↗` (primary solid button) + `View Source Code ↗` (secondary wireframe button with terracotta arrow).
  2. **Restaurant Order Processor**
     - _Header:_ `02 REAL-TIME PLATFORM` (left) | `Operational Flow` (right pill).
     - _Description:_ Real-time order processing platform with custom tab routing, dynamic state management, and kitchen operational controls.
     - _Stack Pills:_ `React`, `TypeScript`, `Tailwind CSS`, `Node.js`.
     - _Actions:_ `Inspect Live Demo ↗` + `View Source Code ↗`.
  3. **Social Reach Analytics**
     - _Header:_ `03 INTELLIGENCE PLATFORM` (left) | `Enterprise Client` (right pill).
     - _Description:_ Social media intelligence platform providing engagement metrics, sentiment analysis, and campaign performance dashboards.
     - _Stack Pills:_ `Next.js`, `Tailwind CSS`, `Node.js`, `REST API`.
     - _Actions:_ `Inspect Live Demo ↗` + `🔒 Private Repo // NDA` (disabled/secure pill badge).

---

### 6.7 Section 05 // Academic Credentials

- **Section Heading:** `05 // ACADEMIC CREDENTIALS` (Left) | `Formal Qualifications` (Right).
- **Layout:** 3-column modular card layout (Desktop) / 1-column modular stack (Mobile 390px).
  1. **Bachelor Degree:**
     - Title: **Bachelor of Computing in Software Engineering**
     - Institution: _Curtin University, Australia_
     - Timeline: `2017 – 2021`
  2. **Cloud Certification:**
     - Title: **AWS Certified Cloud Practitioner (CLF-C02)**
     - Status: `ACTIVE` with badge icon
     - Issuer: _Amazon Web Services_
     - Validity: `2026 – 2029`
  3. **Higher Diploma:**
     - Title: **Higher Diploma in IT**
     - Institution: _Sri Lanka Institute of Information Technology (SLIIT)_
     - Status: `Completed`

---

### 6.8 Section 06 // Initiate Transmission (Contact & Dispatch)

- **Section Heading:** `06 // INITIATE TRANSMISSION` (Left) | `Response Window < 24h` (Right).
- **Dispatch Terminal Card:**
  - Card container: Rounded corners (`rounded-2xl`) and hairline border using theme tokens (`border-border-hairline bg-surface`).
  - Headline: `Let's engineer resilient systems together.` (`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-primary`).
  - Subhead: `Currently open to senior engineering roles, high-impact distributed architecture contracts, and technical advisory in Melbourne or remote.` (`text-sm sm:text-base text-secondary leading-relaxed`).
  - **CTA Action Controls (Top Row):**
    - Horizontal flex layout (`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8`).
    - **Primary Button (`INITIATE DISPATCH ↗`):**
      - Fill: Primary Accent color (Burnt Terracotta `#D97043` / `bg-accent text-white hover:bg-accent-hover`).
      - Text: Bold monospace uppercase text in primary button text color (`font-mono text-sm font-bold uppercase tracking-wider`).
      - Icon: External arrow glyph `↗` aligned right (with quick copy-to-clipboard action icon).
      - Shape: Rounded corners (`rounded-xl` / `rounded-lg`), padded (`px-6 py-3`).
    - **Secondary Button (`↓ VIEW CV / RÉSUMÉ ↗`):**
      - Fill: Surface/wireframe button background color (`bg-surface hover:bg-surface-elevated`).
      - Text: Theme default text color (`text-primary font-mono text-sm font-medium`).
      - Border: Hairline border using theme border token (`border border-border-hairline hover:border-border-strong`).
      - Icons: Download arrow `↓` (or `⤓`) on the left, external link arrow `↗` on the right.
      - Shape: Matching rounded corners (`rounded-xl`), padded (`px-6 py-3`).
  - **Section Divider:**
    - Full-width horizontal hairline divider using theme border color (`my-6 border-t border-border-hairline`).
  - **Footer Telemetry & Links Bar (Bottom Row):**
    - Horizontal space-between layout (`flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono`).
    - **Left Side — Social Links:**
      - Inline horizontal flex list (`flex flex-wrap items-center gap-4 sm:gap-5`).
      - Items: `GitHub ↗`, `LinkedIn ↗`, `Twitter/X ↗`, `ReadCV ↗`.
      - Style: Monospace font using theme muted/secondary text color with arrow glyphs (`↗`) and terracotta hover transition.
    - **Right Side — Live Telemetry Clock:**
      - Right-aligned live clock reading (`flex items-center gap-2`).
      - Beacon: Active pulsing indicator dot using primary accent color (`●` in Burnt Terracotta).
      - Readout format: `Melbourne (AEST/AEDT) · HH:mm:ss`.

---

### 6.9 Colophon / Footer

- **Layout:** Subtle top hairline border, 2-column metadata row.
  - **Left:** `Nipuna Wasala` — `Crafted with architectural discipline`.
  - **Right:** `© 2025 · Melbourne, Victoria, AU`.

---

## 7. Dark Theme UI Design Patterns (Warm Mocha Architecture)

### 7.1 Dark Theme Surface Elevation & Depth Hierarchy

Rather than relying on drop shadows, the Warm Mocha Dark Theme establishes visual depth through strict chromatic elevation layering and delicate 1px hairline wireframes:

- **Canvas Base Layer (`#181310` / `#17120F`):** Deep roasted mocha floor providing maximum warm contrast without pure black eye strain.
- **Card & Spec Surface Layer (`#241E19` / `#201A17`):** Warm espresso cards bound by subtle 1px Walnut borders (`#382E27`).
- **Elevated Interactive Surface (`#2D2520`):** Hover states, interactive pill containers, and inset text blocks.
- **Sub-Element Pill & Badge Inset (`#1C1613`):** Deep nested background used for technology pills (`Go`, `TypeScript`, `Redis`) with fine hairline borders (`#382E27`) and Sand text (`#C4B8A5`).
- **Translucent Overlays (`#1C1613` / `#181310` with `backdrop-blur-md`):** Used for pinned navigation header and mobile navigation drawer with `border-b border-[#382E27]`.

### 7.2 Dark Theme Typographic Contrast & Text Hierarchy

- **Primary Text (`#FDFBF7` / `#FAF7F2`):** Pristine Warm Cream applied to high-priority headings, hero display text, card headlines, and primary button labels. Ensures AAA accessibility against mocha surfaces.
- **Secondary Text (`#C4B8A5`):** Warm Sand tone for body narrative, multi-line project descriptions, bullet points, and section subtitles. Softens contrast while eliminating glare.
- **Muted Telemetry & Spec Text (`#8C827A`):** Warm Ash used for index markers (`01 //`, `INDEX 00 //`), category headers, dates, tenures, and trailing glyphs (`↗`).
- **Accent Highlighting (`#D97043`):** Burnt Terracotta reserved for actionable focal points, italic serif headline keywords (`scalable web platforms`), bullet return arrows (`↳`), company names (`HRC Labs`), and status badges.

### 7.3 Dark Theme Component Patterns & Interactive States

1. **Sticky Header & Availability Badge (Dark)**:
   - Background: `rgba(24, 19, 16, 0.92)` with `backdrop-blur-md`.
   - Border: `1px solid #382E27`.
   - Monogram: Bold `NW.` in `#FDFBF7`.
   - Availability Dot: Emerald green (`#10B981`) with soft pulsing animation.
   - Theme Toggle: Circular hairline outline (`border border-[#382E27] text-[#C4B8A5] hover:text-[#FDFBF7] hover:border-[#FDFBF7]`) displaying Moon/Sun icon.

2. **Hero Action Controls (Dark)**:
   - **Primary CTA (`View Works (03) ↓` / `View Catalogued Works (03) ↓`):**
     - Fill: Solid Warm Cream (`#FDFBF7`).
     - Text: Dark Mocha (`#181310`), font-medium.
     - Arrow: Terracotta (`#D97043`) or Mocha (`#181310`).
     - Hover: Elevated cream sheen (`#FFFFFF`) with subtle upward micro-translation.
   - **Secondary CTA (`Download Curriculum Vitae ⤓`):**
     - Fill: Card surface (`#241E19`).
     - Border: 1px hairline Walnut (`#382E27`).
     - Text: Warm Cream (`#FDFBF7`) or Sand (`#C4B8A5`), with terracotta download glyph.
     - Hover: Border shifts to active sand (`#4A3E35` / `#FDFBF7`).
   - **Australian Working Rights Chip:**
     - Background: `rgba(36, 30, 25, 0.6)`.
     - Border: `1px solid #382E27`.
     - Dot: Emerald green (`#10B981`).
     - Text: `#C4B8A5` monospace.

3. **Section 01 // Architectural Manifesto (Dark)**:
   - **Quote Block:** Surface `#241E19`, border `#382E27`, quote text in serif italic `#FDFBF7`.
   - **Quotation Mark Glyph:** Burnt Terracotta (`#D97043`) with 80% opacity.
   - **Telemetry Stat Cards (3-Column):**
     - Background: Inset surface `#1C1613` or card `#241E19`.
     - Value: Bold `#FDFBF7` (`4+ Years`, `FinTech / MarTech`, `AWS Certified`).
     - Label: Monospace Ash (`#8C827A`).

4. **Section 02 // Technical Arsenal Spec Sheet (Dark)**:
   - **Category Cards (4-Column Grid Desktop / 1-Column Mobile):**
     - Card background `#241E19` with hairline border `#382E27`.
     - Header row: Terracotta category dot (`■`), monospace title in `#FDFBF7`, count badge (`06 items`) in `#8C827A`.
     - Tech Pills: Background `#1C1613`, border `#382E27`, text `#FDFBF7` / `#C4B8A5`. Hover state `#2D2520`.
   - **AI & Tooling Marquee Strip (Dark):**
     - Background: Full-width container `#241E19` or `#1C1613`, border `#382E27`.
     - Prefix: `// AI & TOOLING //` in Burnt Terracotta (`#D97043`).
     - Ticker items: Separated by terracotta centered dots (`·`) in `#C4B8A5`.

5. **Section 03 // Experience Chronicle (Dark)**:
   - **Timeline Ledger / Entries:**
     - Date & Location: `#D97043` Burnt Terracotta (dates) and `#8C827A` (tenure/location).
     - Job Title: Bold `#FDFBF7`.
     - Company Name: `#D97043` with font-semibold.
     - Deliverable Bullet Points: Left-facing terracotta return arrow (`↳` in `#D97043`), text in Sand `#C4B8A5` leading-relaxed.

6. **Section 04 // Featured Deployments (Dark Project Cards)**:
   - Card container: Deep espresso `#241E19`, border `#382E27`.
   - Meta Row: Project index in `#8C827A` + Telemetry status badge (e.g. `99.98% Uptime` in `bg-[#D97043]/10 text-[#D97043] border border-[#D97043]/20`).
   - Project Title: Bold `#FDFBF7` (`text-xl` desktop, `text-lg` mobile).
   - Description: Warm Sand `#C4B8A5`.
   - Stack Pills: Nested `#1C1613` pills with `#382E27` border and `#C4B8A5` text.
   - **Dark Action Button Pair**:
     - _Inspect Live Demo ↗_: Solid Cream button (`bg-[#FDFBF7] text-[#181310] hover:bg-white`) with terracotta arrow (`#D97043`).
     - _View Source Code ↗_: Wireframe button (`bg-[#241E19] border border-[#382E27] text-[#FDFBF7] hover:border-[#C4B8A5]`) with terracotta arrow.
     - _🔒 Private Repo // NDA_: Restricted state with subtle inset `#1C1613`, border `#382E27`, muted text `#8C827A`, lock icon.

7. **Section 05 // Academic Credentials (Dark)**:
   - 3 modular cards in `#241E19` with `#382E27` hairline outlines.
   - Active status badge: Emerald dot / terracotta badge chip for `ACTIVE` certification.
   - Institution & Year: Muted Sand `#8C827A` and `#C4B8A5`.

8. **Section 06 // Initiate Transmission & Terminal Box (Dark)**:
   - Card container: `#241E19` with hairline Walnut border `#382E27` and rounded corners (`rounded-2xl`).
   - Headline: `#FDFBF7` bold.
   - Narrative: `#C4B8A5` leading-relaxed.
   - **Primary Dispatch CTA:** Burnt Terracotta fill (`bg-[#D97043] text-white hover:bg-[#BF552B]`), rounded-xl (`rounded-xl px-6 py-3`), bold monospace uppercase text `INITIATE DISPATCH ↗` with integrated copy icon.
   - **Secondary CTA:** Wireframe surface button (`bg-[#241E19] border border-[#382E27] text-[#FDFBF7] hover:bg-[#2D2520] hover:border-[#4A3E35]`) with rounded corners (`rounded-xl px-6 py-3`), download arrow `↓` on left and external arrow `↗` on right: `↓ VIEW CV / RÉSUMÉ ↗`.
   - **Section Divider:** Full-width hairline divider `my-6 border-t border-[#382E27]`.
   - **Footer Telemetry & Links Bar:**
     - Left: Inline horizontal flex list (`flex items-center gap-5`) for `GitHub ↗`, `LinkedIn ↗`, `Twitter/X ↗`, and `ReadCV ↗` in `#C4B8A5` with `#D97043` hover.
     - Right: Monospace live digital time readout `#C4B8A5` with active pulsing terracotta indicator (`● Melbourne (AEST/AEDT) · HH:mm:ss`).

9. **Mobile Navigation Drawer (Open State — Dark)**:
   - Overlay surface: `bg-[#241E19]/98` or `bg-[#1C1613]/98` with `backdrop-blur-xl`, border-b `#382E27`, shadow-2xl.
   - Row Items: `01 ABOUT` to `06 CONTACT`. Left number in `#D97043`, label in `#FDFBF7`, trailing arrow in `#8C827A`.
   - Divider: `border-b border-[#382E27]/60` between rows.
   - Direct Dispatch banner: `hello@nipuna.dev` in `#D97043`.
   - Social pills: Dark surface pills (`bg-[#1C1613] border border-[#382E27] text-[#C4B8A5]`).

---

## 8. Micro-Interactions, Motion & Technical Scripts

1. **Ambient Spotlight Glows:**
   - Extremely soft blurred radial gradient ambient blobs positioned fixed or absolute behind the content:
     - Light Mode: `#EADFCB` at `2% – 4%` opacity, `blur(120px)`.
     - Dark Mode: `#D97043` & `#2A2118` at `3% – 5%` opacity, `blur(140px)`.
   - Motion: Subtly drifting on an infinite 25s–30s CSS keyframe loop.

2. **Live Melbourne Clock Script & Active Pulse Beacon:**
   - Updates every 1000ms using `Intl.DateTimeFormat` configured to timezone `'Australia/Melbourne'` in format `HH:mm:ss`.
   - Visual telemetry: Real-time digital readout string with an active pinging/pulsing beacon dot rendered in Primary Accent (Burnt Terracotta) indicating live operational availability.

3. **Section 06 Action & Telemetry Controls:**
   - **Primary Dispatch Trigger & Clipboard Fallback:** Clicking `INITIATE DISPATCH ↗` launches user's default email client (`mailto:hello@nipuna.dev`), while the adjacent clipboard trigger copies `hello@nipuna.dev` to the system clipboard with an instant visual state feedback transition.
   - **Download / Inspect CV:** Provides immediate access to curriculum vitae / résumé document with download and external link cues.
   - **Inline Social Grid & Hover Matrix:** Compact, non-intrusive horizontal metadata row linking external networks with diagonal arrow glyph transitions.

4. **Accessibility & Reduced Motion:**
   - Wraps marquee animations, pulsing indicators, and ambient glow drifts in `@media (prefers-reduced-motion: reduce)` to disable continuous transforms for sensitive users.
