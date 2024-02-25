import Link from "next/link"
import menuList from '@/json/menuSidebar.json'
// import '/NavigationBar.css'

interface MenuList {
  menuId: string;
  menuTitle: string;
  menuName: string;
  children?: MenuList[]
}

function RecursiveChildrenMenu({ menu }: { menu: MenuList }) {
  return (
    <ul className="menu-sidebar-group-item ms-3 ps-2">
      {menu.children?.map((menuChildren, menuChildrenIndex) => {
        return (
          <>
            <li key={menuChildrenIndex}>
              {menuChildren.menuName ? <Link href={`/${menuChildren.menuName}`} className="menu-item flex items-center">{menuChildren.menuTitle}</Link> : <h2 className="menu-item-title flex items-center">{menuChildren.menuTitle}</h2>}
              {menuChildren.children!.length > 0 ? <RecursiveChildrenMenu menu={menuChildren} /> : null}
            </li>
          </>
        )
      })}
    </ul>
  )
}

export default function Sidebar({ className }: { className: string }) {
  return (
    <div className={`${className} menu-sidebar scroll-smooth overflow-y-auto`}>
      <aside>
        <div className="flex items-center gap-2 px-6 sticky top-0 z-10 mb-[5px]">
          <Link href="/">
            <div className="flex items-center gap-2 min-h-12">
              <div className="text-lg md:text-2xl">My-UI</div>
            </div>
          </Link>
        </div>
        <ul className="px-4">
          {menuList.menu.map((menu) =>
            <li key={menu.menuId}>
              <details open>
                <summary className="list-none cursor-pointer menu-sidebar-title">{menu.menuTitle}</summary>
                <RecursiveChildrenMenu menu={menu} />
              </details>
            </li>
          )}
        </ul>
      </aside>
    </div>
  )
}
