import { Button, ButtonIcon } from "../components/design-systems/shadcnui/button";
import { Input } from "../components/design-systems/shadcnui/input";
import { Icons } from "../components/icons";

export function LoginPage() {
  return (
    <main className="w-fulll h-screen bg-slate-100 flex items-center justify-center">
      <div className="border border-zinc-300 shadow-md rounded-md p-6 w-full max-w-md bg-slate-50 space-y-6">
        <Icons.logo className="mx-auto size-12" />
        
        <div className="space-y-4">
          <h1 className="font-sans tracking-tight font-semibold text-2xl">Sign in now</h1>

          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input placeholder="Email" id="email" />
              </div>

              <Button className="w-full">Sign in</Button>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-full h-[1px] bg-zinc-300" />
              <span className="text-sm text-zinc-400 font-light">OR</span>
              <div className="w-full h-[1px] bg-zinc-300" />
            </div>

            <div className="space-y-1">
              <Button 
                variant="outline"
                className="text-md font-normal w-full justify-between border-zinc-300 text-zinc-600"
              >
                Sign in with GitHub
                <ButtonIcon icon={Icons.github} />
              </Button>

              <Button 
                variant="outline"
                className="text-md font-normal w-full justify-between border-zinc-300 text-zinc-600"
              >
                Sign in with X
                <ButtonIcon icon={Icons.x} />
              </Button>
            </div>

            <div className="flex gap-1 justify-center text-sm">
              <p className="text-zinc-700">Don't have an account?</p>
              <span className="text-zinc-800 underline underline-offset-4 cursor-pointer hover:text-zinc-950">Create one here.</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
