import { Accordion, AccordionItem } from "./components/accordion";

export function App() {
  return (
    <main className="w-fulll h-screen bg-zinc-100 flex justify-center items-center">
      <div className="flex flex-col justify-center gap-2">
        <Accordion className="max-w-lg">
          <AccordionItem value={1} trigger="Accordion Item 1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus maxime est deserunt. Maxime eaque, qui facere error labore facilis explicabo.
          </AccordionItem>

          <AccordionItem value={2} trigger="Accordion Item 2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus maxime est deserunt. Maxime eaque, qui facere error labore facilis explicabo.
          </AccordionItem>

          <AccordionItem value={3} trigger="Accordion Item 3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus maxime est deserunt. Maxime eaque, qui facere error labore facilis explicabo.
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  )
}
