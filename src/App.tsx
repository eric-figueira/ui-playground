import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import { Home } from "./routes/home"
import { Layout } from "./components/layout"
import { CarbonButton } from "./routes/components/button/carbon"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { 
        path: 'components', 
        children: [
          { index: true, element: <Navigate to="/components/buttons/carbon" replace /> },
          {
            path: 'buttons',
            children: [
              { index: true, element: <Navigate to="/components/buttons/carbon" replace /> },
              {
                path: 'carbon',
                element: <CarbonButton />
              }
            ]
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
