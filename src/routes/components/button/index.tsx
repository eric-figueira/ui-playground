import { PageHeader } from "../../../components/page-header"

export function ButtonPage() {
  return (
    <div className="space-y-6">
      <PageHeader>Button</PageHeader>

      <div className="px-10 py-5">
        <h3 className="font-normal text-md text-zinc-700 pl-2">Select a Design System</h3>
        <a href="/components">Components</a>
      </div>
    </div>
  )
}