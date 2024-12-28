import React from "react"

export interface InputIcon {
  icon: React.ElementType
}

export function InputIcon({ icon: Icon }: InputIcon) {
  return (
    <Icon className="size-4 pointer-events-none"/>
  )
}