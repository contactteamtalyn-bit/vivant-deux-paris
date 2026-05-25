import { DemoCTA } from '@/components/DemoModal'
import { SmartImage } from '@/components/SmartImage'

const WORD = 'Vivant'

export function Hero() {
  return (
    <section id="top" className="relative bg-nuit">
      {/* Halo terracotta diffus */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(60% 50% at 50% 38%, rgba(196,113,74,0.12) 0%, rgba(13,17,23,0) 70%)' }}
        aria-hidden="true"
      />

      <div className="wrap relative flex min-h-[calc(100vh-var(--banner-h))] flex-col items-center justify-center py-28 text-center">
        <p className="intro eyebrow text-terracotta" style={{ animationDelay: '0.1s' }}>
          Paris 10e · Rue des Petites Écuries
        </p>

        <h1
          className="mt-6 font-abril leading-[0.9] tracking-tightest text-creme"
          style={{ fontSize: 'clamp(5rem, 13vw, 11rem)' }}
        >
          <span className="sr-only">Vivant 2</span>
          <span aria-hidden="true" className="inline-flex items-start justify-center">
            {WORD.split('').map((c, i) => (
              <span key={i} className="letter" style={{ animationDelay: `${0.3 + i * 0.07}s` }}>
                {c}
              </span>
            ))}
            <span
              className="letter ml-3 mt-2 align-top text-[0.4em] leading-none text-terracotta"
              style={{ animationDelay: `${0.3 + WORD.length * 0.07 + 0.05}s` }}
            >
              2
            </span>
          </span>
        </h1>

        <div className="intro mt-8 space-y-1" style={{ animationDelay: '0.95s' }}>
          <p className="font-dm text-[clamp(1.4rem,3vw,2.3rem)] font-light italic text-creme/55">
            Good food. Wines full of life.
          </p>
          <p className="font-dm text-[clamp(1.1rem,2.2vw,1.7rem)] font-light italic text-creme/35">
            You-might-start-singing-at-the-end soundtrack.
          </p>
        </div>

        <div className="intro mt-11 flex flex-col items-center gap-4 sm:flex-row" style={{ animationDelay: '1.2s' }}>
          <DemoCTA variant="terracotta" size="lg">
            Réserver une table
          </DemoCTA>
          <DemoCTA variant="ghost" size="lg">
            +33 9 67 49 96 26
          </DemoCTA>
        </div>

        {/* Indicateur scroll — flèche dessinée (SVG) */}
        <div className="intro absolute bottom-8 left-1/2 -translate-x-1/2" style={{ animationDelay: '1.6s' }}>
          <div className="bob flex flex-col items-center gap-2">
            <svg width="16" height="34" viewBox="0 0 16 34" fill="none" aria-hidden="true">
              <line x1="8" y1="0" x2="8" y2="28" stroke="#F5EDE0" strokeOpacity="0.3" strokeWidth="1" />
              <path d="M2 22 L8 30 L14 22" stroke="#F5EDE0" strokeOpacity="0.3" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-dm text-[11px] font-light uppercase tracking-[0.2em] text-creme/30">
              Découvrir
            </span>
          </div>
        </div>
      </div>

      {/* L'image arrive au scroll — bande pleine largeur */}
      <div className="intro relative overflow-hidden" style={{ animationDelay: '0.5s' }}>
        <div className="relative h-[58vh] min-h-[340px] w-full">
          <SmartImage src="/images/hero/hero-main.jpg" alt="La salle de Vivant 2 le soir" eager className="h-full w-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-nuit via-nuit/10 to-transparent" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
