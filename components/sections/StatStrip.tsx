import { Reveal } from '@/components/Reveal'

const stats = [
  { value: '4,3★', label: 'Google · 432 avis' },
  { value: '2', label: 'Restaurants · groupe Savoir Vivre' },
  { value: '100%', label: 'Vin naturel' },
  { value: 'Soir', label: 'Du lundi au samedi' },
]

export function StatStrip() {
  return (
    <section className="bg-terracotta py-12 sm:py-14">
      <div className="wrap">
        <div className="grid grid-cols-2 gap-y-9 sm:grid-cols-4 sm:divide-x sm:divide-nuit/15">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="px-4 text-center">
              <p className="font-abril text-[2.6rem] leading-none text-nuit sm:text-[3rem]">{s.value}</p>
              <p className="mt-3 font-dm text-[11px] font-medium uppercase tracking-[0.18em] text-nuit/65">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
