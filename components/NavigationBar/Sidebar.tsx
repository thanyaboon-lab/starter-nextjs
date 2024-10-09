"use client";

import Link from "next/link";
import menuList from "@/json/menuSidebar.json";
import { usePathname } from "next/navigation";
import { useContext, useEffect } from "react";
import { ThemeContext } from "@/providers/theme";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Menu } from "@/interfaces/base/menu";

// import '/NavigationBar.css'

interface SidebarProps {
  className: string;
  activeSidebar: boolean;
  toggleSidebar: (value: boolean) => void;
}

function RecursiveChildrenMenu({ menu }: { menu: Menu }) {
  const currentPath = usePathname();
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    autoScroll()
  }, [])

  const autoScroll = () => {
    const menuSideBarActiveElement = document.querySelector('.menu-sidebar .menu-item.active')
    if (menuSideBarActiveElement) {
      menuSideBarActiveElement.scrollIntoView({ block: 'center', behavior: 'auto' });
    }
  };

  return (
    <ul
      className={`menu-sidebar-group-item ms-3 ps-2 border-solid border-s-[1px] ${
        themeContext.theme === "dark"
          ? "border-s-[#444950]"
          : "border-s-[#e5e7eb]"
      }`}>
      {menu.children?.map((menuChildren) => {
        return (
          <li key={menuChildren.menuId} className={``}>
            {menuChildren.menuName ? (
              <Link
                href={`/${menuChildren.url}`}
                className={`menu-item flex items-center hover:bg-hover ${
                  currentPath === `/${menuChildren.url}`
                    ? "active !bg-primary text-white rounded-[8px]"
                    : ""
                }`}>
                {menuChildren.menuTitle}
              </Link>
            ) : (
              <h2
                className={`menu-item-title flex items-center ${
                  menuChildren.children!.length <= 0 ? "hover:bg-hover" : ""
                }`}>
                {menuChildren.menuTitle}
              </h2>
            )}
            {menuChildren.children!.length > 0 ? (
              <RecursiveChildrenMenu menu={menuChildren} />
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

export default function Sidebar({
  className,
  activeSidebar,
  toggleSidebar,
}: SidebarProps) {
  return (
    <div
      className={`${className} menu-sidebar relative lg:left-0 transition-all ${
        activeSidebar ? "left-0" : "left-[-300px]"
      }`}>
      <aside
        className={`flex flex-col fixed z-30 h-full w-[300px] bg-default shadow-lg`}>
        <div className="flex items-center gap-2 ps-6 pe-3 sticky top-0 z-10 mb-[5px]">
          <Link href="/" className="w-full">
            <div className="flex items-center gap-2 min-h-12">
              <div className="text-lg md:text-2xl">My-UI</div>
              <button
                className="block lg:hidden ms-auto"
                onClick={(e) => {
                  e.preventDefault(), e.stopPropagation(), toggleSidebar(false);
                }}>
                <IoMdCloseCircleOutline className="w-6 h-6" />
              </button>
            </div>
          </Link>
        </div>
        <ul className="px-4 overflow-y-auto slim-scrollbar">
          {menuList.menu.map((menu) => (
            <li key={menu.menuId}>
              <details open>
                <summary className="list-none cursor-pointer menu-sidebar-title">
                  {menu.menuTitle}
                </summary>
                <RecursiveChildrenMenu menu={menu} />
              </details>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
