import { useRef } from "react"

export function DataAttributes() {
  const divRef = useRef<HTMLDivElement>(null)

  function handleClick() {
    if (divRef.current) {
      const value = divRef.current.getAttribute("data-state")
      console.log(value)
      const newValue = value === 'open' ? 'closed' : 'open'
      divRef.current.setAttribute('data-state', newValue)
    }
  }

  return (
    <div>
      <div ref={divRef} data-state="closed" className="size-40 bg-slate-500 border border-slate-900 data-[state=closed]:hidden data-[state=open]:block" />
      <button onClick={handleClick}>Toggle</button>
    </div>
  )
}