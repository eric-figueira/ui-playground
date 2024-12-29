import React, { ButtonHTMLAttributes } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "../../../lib/cn"

const buttonVariants = tv({
  base: "rounded-md font-medium flex justify-center items-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-zinc-600 transition disabled:opacity-80 disabled:cursor-not-allowed disabled:pointer-events-none",
  variants: {
    variant: {
      primary: "bg-slate-900 hover:bg-slate-700 text-white text-sm",
      outline: "border border-slate-200 bg-transparent hover:bg-slate-200 hover:border-slate-300",
      subtle: "bg-slate-100 hover:bg-slate-200",
      ghost: "bg-transparent hover:bg-slate-100",
      link: "bg-transparent underline-offset-4 hover:underline",
      danger: "bg-red-500 text-white hover:bg-red-600",
    },
    size: {
      large: "px-8 py-3",
      medium: "h-10 px-4 py-2",
      small: "px-3 py-1.5",
      icon: "h-10 w-10",
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  }
})

export interface ButtonIconProps {
  icon: React.ElementType
}

function ButtonIcon({ icon: Icon }: ButtonIconProps) {
  return (
    <Icon className="size-4 shrink-0" />
  )
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)

export { Button, ButtonIcon }
