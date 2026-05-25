import { Reveal } from '@/components/Reveal'
import { SmartImage } from '@/components/SmartImage'

export function LaCuisine() {
  return (
    <section id="cuisine" className="bg-creme py-24 sm:py-32">
      <div className="wrap grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Texte */}
        <div>
          <Reveal>
            <p className="eyebrow text-vin">← La cuisine</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-abril italic leading-[1.05] text-nuit" style={{ fontSize: 'clamp(2.1rem, 4.6vw, 3rem)' }}>
              De la bonne cuisine.
              <br />
              C&apos;est tout.
              <br />
              C&apos;est assez.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 max-w-md font-dm text-[16px] font-light leading-[1.75] text-nuit/70">
              Pas de chichi. Des produits qui ont du goût, des recettes qui ont du sens.
              Une cuisine honnête au cœur du 10e — celle qu&apos;on a envie de refaire,
              et celle qu&apos;on n&apos;arrive jamais à égaler chez soi.
            </p>
          </Reveal>
        </div>

        {/* Photos offset-stack */}
        <Reveal delay={0.15}>
          <div className="relative pb-12 pl-6 sm:pb-16">
            <div className="relative ml-auto aspect-[4/3] w-[80%] overflow-hidden rounded-sm bg-nuit/5 shadow-[0_30px_60px_-30px_rgba(13,17,23,0.5)]">
              <SmartImage src="/images/plats/plat-01.jpg" alt="Plat signature de Vivant 2" className="h-full w-full" />
            </div>
            <div className="absolute bottom-0 left-0 aspect-[3/4] w-[46%] -rotate-2 overflow-hidden rounded-sm border-2 border-terracotta/40 shadow-[0_24px_48px_-22px_rgba(13,17,23,0.55)]">
              <SmartImage src="/images/plats/plat-02.jpg" alt="Une assiette de saison" className="h-full w-full" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
