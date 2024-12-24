import { Outlet } from "react-router-dom";
import { SideBar } from "./sidebar";

export function Layout() {
  return (
    <div className="grid grid-cols-[15rem_1fr]">
      <SideBar />
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  )
}