import { Input } from "../components/design-systems/geist/input/input";
import { Icons } from "../components/icons";

export function GeistInput() {
  return (
    <main className="w-fulll h-screen bg-zinc-100 flex justify-center items-center">
      <div className="flex flex-col justify-center gap-2">
        <Input 
          label="Website"
          prefix="https://"
          suffix=".com"
          placeholder="Default"
        />

        <Input 
          label="Website"
          suffix=".com"
          placeholder="Default"
        />

        <Input 
          label="Website"
          prefix="https://"
          placeholder="Default"
        />

        <Input 
          label="Website"
          placeholder="Default"
        />

        <Input 
          label="Website"
          iconLeft={Icons.website}
          suffix=".com"
          placeholder="Default"
        />
      </div>
    </main>
  )
}