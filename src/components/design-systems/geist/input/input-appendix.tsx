import React from "react";
import { cn } from "../../../../lib/cn";

export interface InputAppendix extends React.PropsWithChildren {
  isRight?: boolean
}

export function InputAppendix({ children, isRight = false }: InputAppendix) {
  const base = "w-fit min-h-full flex justify-center items-center py-1 px-3 bg-gray-100 font-normal tracking-tight text-sm text-zinc-500 border border-zinc-300"
  const custom = isRight ? "rounded-tr-md rounded-br-md border-l-0" : "rounded-tl-md rounded-bl-md border-r-0"

  return (
    <span className={cn(base, custom)}>
      {children}
    </span>
  )
}