import { Route, routes } from "../routes/sidebar" 
import { useLocation } from "react-router-dom"
import { Link } from "./link"
import { cn } from "../lib/cn"

interface SideNavItemProps {
  item: Route,
  pathname: string,
}

export function SideBar() {
  const { pathname } = useLocation()

  console.log(pathname)

  return (
    <aside className="border-r border-zinc-100 h-screen">
      <div className="border-b border-zinc-100 py-5 px-8">
        <span className="font-semibold">UI Playground</span>
      </div>

      <ul className="space-y-8 p-6">
        {routes.map((item) => (
          <li key={item.label} className="space-y-2">
            <SideNavItem 
              item={item} 
              pathname={pathname} 
            />

            {item.children && (
              <ul className="flex flex-col gap-1">
                {item.children.map((subitem) => (
                  <SideNavItem 
                    item={subitem} 
                    pathname={pathname} 
                    key={subitem.label} 
                  />
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  )
}

function SideNavItem({ item, pathname }: SideNavItemProps) {
  return (
    <>
      {item.href && !item.disabled ? (
        <Link 
          href={item.href} 
          className={cn(
            "text-md hover:bg-zinc-100 text-zinc-800 rounded-md py-2 pl-2 w-full",
            pathname.includes(item.href) && "bg-zinc-100 text-zinc-900 font-medium"
          )}
        >
          {item.label}
        </Link>
      ) : (
        <span className={cn(
          "text-md font-semibold py-1 pl-2 w-full",
          item.disabled && "font-normal text-zinc-400 cursor-not-allowed"
        )}>
          {item.label}
        </span>
      )}
    </>
  )
}
