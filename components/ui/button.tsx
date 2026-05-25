import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-dm transition-all duration-300 ease-vivant focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        terracotta:
          'bg-terracotta text-nuit font-semibold hover:bg-terracotta-light hover:scale-[1.03] shadow-[0_18px_40px_-18px_rgba(196,113,74,0.8)]',
        cream:
          'bg-creme text-nuit font-semibold hover:scale-[1.03]',
        outline:
          'border border-creme/30 text-creme font-medium hover:border-terracotta hover:text-terracotta bg-transparent',
        ghost:
          'text-creme/55 font-light hover:text-creme bg-transparent',
        darkline:
          'border border-nuit/25 text-nuit font-medium hover:border-nuit bg-transparent',
      },
      size: {
        default: 'h-12 px-7 text-[14px] tracking-wide',
        lg: 'h-14 px-9 text-[15px] tracking-wide',
        sm: 'h-10 px-5 text-[13px]',
      },
    },
    defaultVariants: { variant: 'terracotta', size: 'default' },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
