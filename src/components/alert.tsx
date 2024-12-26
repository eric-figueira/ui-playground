import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "../lib/cn";

const accentColors = {
  default: "rgb(189,189,189)",
  success: "rgb(89,199,113)",
  warning: "rgb(231,199,17)",
  error: "rgb(243,98,85)",
}

const alertVariants = tv({
  base: " inline-flex w-fit font-sans h-fit",
  variants: {
    variant: {
      default: "bg-[rgba(240,240,240,0.1)]",
      warning: "bg-[rgba(231,199,17,0.1)]",
      error: "bg-[rgba(243,98,85,0.1)]",
      success: "bg-[rgba(89,199,113,0.1)]",
    }
  },
  defaultVariants: {
    variant: "default"
  }
})

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ variant, children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        <div className={cn("min-h-full w-1", `bg-[${accentColors[variant || "default"]}]`)} />

        <div className="pl-4 pr-8 py-4 flex items-start gap-3 h-fit">
          {children}
        </div>
      </div>
    )
  }
)

export interface AlertIconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ElementType,
  variant: keyof typeof accentColors
}

const AlertIcon = React.forwardRef<HTMLDivElement, AlertIconProps>(
  ({ icon: Icon, variant, className, ...props }, ref) => {
    return (
      <Icon 
        ref={ref}
        className={cn(
          "w-full max-w-8 h-auto", 
          `text-[${accentColors[variant || "default"]}]`,
          className
        )}
        {...props}
      />
    )
  }
)

const AlertContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <h5
        ref={ref}
        className={cn("font-semibold text-lg text-zinc-950", className)}
        {...props}
      >
        {children}
      </h5>
    )
  }
)

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn("font-normal text-sm text-zinc-800 h-fit", className)}
        {...props}
      >
        {children}
      </p>
    )
  }
)

export { 
  Alert, 
  AlertContent,
  AlertIcon, 
  AlertTitle, 
  AlertDescription 
}