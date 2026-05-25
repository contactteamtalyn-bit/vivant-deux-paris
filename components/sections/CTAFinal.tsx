import { Reveal } from '@/components/Reveal'
import { DemoCTA } from '@/components/DemoModal'

export function CTAFinal() {
  return (
    <section
      className="relative flex min-h-[65vh] items-center overflow-hidden bg-nuit py-24"
      style={{ background: 'radial-gradient(70% 60% at 50% 50%, rgba(196,113,74,0.14) 0%, rgba(13,17,23,0) 72%)' }}
    >
      <div className="wrap relative text-center">
        <Reveal>
          <h2 className="font-abril italic leading-[0.95] text-creme" style={{ fontSize: 'clamp(4rem, 9vw, 8rem)' }}>
            Ce soir&nbsp;?
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 font-dm text-[18px] font-light text-creme/50">
            43 rue des Petites Écuries · Paris 10e
          </p>
        </Reveal>
        <Reveal delay={0.22}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <DemoCTA variant="terracotta" size="lg">
              Réserver une table
            </DemoCTA>
            <DemoCTA variant="ghost" size="lg" className="text-creme/40">
              +33 9 67 49 96 26
            </DemoCTA>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
