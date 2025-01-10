import { ChevronDown } from "lucide-react";
import { createContext, Dispatch, HTMLAttributes, SetStateAction, useContext, useEffect, useRef, useState } from "react";

interface AccordionProps extends HTMLAttributes<HTMLUListElement> {
  value?: number,
  handleChange?: (v: number | null) => void
}

interface IAccordionContext {
  selected: number | null,
  setSelected: Dispatch<SetStateAction<number | null>>
}

const AccordionContext = createContext<IAccordionContext | undefined>(undefined)

function Accordion({
  value,
  children,
  handleChange,
  ...props
}: AccordionProps) {
  const v = value === undefined ? 0 : value
  const [selected, setSelected] = useState<number | null>(v)

  useEffect(() => {
    handleChange?.(selected)
  }, [selected, handleChange])

  return (
    <ul {...props}>
      <AccordionContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordionContext.Provider>
    </ul>
  )
}

interface AccordionItemProps extends HTMLAttributes<HTMLLIElement> {
  value: number,
  trigger: string
}

function AccordionItem({
  children,
  value,
  trigger,
  ...props
}: AccordionItemProps) {
  const context = useContext(AccordionContext)
  const ref = useRef<HTMLDivElement>(null)

  if (!context) return

  const { selected, setSelected } = context
  const open = selected === value

  return (
    <li
      className="border-b"
      {...props}
    >
      <header 
        role="button" 
        onClick={() => setSelected(open ? null : value)}
        className="flex justify-between items-center p-4 font-medium"
      >
        {trigger}
        <ChevronDown className={`size-5 transition-transform ${open ? "rotate-180" : ""}`} />
      </header>
      <div className="overflow-y-hidden transition-all" style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}>
        <div className="p-4 pt-2" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  )
}

export {
  Accordion,
  AccordionItem
}