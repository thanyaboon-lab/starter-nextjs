"use client";

import { CardBase } from "@/components/DataDisplay/Card";
import { Breadcrumbs } from "@/components/NavigationBar/Breadcrumb";
import { Menu } from "@/interfaces/base/menu";
import menuList from "@/json/menuSidebar.json";
import { usePathname } from "next/navigation";

export default function Page() {
  const currentPath = usePathname();
  console.log("🚀 ~ currentPath:", currentPath);

  let menuItems: Menu[] = [
    {
      menuId: "HOME",
      menuTitle: "Home",
      menuName: "home",
      url: "/",
      children: [],
    },
  ];

  const menuChildrenList = menuList.menu.flatMap((m) => m.children);
  const menuChildrenItem = menuChildrenList.find((m) =>
    currentPath.includes(m.url)
  );
  if (menuChildrenItem) {
    const childrenItem = menuChildrenItem.children.find(
      (m) => `/${m.url}` === currentPath
    );
    if (childrenItem) {
      menuItems = [...menuItems, menuChildrenItem, childrenItem];
    }
  }

  return (
    <CardBase title="Breadcrumbs">
      <Breadcrumbs menuList={menuItems}></Breadcrumbs>
    </CardBase>
  );
}
