import Navbar from "@/components/NavigationBar/Navbar";
import Sidebar from "@/components/NavigationBar/Sidebar";
import { Suspense } from "react";

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard grid grid-cols-[300px_auto] h-full text-default leading-[1.8]">
      <Sidebar className="" />
      <div className="bg-page h-dvh">
        <div className="fixed top-0 h-3 w-full backdrop-opacity-10 backdrop-blur-md"></div>
        <header className="px-6 sticky top-0 mt-3">
          <Navbar />
        </header>
        {/* <Suspense> */}
            <main className="p-6">{children}</main>
        {/* </Suspense> */}
      </div>
    </div>
  );
}
