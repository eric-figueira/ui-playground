import { DataAttributes } from "./components/attributes/data";

export function App() {
  return (
    <main className="w-fulll h-screen bg-zinc-100 flex justify-center items-center">
      <div className="flex flex-col justify-center gap-2">
        <DataAttributes />
      </div>
    </main>
  )
}
