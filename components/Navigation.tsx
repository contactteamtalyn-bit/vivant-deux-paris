'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { DemoCTA } from '@/components/DemoModal'

const links = [
  { label: 'Le Son', href: '#son' },
  { label: 'La Cuisine', href: '#cuisine' },
  { label: 'Le Vin', href: '#vin' },
  { label: 'L’Endroit', href: '#lieu' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed left-0 right-0 z-[90] transition-all duration-500 ease-vivant',
        scrolled ? 'bg-nuit/85 backdrop-blur-md border-b border-creme/10' : 'bg-transparent'
      )}
      style={{ top: 'var(--banner-h)' }}
    >
      <div className="wrap flex h-16 items-center justify-between">
        <a href="#top" className="font-abril italic text-[22px] leading-none text-creme">
          Vivant<span className="text-terracotta"> 2</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link font-dm text-[13px] font-light uppercase tracking-[0.16em] text-creme/70 transition-colors hover:text-creme"
            >
              {l.label}
            </a>
          ))}
        </div>

        <DemoCTA variant="terracotta" size="sm" className="rounded-full">
          Réserver
        </DemoCTA>
      </div>
    </nav>
  )
}
