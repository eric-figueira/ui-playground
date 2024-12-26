import { Calendar, Plus } from "lucide-react";
import { Button, ButtonIcon } from "./components/shadcnui/button";

export function App() {
  return (
    <main className="w-fulll h-screen bg-zinc-100 flex justify-center items-center">
      <div className="flex flex-col justify-center gap-2">
        <Button variant="outline" size="icon">
          <ButtonIcon icon={Plus} />
        </Button>

        <Button variant="primary" size="medium">
          <ButtonIcon icon={Calendar} />
          With Icon
        </Button>

        <Button variant="outline" size="medium">
          <ButtonIcon icon={Calendar} />
          Two icons
          <ButtonIcon icon={Plus} />
        </Button>
      </div>
    </main>
  )
}
