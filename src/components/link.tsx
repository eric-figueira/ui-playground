import React from "react"
import { cn } from "../lib/cn"

const Link = React.forwardRef<HTMLAnchorElement, React.ComponentProps<'a'>>(
  ({
    href = "/",
    rel = "noreferrer noopener",
    target = "_self",
    children,
    className,
    ...props
  }, ref) => {
    return (
      <a 
        href={href}
        ref={ref}
        rel={rel}
        target={target}
        {...props}
        className={cn(
          "no-underline text-inherit h-fit w-fit block",
          className
        )}
      >
        {children}
      </a>
    )
  }
)

export { Link }
