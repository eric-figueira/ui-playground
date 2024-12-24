import { cn } from "../lib/cn"

type PageHeaderProps = {
  children: React.ReactNode,
  className?: string
}

export function PageHeader({ children, className }: PageHeaderProps) {
  return (
    <header className="border-b border-zinc-100 w-full">
      <div className={cn("p-10 font-extrabold text-4xl", className)}>
        {children}
      </div>
    </header>
  )
}