import { MoveUpRight } from "lucide-react"
import { Link } from "../components/link"
import { PageHeader } from "../components/page-header"

export function Home() {
  return (
    <div className="space-y-6">
      <PageHeader className="flex flex-col gap-3">
        <h1>UI Playground</h1>
        <h2 className="text-lg text-gray-500 font-normal max-w-xl">Here you can create your components, test Design Systems, recreate pages and let you imagination fly.</h2>
      </PageHeader>

      <div className="px-10 py-5 space-y-4">
        <h3 className="font-normal text-md text-zinc-700 pl-2">Check out</h3>

        <div className="w-fit">
          <Link href="/components" className="w-full">
            <div className="flex items-center gap-1 hover:bg-zinc-100 rounded-md py-2 pl-2 pr-4">
              <span className="text-md font-medium text-zinc-900">Components</span>
              <MoveUpRight className="size-4" />
            </div>
          </Link>

          <Link href="/pages" className="w-full">
            <div className="flex items-center gap-1 hover:bg-zinc-100 rounded-md py-2 pl-2 pr-4">
              <span className="text-md font-medium text-zinc-900">Pages</span>
              <MoveUpRight className="size-4" />
            </div>
          </Link>
        </div>
        
      </div>
    </div>
  )
}