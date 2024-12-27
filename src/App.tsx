import { Check, X, Calendar } from "lucide-react";
import { 
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./components/shadcnui/card";
import { 
  Button,
  ButtonIcon
} from "./components/shadcnui/button";

export function App() {
  return (
    <main className="w-fulll h-screen bg-zinc-100 flex justify-center items-center">
      <div className="flex flex-col justify-center gap-2">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle className="flex flex-row gap-2 items-center">
              <Calendar />
              Confirm your trip
            </CardTitle>
            <CardDescription>
              Select all the values below to confirm your trip.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-zinc-800 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam debitis totam accusamus eveniet voluptas eaque quisquam eum qui dolorum
            </p>
          </CardContent>
          <CardFooter className="justify-end gap-1">
            <Button variant="outline" size="medium">
              Cancel
            </Button>

            <Button variant="primary" size="medium">
              Confirm
              <ButtonIcon icon={Check} />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}
