export function Footer() {
  return (
    <footer className="bg-nuit-deep">
      <div className="wrap py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-abril text-[1.7rem] leading-none text-creme">
              Vivant<span className="text-terracotta"> 2</span>
            </p>
            <p className="mt-3 font-dm text-[14px] font-light italic text-terracotta">
              Good food. Wines full of life.
            </p>
          </div>

          <div className="font-dm text-[13px] font-light leading-relaxed text-creme/55 md:text-right">
            <p>43 rue des Petites Écuries · 75010 Paris</p>
            <p className="mt-1">+33 9 67 49 96 26 · @vivantdeux</p>
            <p className="mt-1 text-creme/35">Groupe Savoir Vivre</p>
          </div>
        </div>
      </div>

      {/* Bande anti-vol */}
      <div className="border-t border-creme/10 py-4">
        <p className="wrap text-center font-dm text-[11px] uppercase tracking-[0.18em] text-creme/35">
          Maquette démo non finale — Maison Talyn ·{' '}
          <span className="text-terracotta/70">@maison.talyn</span>
        </p>
      </div>
    </footer>
  )
}
