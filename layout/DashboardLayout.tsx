import Sidebar from "@/components/NavigationBar/Sidebar";
import { Suspense } from "react";

export default function DashBoardLayout ({children}: {children: React.ReactNode}) {

    return (
        <div className="dashboard grid grid-cols-[300px_auto]">
            <Sidebar className="" />
            <Suspense>
                {children}
            </Suspense>
        </div>
    )
}