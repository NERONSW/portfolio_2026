export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  category: "Full Stack" | "Frontend" | "AI & ML" | "Open Source" | "Design Engineering";
  featured: boolean;
  year: number;
  tags: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
  coverImage: string;
  screenshots?: string[];
  highlights: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

export const projects: Project[] = [
  {
    slug: "nexus-design-engine",
    title: "Nexus Design Engine",
    tagline: "Autonomous design token compiler & component synchronizer",
    description:
      "A high-performance CLI and web dashboard for extracting, transforming, and synchronizing design system tokens across multi-framework codebases.",
    longDescription:
      "Nexus bridges the divide between Figma styles and production codebases. It automatically ingests Figma REST tokens, validates contrast ratios according to APCA standards, compiles zero-runtime CSS custom properties and SCSS mixins, and distributes them across Next.js, Vite, and mobile repositories.",
    category: "Design Engineering",
    featured: true,
    year: 2025,
    tags: ["Design Systems", "CLI", "Tokens", "TypeScript"],
    technologies: ["TypeScript", "Next.js 15", "Tailwind CSS", "Figma REST API", "Node.js", "Vitest"],
    githubUrl: "https://github.com/example/nexus-design-engine",
    liveUrl: "https://nexus-demo.example.com",
    coverImage: "/projects/nexus-cover.png",
    screenshots: ["/projects/nexus-1.png", "/projects/nexus-2.png"],
    highlights: [
      "Sub-millisecond AST parser generating multi-brand token themes",
      "Automatic APCA contrast validation and WCAG 2.2 accessibility scoring",
      "Git-backed PR generation pipeline for automated theme changes"
    ],
    metrics: [
      { label: "Sync Speed", value: "< 250ms" },
      { label: "Designers & Devs", value: "500+" },
      { label: "Tokens Processed", value: "10k+" }
    ]
  },
  {
    slug: "cortex-analytics",
    title: "Cortex Realtime Analytics",
    tagline: "Privacy-first event streaming and telemetry platform",
    description:
      "Modern, cookieless web telemetry platform providing real-time user flow diagnostics and latency insights with sub-second queries.",
    longDescription:
      "Cortex delivers granular user session insights without invasive trackers. Built on top of clickstream events buffered through Redis and ingested into ClickHouse, Cortex gives engineering teams high-resolution funnel visualizations, core web vitals alerts, and distributed trace metrics.",
    category: "Full Stack",
    featured: true,
    year: 2025,
    tags: ["Analytics", "Realtime", "Next.js", "ClickHouse"],
    technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "ClickHouse", "Redis", "Docker"],
    githubUrl: "https://github.com/example/cortex-analytics",
    liveUrl: "https://cortex.example.com",
    coverImage: "/projects/cortex-cover.png",
    screenshots: ["/projects/cortex-1.png"],
    highlights: [
      "Zero-cookie GDPR/CCPA compliant telemetry pipeline",
      "Interactive SVG canvas charts supporting 100k data points at 60 FPS",
      "Instant query responses across terabyte-scale event logs"
    ],
    metrics: [
      { label: "Throughput", value: "1.2M req/s" },
      { label: "Query Latency", value: "< 80ms" },
      { label: "Data Reduction", value: "4x gzip" }
    ]
  },
  {
    slug: "strata-cloud-cli",
    title: "Strata Cloud Orchestrator",
    tagline: "Declarative infrastructure-as-code for edge workloads",
    description:
      "Lightweight declarative tool for orchestrating serverless functions, database replicas, and edge caches from a single configuration file.",
    longDescription:
      "Strata minimizes multi-region deployment friction. With a single human-readable YAML spec, developers can provision edge caches, configure failover rules, and stream container logs directly into their terminal.",
    category: "Cloud & DevOps" as Project["category"],
    featured: true,
    year: 2024,
    tags: ["DevOps", "Edge", "Go", "Cloud"],
    technologies: ["TypeScript", "Node.js", "AWS SDK", "Docker", "Cloudflare Workers"],
    githubUrl: "https://github.com/example/strata-orchestrator",
    liveUrl: "https://strata.example.com",
    coverImage: "/projects/strata-cover.png",
    highlights: [
      "Single-command atomic deployments across 14 edge regions",
      "Real-time websocket log streamer with interactive TUI filters",
      "Configurable rollbacks triggered automatically on error thresholds"
    ],
    metrics: [
      { label: "Deployment Time", value: "18s" },
      { label: "Edge Regions", value: "14" },
      { label: "Active Nodes", value: "2,000+" }
    ]
  },
  {
    slug: "zenith-notes",
    title: "Zenith Local-First Workspace",
    tagline: "Offline-first markdown notes with bidirectional linking",
    description:
      "A fast, keyboard-first desktop and web markdown workspace leveraging CRDTs for effortless peer-to-peer collaboration.",
    longDescription:
      "Zenith treats user notes as plain text files stored locally, backed by SQLite/IndexedDB. Synchronization is managed via Yjs CRDTs over WebRTC, guaranteeing instant conflict-free concurrent editing without mandatory central cloud storage.",
    category: "Frontend",
    featured: false,
    year: 2024,
    tags: ["Local-First", "CRDT", "React", "IndexedDB"],
    technologies: ["React 19", "TypeScript", "Yjs", "Tailwind CSS", "IndexedDB"],
    githubUrl: "https://github.com/example/zenith-notes",
    liveUrl: "https://zenith.example.com",
    coverImage: "/projects/zenith-cover.png",
    highlights: [
      "Sub-5ms search indexing over 50,000 markdown documents",
      "Zero-latency offline edits with end-to-end encrypted synchronization",
      "Interactive 3D graph view of document backlinks and conceptual clusters"
    ],
    metrics: [
      { label: "Offline First", value: "100%" },
      { label: "Sync Latency", value: "< 15ms" },
      { label: "Search Index", value: "50k docs" }
    ]
  }
];
