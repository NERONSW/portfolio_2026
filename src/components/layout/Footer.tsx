export function Footer() {
  return (
    <footer className="w-full border-t border-border-hairline bg-surface-base transition-colors duration-200">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-10 font-mono text-xs sm:flex-row sm:px-6 lg:px-8">
        {/* Left: Colophon Statement */}
        <div className="flex items-center gap-2 text-text-secondary">
          <span className="font-semibold text-text-primary">Nipuna Wasala</span>
          <span className="text-border-strong">/</span>
          <span className="text-text-muted">Crafted with architectural discipline</span>
        </div>

        {/* Right: Copyright Notice & Origin */}
        <div className="text-[11px] text-text-tertiary">
          <span>© 2025 · Melbourne, Victoria, AU</span>
        </div>
      </div>
    </footer>
  );
}
