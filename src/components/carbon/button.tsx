import React from "react";
import { tv, VariantProps } from "tailwind-variants";
import { cn } from "../../lib/cn";

const buttonVariants = tv({
  base: "inline-flex justify-between gap-4 w-fit rounded-none font-ibm font-normal text-sm leading-[18px] focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#0f62fe] px-4 transition disabled:cursor-not-allowed",
  variants: {
    variant: {
      primary: "bg-[#0f62fe] hover:bg-[#0353e9] active:bg-[#002d9c] text-white disabled:bg-[#c6c6c6] disabled:text-[#8d8d8d]",
      secondary: "bg-[#393939] hover:bg-[#4c4c4c] active:bg-[#6f6f6f] text-white disabled:bg-[#c6c6c6] disabled:text-[#8d8d8d]",
      tertiary: "text-[#0f62fe] border border-[#0f62fe] hover:bg-[#0353e9] hover:text-white active:bg-[#002d9c] disabled:border-[#c6c6c6] disabled:text-[#c6c6c6] disabled:bg-transparent",
      ghost: "bg-transparent text-[#0f62fe] hover:bg-[rgba(141,141,141,0.12)] active:bg-[rgba(141,141,141,0.5)] disabled:bg-transparent disabled:text-[#c6c6c6]",
      dangerPrimary: "bg-[#da1e28] hover:bg-[#ba1b23] active:bg-[#750e13] text-white disabled:bg-[#c6c6c6] disabled:text-[#8d8d8d]",
      dangerTertiary: "bg-transparent text-[#da1e28] border border-[#da1e28] hover:bg-[#ba1b23] hover:text-white active:bg-[#750e13] active:text-white disabled:border-[#c6c6c6] disabled:text-[#c6c6c6] disabled:bg-transparent",
      dangerGhost: "text-[#da1e28] bg-transparent hover:bg-[#ba1b23] hover:text-white active:bg-[#750e13] active:text-white disabled:bg-transparent disabled:text-[#c6c6c6]",
    },
    size: {
      large: "h-12 py-4",
      medium: "h-10 py-3",
      small: "h-8 py-2",
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "large"
  }
})

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  iconOnly?: boolean
  icon?: React.ElementType
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ iconOnly = false, icon: Icon, children, className, variant, size, ...props }, ref) => {

    if (iconOnly && Icon) {
      const iconClasses = cn(
        size === "large" && "px-4",
        size === "medium" && "px-3",
        size === "small" && "px-2"
      )

      return (
        <button 
          className={cn(buttonVariants({ variant, size, className }), iconClasses)}
          ref={ref}
          {...props}
        >
          <Icon className="size-4" />
        </button>
      )
    }

    return (
      <button 
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
        {Icon && <Icon className="size-4" />}
      </button>
    )
})

export { Button }
