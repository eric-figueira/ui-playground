import { Plus } from "lucide-react";
import { Button } from "./components/carbon/button";


export function App() {
  return (
    <main className="w-fulll h-screen bg-zinc-100 flex justify-center items-center">
      <div className="flex flex-col justify-center gap-2">
        <Button variant="primary" size="small" className="w-full">Button</Button>
        <div className="flex gap-2">
          <Button variant="primary" size="small" icon={Plus}>Button</Button>
          <Button variant="primary" size="small" icon={Plus} iconOnly />
        </div>
        <Button variant="primary" size="small" className="w-full" disabled>Button</Button>
      </div>
    </main>
  )
}
