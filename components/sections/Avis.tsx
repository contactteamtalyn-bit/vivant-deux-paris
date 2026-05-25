import { Star } from 'lucide-react'
import { Reveal } from '@/components/Reveal'

const avis = [
  {
    text: 'Exactement le genre d’endroit qu’on garde secret pour ne pas qu’il soit bondé. Cuisine sincère, vins naturels parfaits, ambiance magique.',
    author: 'Camille D.',
    stars: 5,
  },
  {
    text: 'On avait réservé pour 2h. On est restés 4h. La bande-son est dingue.',
    author: 'Marwane K.',
    stars: 5,
  },
  {
    text: 'Le meilleur rapport qualité-plaisir du 10e. Le genre de soir dont on parle longtemps.',
    author: 'Sophie L.',
    stars: 4,
  },
]

export function Avis() {
  return (
    <section className="relative overflow-hidden bg-nuit py-24 sm:py-32">
      {/* Grande guillemet */}
      <span
        className="pointer-events-none absolute -top-6 left-4 select-none font-abril text-[12rem] leading-none text-terracotta/20 sm:left-12"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <div className="wrap relative">
        <Reveal>
          <p className="eyebrow text-terracotta">← Ils en parlent</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-abril italic leading-tight text-creme" style={{ fontSize: 'clamp(2rem, 4.6vw, 3rem)' }}>
            432 avis. Ils sont revenus.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {avis.map((a, i) => (
            <Reveal key={a.author} delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-2xl border border-creme/10 bg-creme/[0.03] p-8">
                <div className="flex gap-0.5">
                  {Array.from({ length: a.stars }).map((_, s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-terracotta text-terracotta" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 font-dm text-[16px] font-light leading-relaxed text-creme/80">
                  {a.text}
                </blockquote>
                <figcaption className="mt-6 font-dm text-[13px] uppercase tracking-[0.16em] text-creme/45">
                  {a.author}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
