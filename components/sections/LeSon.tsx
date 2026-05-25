import { Reveal } from '@/components/Reveal'
import { SmartImage } from '@/components/SmartImage'

// Égaliseur : barres animées (la bande-son qui vit)
const bars = [0, 0.18, 0.36, 0.12, 0.5, 0.28, 0.42]

function Equalizer() {
  return (
    <div className="flex items-end gap-[3px]" aria-hidden="true">
      {bars.map((d, i) => (
        <span
          key={i}
          className="eq-bar animate-eq"
          style={{ animationDelay: `${d}s`, height: `${16 + (i % 3) * 8}px` }}
        />
      ))}
    </div>
  )
}

export function LeSon() {
  return (
    <section id="son" className="relative flex min-h-[80vh] items-center overflow-hidden bg-nuit py-28">
      {/* Photo flottante diagonale */}
      <div className="pointer-events-none absolute right-0 top-1/2 hidden w-[36%] -translate-y-1/2 rotate-2 lg:block">
        <div className="clip-diag relative aspect-[3/4] w-full opacity-60">
          <SmartImage src="/images/ambiance/ambiance-01.jpg" alt="Ambiance du soir chez Vivant 2" className="h-full w-full" />
          <div className="absolute inset-0 bg-nuit/20" aria-hidden="true" />
        </div>
      </div>

      <div className="wrap relative">
        <div className="max-w-3xl">
          <Reveal className="flex items-center gap-4">
            <p className="eyebrow text-terracotta">← La bande-son</p>
            <Equalizer />
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-7 font-abril italic leading-[1.05] text-creme" style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)' }}>
              On ne vous promet pas
              <br />
              juste de bien manger.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl font-dm text-[18px] font-light leading-[1.8] text-creme/60">
              On vous promet une salle où la musique est aussi choisie que le vin. Un repas
              qui commence doucement et finit fort. Il paraît que certains soirs, les gens
              finissent par chanter.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <span className="mt-9 inline-block border border-terracotta px-5 py-2 font-dm text-[10px] uppercase tracking-[0.22em] text-terracotta">
              You-might-start-singing-at-the-end
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
