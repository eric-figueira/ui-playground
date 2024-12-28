import React from "react";
import { InputAppendix } from "./input-appendix";
import { cn } from "../../../../lib/cn";
import { InputIcon } from "./input-icon";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  prefix?: string
  suffix?: string
  iconRight?: React.ElementType
  iconLeft?: React.ElementType
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    label,
    prefix,
    suffix,
    iconLeft,
    iconRight,
    type = "text",
    className,
    ...props
   }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <span className="font-medium text-sm tracking-tight text-zinc-900">{label}</span>
        )}
        <div className="inline-flex h-fit rounded-md focus-within:ring-2 focus-within:ring-offset-2 focus-within:outline-none focus-within:ring-zinc-300 transition w-fit">
          {prefix && <InputAppendix>{prefix}</InputAppendix>}
          {iconLeft && <InputIcon icon={iconLeft} />}

          <input 
            type={type}
            ref={ref}
            className={cn(
              "py-2 px-3 border border-zinc-300 text-sm text-zinc-800 focus:outline-none",
              !prefix && "rounded-tl-md rounded-bl-md",
              !suffix && "rounded-tr-md rounded-br-md",
              className
            )}
            {...props}
          />

          {iconRight && <InputIcon icon={iconRight} />}
          {suffix && <InputAppendix isRight>{suffix}</InputAppendix>}
        </div>
      </div>
    )
  }
)

export { Input }
