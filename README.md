# nipunawasala.com // Personal Engineering Portfolio

[![Live Site](https://img.shields.io/badge/Live_Site-www.nipunawasala.com-10B981?style=for-the-badge&logo=vercel&logoColor=white)](https://www.nipunawasala.com/)
![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)

A minimalist, high-performance personal portfolio and engineering showcase designed and engineered by **Nipuna Wasala**. Live production site: [www.nipunawasala.com](https://www.nipunawasala.com/).

Built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion, featuring a dark technical aesthetic, system index layout, smooth scroll offset architecture, and responsive UI scaling.

---

## Key Features

- **Terminal & Index Aesthetic:** Precision dark UI inspired by developer tools and CLI interfaces with monospace typography accents, index badges (`Index 00 // ...`), and status metrics.
- **Anchor Navigation & Scroll Offset Hierarchy:** Section navigation built with `scroll-margin-top` scaling (`scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32`) to guarantee section titles remain clear below the sticky header across mobile, tablet, and desktop viewports.
- **Interactive Hero & Works CTA:** Programmatic anchor scroll handlers preventing URL hash collision locks on repeated CTA button interactions.
- **Featured Deployments Matrix:** Data-driven project showcase supporting context-aware CTA labels (`INSPECT LIVE DEMO ↗`, `EXPLORE LIVE PRODUCT ↗`, `VIEW PRODUCT PORTAL ↗`, `🔒 Internal Platform // Restricted`).
- **Ambient Animation & Micro-Interactions:** Subtle background lighting effects powered by SCSS modules and Framer Motion layout transitions.
- **Optimized PDF Resume Delivery:** Direct inline asset linking and download routing for executive resume access.

---

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Package Manager:** [pnpm](https://pnpm.io/) _(Recommended & Primary)_
- **Styling & Design System:** [Tailwind CSS v4](https://tailwindcss.com/), Custom SCSS ambient modules, CSS variables
- **Icons & Primitives:** [Lucide React](https://lucide.dev/), [Radix UI](https://www.radix-ui.com/)
- **Animation Engine:** [Framer Motion](https://www.framer.com/)
- **Deployment Platform:** [Vercel](https://vercel.com/)

---

## Getting Started

### Prerequisites

- **Node.js**: `v18.17.0` or higher
- **pnpm**: `v8.0.0` or higher _(Recommended)_

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/NERONSW/portfolio_2026.git](https://github.com/NERONSW/portfolio_2026.git)
   cd portfolio_2026
   ```

````

2. **Install dependencies using pnpm:**
```bash
pnpm install

````

3. **Run the local development server:**

```bash
pnpm dev

```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the live application.

---

## Available Scripts

> **Note:** `pnpm` is the required/recommended package manager for this codebase.

- `pnpm dev` — Starts the local Next.js development server with Turbopack.
- `pnpm build` — Compiles the application for production deployment.
- `pnpm start` — Starts the Node.js production server.
- `pnpm lint` — Runs ESLint checks across the codebase.

---

## Release & Deployment Workflow

Production deployment is automated via Vercel CI/CD:

1. **Development & Staging:** Implement features and bug fixes in feature/topic branches.
2. **Release Branch Deployment:** Merge tested features into the `release` branch.
3. **Automated Production Build:** Pushing to the `release` branch triggers the production pipeline, deploying live updates to [www.nipunawasala.com](https://www.nipunawasala.com/).

---

## Design System & Architecture Guidelines

For complete details regarding typography choices, color tokens, layout grids, and the responsive scroll-margin matrix, refer to [`design.md`](https://www.google.com/search?q=./design.md).

---

## License

Designed and developed by **Nipuna Wasala**.

Code is available under the [MIT License](https://www.google.com/search?q=./LICENSE).

```

```
