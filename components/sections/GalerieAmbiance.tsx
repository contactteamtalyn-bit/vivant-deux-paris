import { Reveal } from '@/components/Reveal'
import { SmartImage } from '@/components/SmartImage'

const frames = [
  '/images/ambiance/ambiance-01.jpg',
  '/images/ambiance/ambiance-04.jpg',
  '/images/plats/plat-03.jpg',
  '/images/ambiance/ambiance-03.jpg',
  '/images/ambiance/ambiance-05.jpg',
  '/images/plats/plat-04.jpg',
  '/images/ambiance/ambiance-02.jpg',
]

export function GalerieAmbiance() {
  return (
    <section id="lieu" className="bg-nuit py-24 sm:py-32">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow text-terracotta">← L&apos;endroit</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-abril italic leading-[1.05] text-creme" style={{ fontSize: 'clamp(2rem, 4.6vw, 3rem)' }}>
            43, rue des Petites Écuries.
          </h2>
        </Reveal>
      </div>

      {/* Bande filmique — perforations + scroll horizontal */}
      <div className="film mt-12">
        <div className="scroll-x flex gap-px px-[max(20px,calc((100vw-1240px)/2+56px))]">
          {frames.map((src, i) => (
            <figure
              key={src}
              className="group relative shrink-0 snap-start overflow-hidden"
              style={{ width: 'clamp(320px, 72vw, 480px)', height: 'clamp(260px, 40vw, 380px)' }}
            >
              <SmartImage src={src} alt={`Vivant 2 — ambiance ${i + 1}`} eager={i < 2} className="h-full w-full transition-transform duration-700 ease-vivant group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-nuit-deep/80 to-transparent p-4">
                <span className="font-dm text-[11px] uppercase tracking-[0.2em] text-creme/55">
                  Vivant 2 · Paris 10e
                </span>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
