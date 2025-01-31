import { cn } from "@/utils/cn";
import { ChevronDown } from "lucide-react";
import * as React from "react"

interface AccordionProps extends React.HTMLAttributes<HTMLUListElement> {
  value?: number;
}

interface IAccordionContext {
  selected: number | null;
  setSelected: React.Dispatch<React.SetStateAction<number | null>>;
}

const AccordionContext = React.createContext<IAccordionContext | null>(null)

function AccordionRoot({
  children,
  ...props
}: AccordionProps) {
  const [selected, setSelected] = React.useState<number | null>(null)

  return (
    <ul {...props}>
      <AccordionContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordionContext.Provider>
    </ul>
  )
}

interface AccordionItemProps extends React.HTMLAttributes<HTMLLIElement> {
  value: number;
}

interface IAccordionItemContext {
  value: number | null;
  ref: React.RefObject<HTMLDivElement | null>;
}

const AccordionItemContext = React.createContext<IAccordionItemContext | null>(null) 

function AccordionItem({
  value,
  className,
  children,
  ...props
}: AccordionItemProps) {
  const ref = React.useRef<HTMLDivElement>(null)

  return (
    <li
      className={cn("border-b border-border", className)}
      {...props}
    >
      <AccordionItemContext.Provider value={{ value, ref }}>
        {children}
      </AccordionItemContext.Provider>
    </li>
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const rootContext = React.useContext(AccordionContext)
  const itemContext = React.useContext(AccordionItemContext)

  if (!rootContext || !itemContext) 
    return

  const { selected, setSelected } = rootContext
  const { value } = itemContext
  const open = selected === value

  function handleClick() {
    setSelected(open ? null : value)
  }

  return (
    <div
      className={cn("flex justify-between items-center py-4 cursor-pointer p1 text-text-primary font-medium", className)}
      onClick={handleClick}
      {...props}
    >
      {children}
      <ChevronDown className={cn("size-5 transition-transform text-icon-secondary", { "rotate-180": open })} />
    </div>
  )
}

function AccordionContent({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const rootContext = React.useContext(AccordionContext)
  const itemContext = React.useContext(AccordionItemContext)

  if (!rootContext || !itemContext) 
    return

  const { selected } = rootContext
  const { ref, value } = itemContext
  const open = selected === value

  return (
    <div
      className="overflow-y-hidden transition-all"
      style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      {...props}
    >
      <div 
        ref={ref}
        className={cn("p1 text-text-secondary pb-4 pt-1", className)}
      >
        {children}
      </div>
    </div>
  )
}

export {
  AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
}