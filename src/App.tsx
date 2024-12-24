import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import { Home } from "./routes/home"
import { Layout } from "./components/layout"
import { CarbonButton } from "./routes/components/button/carbon"
import { ButtonPage } from "./routes/components/button"
import { AlertPage } from "./routes/components/alert"
import { DialogPage } from "./routes/components/dialog"
import { SelectPage } from "./routes/components/select"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { 
        path: 'components', 
        children: [
          { index: true, element: <Navigate to="/components/button" replace /> },
          {
            path: 'button',
            element: <ButtonPage />,
            children: [
              {
                path: 'carbon',
                element: <CarbonButton />
              }
            ]
          },
          {
            path: 'alert',
            element: <AlertPage />,
          },
          {
            path: 'dialog',
            element: <DialogPage />,
          },
          {
            path: 'select',
            element: <SelectPage />,
          }
        ]
      },
      // { path: '/pages', element: <Pages /> },
    ]
  }
])

export function App() {
  return (
   <RouterProvider router={router} />
  )
}
