"use client";

import Navbar from "@/components/NavigationBar/Navbar";
import Sidebar from "@/components/NavigationBar/Sidebar";
import { ThemeContext } from "@/providers/theme";
import { FloatingOverlay } from "@floating-ui/react";
import { Noto_Sans_Thai } from "next/font/google";
import { usePathname } from "next/navigation";
import { Suspense, useCallback, useContext, useMemo, useState } from "react";
import menuList from "@/json/menuSidebar.json";
import { Menu } from "@/interfaces/base/menu";
import { Breadcrumbs } from "@/components/NavigationBar/Breadcrumb";

const notoSansFont = Noto_Sans_Thai({
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-notoSans",
  fallback: ["Helvetica", "sans-serif"],
  subsets: ["latin"],
});

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentPath = usePathname();
  const { theme } = useContext(ThemeContext);
  const [activeSidebar, setActiveSidebar] = useState(false);

  const toggleSidebar = useCallback((newValue: boolean) => {
    setActiveSidebar(newValue);
  }, []);

  const getCurrentlyMenuList = useMemo(() => {
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
      } else {
        menuItems = [...menuItems, menuChildrenItem];
      }
    }
    return menuItems;
  }, [currentPath]);

  return (
    <html
      className={`${notoSansFont.variable}`}
      data-theme={theme}>
      <body className="font-noto-sans bg-page">
        {activeSidebar && (
          <FloatingOverlay
            lockScroll
            className="flex lg:hidden items-center justify-center z-20"
            style={{ background: "rgba(14, 15, 36, 0.68)" }}
            onClick={() => toggleSidebar(false)}
          />
        )}
        <div className="dashboard grid grid-cols-1 lg:grid-cols-[300px_calc(100dvw-300px)] overscroll-contain h-lvh text-default leading-[1.8]">
          <Sidebar
            activeSidebar={activeSidebar}
            toggleSidebar={toggleSidebar}
          />
          <div className="flex flex-col overscroll-contain">
            {/* <div className="fixed top-0 z-10 h-3 w-full bg-page backdrop-opacity-10 backdrop-blur-md"></div> */}
            <header className="sticky top-0 z-10 pt-4">
              <Navbar
                activeSidebar={activeSidebar}
                toggleSidebar={toggleSidebar}
              />
            </header>
            <Suspense>
              <main>
                <div className="p-6">
                  <Breadcrumbs menuList={getCurrentlyMenuList} />
                  {children}
                </div>
              </main>
            </Suspense>
          </div>
        </div>
      </body>
    </html>
  );
}
