import { Button } from "../components/design-systems/shadcnui/button";
import { Input } from "../components/design-systems/shadcnui/input";

export function ExpensesLoginPage() {
  return (
    <main className="w-fulll h-screen bg-slate-900">
      <div className="w-1/2 h-screen bg-slate-950 float-right flex items-center justify-center">
        <div className="flex flex-col items-center gap-16">
          <div className="text-center space-y-4">
            <h1 className="font-sans font-bold text-3xl text-slate-50 leading-none">Expenses Dashboard</h1>
            <p className="font-medium text-slate-400 text-xl leading-none">Acesse digitando a chave no campo abaixo.</p>
          </div>

          <div className="flex flex-col items-center gap-4 w-full px-4">
            <div className="inline-flex gap-2 w-full">
              <Input placeholder="Digite a chave" className="w-full"/>
              <Button>Acessar</Button>
            </div>
            <p className="text-sm text-slate-400 font-medium">Built by eric-figueira</p>
          </div>
        </div>
      </div>
    </main>
  )
}
