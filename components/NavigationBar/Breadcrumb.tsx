import { Menu } from "@/interfaces/base/menu";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";

interface BreadcrumbsProps {
  menuList: Menu[];
}

export function Breadcrumbs({ menuList }: BreadcrumbsProps) {
  return (
    <nav className="breadCrumbsContainer mb-3">
      <ul className="breadcrumbs flex items-center">
        {menuList.map((menu, menuIndex) => (
          <li className="breadcrumbs-item flex items-center" key={menu.menuId}>
            {menuList.length - 1 === menuIndex ? (
              <span className="px-2 py-1 text-primary text-[14px]">{menu.menuTitle}</span>
            ) : (
              <Link href={`/${menu.url}`} className="px-2 py-1 hover:text-primary">
                {menu.menuId === "HOME" ? (
                  <AiOutlineHome className="w-5 h-5 relative top-[-1px]" />
                ) : (
                  <span className="text-[12px]">{menu.menuTitle}</span>
                )}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
