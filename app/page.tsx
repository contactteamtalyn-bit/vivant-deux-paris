import { Hero } from '@/components/sections/Hero'
import { StatStrip } from '@/components/sections/StatStrip'
import { LeSon } from '@/components/sections/LeSon'
import { LaCuisine } from '@/components/sections/LaCuisine'
import { LeVin } from '@/components/sections/LeVin'
import { GalerieAmbiance } from '@/components/sections/GalerieAmbiance'
import { LeGroupe } from '@/components/sections/LeGroupe'
import { Avis } from '@/components/sections/Avis'
import { Reservation } from '@/components/sections/Reservation'
import { CTAFinal } from '@/components/sections/CTAFinal'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <StatStrip />
      <LeSon />
      <LaCuisine />
      <LeVin />
      <GalerieAmbiance />
      <LeGroupe />
      <Avis />
      <Reservation />
      <CTAFinal />
      <Footer />
    </>
  )
}
