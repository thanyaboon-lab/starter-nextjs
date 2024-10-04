"use client";

import Link from "next/link";
import menuList from "@/json/menuSidebar.json";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { ThemeContext } from "@/providers/theme";
// import '/NavigationBar.css'

interface MenuList {
  menuId: string;
  menuTitle: string;
  menuName: string;
  children?: MenuList[];
}

function RecursiveChildrenMenu({ menu }: { menu: MenuList }) {
  const currentPath = usePathname();
  const themeContext = useContext(ThemeContext);

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
                href={`/${menuChildren.menuName}`}
                className={`menu-item flex items-center ${
                  currentPath.includes(menuChildren.menuName) &&
                  menuChildren.children!.length <= 0
                    ? "!bg-primary text-white rounded-[8px]"
                    : ""
                } ${
                  menuChildren.children!.length <= 0 ? "hover:bg-hover" : ""
                }`}>
                {menuChildren.menuTitle}
              </Link>
            ) : (
              <h2
                className={`menu-item-title flex items-center  ${
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

export default function Sidebar({ className }: { className: string }) {
  const themeContext = useContext(ThemeContext);
  return (
    <div className={`${className} menu-sidebar`}>
      <aside
        className={`flex flex-col fixed z-10 h-full w-[300px] bg-default shadow-lg ${
          themeContext.theme === "dark" ? "shadow-slate-900" : ""
        }`}>
        <div className="flex items-center gap-2 px-6 sticky top-0 z-10 mb-[5px]">
          <Link href="/">
            <div className="flex items-center gap-2 min-h-12">
              <div className="text-lg md:text-2xl">My-UI</div>
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
