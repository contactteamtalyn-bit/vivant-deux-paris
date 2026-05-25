import { Reveal } from '@/components/Reveal'
import { SmartImage } from '@/components/SmartImage'

const bottles = Array.from({ length: 9 }, (_, i) => String(i + 1).padStart(2, '0'))

export function LeVin() {
  return (
    <section id="vin" className="overflow-hidden bg-vin py-24 text-creme sm:py-32">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow text-terracotta-light">← Le vin</p>
        </Reveal>
        <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal delay={0.1}>
            <h2 className="font-abril italic leading-[1.04]" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
              Des vins pleins de vie.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-md font-dm text-[17px] font-light leading-[1.7] text-creme/65">
              On travaille avec des vignerons qui font du vin comme on fait à manger — avec
              leurs mains, leur terre, et pas mal de cœur. Naturels, vivants, imprévisibles.
              Comme une bonne soirée.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Cave — scroll horizontal */}
      <div className="scroll-x mt-14 flex gap-5 px-[max(20px,calc((100vw-1240px)/2+56px))] pb-4">
        {bottles.map((n, i) => (
          <figure
            key={n}
            className="snap-start shrink-0"
            style={{ width: 'clamp(210px, 58vw, 290px)' }}
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-vin-deep ring-1 ring-creme/10">
              <SmartImage src={`/images/vin/vin-${n}.jpg`} alt={`Vin nature ${n} chez Vivant 2`} eager={i < 2} className="h-full w-full" />
            </div>
            <figcaption className="mt-3 flex items-center justify-between font-dm text-[11px] uppercase tracking-[0.18em] text-creme/40">
              <span>Cuvée</span>
              <span>N°{n}</span>
            </figcaption>
          </figure>
        ))}
        <div className="shrink-0 self-center pr-8">
          <span className="font-dm text-[12px] font-light italic text-creme/40">glisser →</span>
        </div>
      </div>
    </section>
  )
}
