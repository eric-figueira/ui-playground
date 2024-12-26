import { CircleCheck, TriangleAlert, CircleX } from "lucide-react";
import { 
  Alert,
  AlertContent,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from "./components/alert";


export function App() {
  return (
    <main className="w-fulll h-screen bg-zinc-100 flex justify-center items-center">
      <div className="flex flex-col justify-center gap-2">
        <Alert variant="success">
          <AlertIcon icon={CircleCheck} variant="success" />
          <AlertContent>
            <AlertTitle>Awesome!</AlertTitle>
            <AlertDescription>You will soon receive a confirmation email about the purchase.</AlertDescription>
          </AlertContent>
        </Alert>

        <Alert variant="warning">
          <AlertIcon icon={TriangleAlert} variant="warning" />
          <AlertContent>
            <AlertTitle>Awesome!</AlertTitle>
            <AlertDescription>You will soon receive a confirmation email about the purchase.</AlertDescription>
          </AlertContent>
        </Alert>

        <Alert variant="error">
          <AlertIcon icon={CircleX} variant="error" />
          <AlertContent>
            <AlertTitle>Awesome!</AlertTitle>
            <AlertDescription>You will soon receive a confirmation email about the purchase.</AlertDescription>
          </AlertContent>
        </Alert>
      </div>
    </main>
  )
}
