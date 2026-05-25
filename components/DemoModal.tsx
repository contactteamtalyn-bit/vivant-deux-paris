'use client'

import * as React from 'react'
import { Phone, Instagram, CalendarCheck } from 'lucide-react'
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

type Ctx = { open: () => void }
const DemoModalContext = React.createContext<Ctx>({ open: () => {} })
export const useDemoModal = () => React.useContext(DemoModalContext)

export function DemoModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false)
  const open = React.useCallback(() => setIsOpen(true), [])

  return (
    <DemoModalContext.Provider value={{ open }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <p className="eyebrow text-terracotta">Maquette de démonstration</p>
          <DialogTitle className="mt-3 text-[2rem] leading-tight">Bientôt, ici&nbsp;?</DialogTitle>
          <DialogDescription className="mt-4 text-[15px] leading-relaxed">
            Cette page est une maquette réalisée par Maison Talyn — les boutons sont
            désactivés le temps de la démo. Pour une vraie table chez Vivant 2&nbsp;:
          </DialogDescription>

          <div className="mt-6 space-y-3">
            <a href="tel:+33967499626" className="flex items-center gap-3 rounded-xl border border-creme/12 bg-creme/[0.04] px-5 py-3.5 transition-colors hover:border-terracotta">
              <Phone className="h-4 w-4 text-terracotta" />
              <span className="font-dm text-[15px] font-medium text-creme">+33 9 67 49 96 26</span>
            </a>
            <a href="https://instagram.com/vivantdeux" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-creme/12 bg-creme/[0.04] px-5 py-3.5 transition-colors hover:border-terracotta">
              <Instagram className="h-4 w-4 text-terracotta" />
              <span className="font-dm text-[15px] font-medium text-creme">@vivantdeux</span>
            </a>
            <a href="mailto:vivant@savoirvivre.paris" className="flex items-center gap-3 rounded-xl border border-creme/12 bg-creme/[0.04] px-5 py-3.5 transition-colors hover:border-terracotta">
              <CalendarCheck className="h-4 w-4 text-terracotta" />
              <span className="font-dm text-[15px] font-medium text-creme">vivant@savoirvivre.paris</span>
            </a>
          </div>

          <p className="mt-7 border-t border-creme/10 pt-5 font-dm text-[14px] italic leading-relaxed text-creme/55">
            « C&apos;est une maquette provisoire — tout est 100% modifiable selon vos goûts
            (couleurs, photos, sections, ton). On part de votre univers, pas du nôtre. »
          </p>
          <p className="mt-3 text-center font-dm text-[11px] uppercase tracking-[0.22em] text-creme/35">
            Maison Talyn · @maison.talyn
          </p>
        </DialogContent>
      </Dialog>
    </DemoModalContext.Provider>
  )
}

export function DemoCTA({
  children,
  variant,
  size,
  className,
}: {
  children: React.ReactNode
  variant?: React.ComponentProps<typeof Button>['variant']
  size?: React.ComponentProps<typeof Button>['size']
  className?: string
}) {
  const { open } = useDemoModal()
  return (
    <Button type="button" onClick={open} variant={variant} size={size} className={className}>
      {children}
    </Button>
  )
}
