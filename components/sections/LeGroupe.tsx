import { cn } from '@/lib/utils'
import { Reveal } from '@/components/Reveal'

const maisons = [
  { name: 'Vivant 2', tag: 'Vous êtes ici', active: true },
  { name: 'Deviant', tag: 'Paris 10e', active: false },
  { name: 'Il Camino', tag: 'Trattoria', active: false },
  { name: 'Collier de la Reine', tag: 'Bistrot', active: false },
]

export function LeGroupe() {
  return (
    <section className="bg-creme py-20 sm:py-24">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow text-vin">← Le groupe</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-abril italic leading-tight text-nuit" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}>
            Savoir Vivre.
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="scroll-x mt-10 flex gap-4 lg:grid lg:grid-cols-4">
            {maisons.map((m) => (
              <div
                key={m.name}
                className={cn(
                  'flex min-w-[220px] flex-col justify-between rounded-xl bg-nuit p-6 lg:min-w-0',
                  m.active ? 'border border-terracotta' : 'border border-transparent'
                )}
                style={{ minHeight: 150 }}
              >
                <span
                  className={cn(
                    'font-dm text-[10px] uppercase tracking-[0.2em]',
                    m.active ? 'text-terracotta' : 'text-creme/40'
                  )}
                >
                  {m.tag}
                </span>
                <h3 className="mt-6 font-abril text-[1.6rem] leading-none text-creme">{m.name}</h3>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-8 font-dm text-[13px] font-light text-nuit/50">
            4 adresses. Une seule philosophie.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
