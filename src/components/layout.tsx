import { Outlet } from "react-router-dom";
import { SideBar } from "./sidebar";

export function Layout() {
  return (
    <div className="flex">
      <SideBar />
      <main className="p-10">
        <Outlet />
      </main>
    </div>
  )
}