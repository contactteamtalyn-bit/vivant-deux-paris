export function DemoBanner() {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-center border-b border-terracotta/50 bg-nuit-deep"
      style={{ height: 'var(--banner-h)' }}
    >
      <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap px-4">
        <span className="font-dm text-[11px] font-semibold uppercase tracking-[0.18em] text-terracotta">
          Maquette démo
        </span>
        <span className="hidden sm:inline font-dm text-[11px] uppercase tracking-[0.18em] text-creme/50">
          · Réalisée par Maison Talyn pour Vivant 2 · Non finalisée ·
        </span>
        <span className="sm:hidden font-dm text-[11px] uppercase tracking-[0.18em] text-creme/50">·</span>
        <span className="font-dm text-[11px] font-semibold uppercase tracking-[0.18em] text-creme">
          @maison.talyn
        </span>
      </div>
    </div>
  )
}
