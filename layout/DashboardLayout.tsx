"use client";

import Navbar from "@/components/NavigationBar/Navbar";
import Sidebar from "@/components/NavigationBar/Sidebar";
import { ThemeContext } from "@/providers/theme";
import { FloatingOverlay } from "@floating-ui/react";
import { Noto_Sans_Thai } from "next/font/google";
import { Suspense, useCallback, useContext, useState } from "react";

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
  const themeContext = useContext(ThemeContext);
  const [activeSidebar, setActiveSidebar] = useState(false);

  const toggleSidebar = useCallback((newValue: boolean) => {
    setActiveSidebar(newValue);
  }, []);

  return (
    <html
      className={`${notoSansFont.variable}`}
      data-theme={themeContext.theme}>
      <body className="font-noto-sans bg-page">
        {activeSidebar && (
          <FloatingOverlay
            lockScroll
            className="flex lg:hidden items-center justify-center z-20"
            style={{ background: "rgba(14, 15, 36, 0.68)" }}
            onClick={() => toggleSidebar(false)}
          />
        )}
        <div className="dashboard grid grid-cols-1 lg:grid-cols-[300px_auto] h-full text-default leading-[1.8]">
          <Sidebar
            className=""
            activeSidebar={activeSidebar}
            toggleSidebar={toggleSidebar}
          />
          <div className="h-dvh">
            <div className="fixed top-0 h-3 w-full bg-page backdrop-opacity-10 backdrop-blur-md"></div>
            <header className="px-6 sticky top-3">
              <Navbar
                activeSidebar={activeSidebar}
                toggleSidebar={toggleSidebar}
              />
            </header>
            <Suspense>
              <main className="p-6">{children}</main>
            </Suspense>
          </div>
        </div>
      </body>
    </html>
  );
}
