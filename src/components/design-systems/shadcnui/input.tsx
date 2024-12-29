import React, { InputHTMLAttributes } from "react";
import { cn } from "../../../lib/cn";

const Input = React.forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn("h-10 bg-slate-50 rounded-md py-2 px-3 border border-slate-300 text-slate-900 font-normal text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 placeholder:text-slate-400 transition", className)}
        ref={ref}
        {...props}
      />
    )
  }
)

export { Input }
