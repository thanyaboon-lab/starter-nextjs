import Link from "next/link"

export default function Sidebar({className}: {className: string}) {
  const menuList = [
    {
      menuId: 'CARD',
      menuTitle: 'Card',
      menuName: 'Card',
    },
    {
      menuId: 'DROPDOWN',
      menuTitle: 'Dropdown',
      menuName: 'Dropdown',
    },
    {
      menuId: 'INPUT',
      menuTitle: 'Input',
      menuName: 'Input',
    },
    {
      menuId: 'BUTTON',
      menuTitle: 'Button',
      menuName: 'Button',
    }
  ]
  
  return (
    <div className={`${className} sidebar scroll-smooth sticky overflow-y-auto px-4`}>
      <div className="flex items-center gap-2">
        <Link href="/">
          <div className="flex items-center gap-2 min-h-12">
            <div className="text-lg md:text-2xl">My-UI</div>
          </div>
        </Link>
      </div>
        <aside>
          <ul className="flex flex-col gap-2">
            {menuList.map((menu) => 
            <Link href={`/${menu.menuName}`} key={menu.menuId}>
              <li>{menu.menuTitle}</li>
            </Link>
            )}
          </ul>
        </aside>
    </div>
  )
}
