import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Slot } from "radix-ui"

const buttonVariants = cva(
  "group/button relative inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-transparent bg-clip-padding font-semibold whitespace-nowrap transition-[background-color,box-shadow,transform,color,border-color] duration-200 outline-none select-none focus-visible:ring-4 focus-visible:ring-ring/30 active:not-aria-[haspopup]:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-[1.15em]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[0_1px_0_rgb(255_255_255/0.18)_inset,0_6px_16px_-6px_rgb(79_70_229/0.6)] hover:bg-[color-mix(in_oklab,var(--primary),black_10%)] dark:hover:bg-[color-mix(in_oklab,var(--primary),white_10%)]",
        brand:
          "bg-brand-gradient text-white shadow-[0_1px_0_rgb(255_255_255/0.22)_inset,0_10px_24px_-10px_rgb(79_70_229/0.8)] hover:brightness-[1.06] hover:shadow-[0_1px_0_rgb(255_255_255/0.22)_inset,0_14px_30px_-10px_rgb(16_185_129/0.7)]",
        gold:
          "bg-[linear-gradient(135deg,#f8cb6b,#f5b83d_45%,#e79d1c)] text-ink shadow-[0_1px_0_rgb(255_255_255/0.5)_inset,0_10px_24px_-10px_rgb(245_184_61/0.9)] hover:brightness-105",
        outline:
          "border-border bg-card text-foreground shadow-soft hover:border-[color-mix(in_oklab,var(--primary),var(--border)_70%)] hover:bg-accent/60 aria-expanded:bg-accent",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklab,var(--secondary),var(--foreground)_6%)]",
        ghost:
          "text-foreground hover:bg-muted aria-expanded:bg-muted dark:hover:bg-muted",
        destructive:
          "bg-destructive text-white hover:bg-[color-mix(in_oklab,var(--destructive),black_12%)] dark:text-ink",
        link: "h-auto rounded-md px-0 text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-5 text-[0.95rem]",
        sm: "h-10 px-4 text-sm",
        lg: "h-14 px-7 text-base",
        icon: "size-12",
        "icon-sm": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
