import { MapPin, Phone, Instagram, Mail } from 'lucide-react'
import { Reveal } from '@/components/Reveal'

const horaires = [
  { jour: 'Lundi — Vendredi', h: 'Service du soir' },
  { jour: 'Samedi', h: 'Déjeuner & soir' },
  { jour: 'Dimanche', h: 'Fermé', closed: true },
]

export function Reservation() {
  return (
    <section id="reserver" className="bg-creme py-24 sm:py-32">
      <div className="wrap grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Horaires */}
        <div>
          <Reveal>
            <p className="eyebrow text-vin">← Horaires</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-abril italic leading-tight text-nuit" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.6rem)' }}>
              Quand venir.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <ul className="mt-9 divide-y divide-nuit/10">
              {horaires.map((j) => (
                <li key={j.jour} className="flex items-center justify-between py-4">
                  <span className="font-dm text-[15px] font-medium text-nuit">{j.jour}</span>
                  <span className={`font-dm text-[14px] ${j.closed ? 'italic text-terracotta' : 'text-nuit/60'}`}>
                    {j.h}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 font-dm text-[12px] font-light italic text-nuit/45">
              Horaires indicatifs — à confirmer au +33 9 67 49 96 26.
            </p>
          </Reveal>
        </div>

        {/* Contact + carte */}
        <div>
          <Reveal>
            <p className="eyebrow text-vin">← Nous trouver</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-abril italic leading-tight text-nuit" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.6rem)' }}>
              Paris 10e.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-9 space-y-4">
              <a href="https://maps.google.com/?q=Vivant+2+43+rue+des+Petites+Écuries+Paris" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-terracotta" />
                <span className="font-dm text-[15px] text-nuit transition-colors group-hover:text-terracotta">
                  43 rue des Petites Écuries<br />75010 Paris
                </span>
              </a>
              <a href="tel:+33967499626" className="group flex items-center gap-4">
                <Phone className="h-5 w-5 shrink-0 text-terracotta" />
                <span className="font-dm text-[15px] text-nuit transition-colors group-hover:text-terracotta">+33 9 67 49 96 26</span>
              </a>
              <a href="mailto:vivant@savoirvivre.paris" className="group flex items-center gap-4">
                <Mail className="h-5 w-5 shrink-0 text-terracotta" />
                <span className="font-dm text-[15px] text-nuit transition-colors group-hover:text-terracotta">vivant@savoirvivre.paris</span>
              </a>
              <a href="https://instagram.com/vivantdeux" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
                <Instagram className="h-5 w-5 shrink-0 text-terracotta" />
                <span className="font-dm text-[15px] text-nuit transition-colors group-hover:text-terracotta">@vivantdeux</span>
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 overflow-hidden rounded-xl border border-nuit/10">
              <iframe
                title="Vivant 2 sur Google Maps"
                src="https://www.google.com/maps?q=43+rue+des+Petites+%C3%89curies,+75010+Paris&output=embed"
                width="100%"
                height="240"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
