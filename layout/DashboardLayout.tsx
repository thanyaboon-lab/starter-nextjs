"use client";

import Navbar from "@/components/NavigationBar/Navbar";
import Sidebar from "@/components/NavigationBar/Sidebar";
import { ThemeContext } from "@/providers/theme";
import { Noto_Sans_Thai } from "next/font/google";
import { Suspense, useContext } from "react";

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

  return (
    <html
      className={`${notoSansFont.variable}`}
      data-theme={themeContext.theme}>
      <body className="font-noto-sans bg-page">
        <div className="dashboard grid grid-cols-[300px_auto] h-full text-default leading-[1.8]">
          <Sidebar className="" />
          <div className="h-dvh">
            <div className="fixed top-0 h-3 w-full backdrop-opacity-10 backdrop-blur-md"></div>
            <header className="px-6 sticky top-0 mt-3">
              <Navbar />
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
