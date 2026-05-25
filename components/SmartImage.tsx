'use client'

/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { Wine } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SmartImageProps {
  src: string
  alt: string
  className?: string
  eager?: boolean
}

/** <img> robuste : photo manquante → placeholder nuit « Photo à venir ». */
export function SmartImage({ src, alt, className, eager = false }: SmartImageProps) {
  const [error, setError] = useState(false)
  const file = src.split('/').pop() || src

  if (error) {
    return (
      <div
        className={cn(
          'flex h-full w-full flex-col items-center justify-center gap-2.5 bg-nuit-deep text-center',
          className
        )}
        aria-label={alt}
      >
        <Wine className="h-7 w-7 text-terracotta/70" />
        <span className="font-abril text-[15px] text-creme/70">Photo à venir</span>
        <span className="font-dm text-[10px] uppercase tracking-[0.2em] text-creme/30">{file}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setError(true)}
      className={cn('h-full w-full object-cover', className)}
    />
  )
}
