import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div>
      <aside>Navbar</aside>
      <main>
        <Outlet />
      </main>
    </div>
  )
}