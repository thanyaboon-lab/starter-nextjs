import Sidebar from "@/components/NavigationBar/Sidebar";

export default function DashBoardLayout ({children}: {children: React.ReactNode}) {

    return (
        <div className="dashboard grid grid-cols-[300px_minmax(900px,_1fr)]">
            <Sidebar className="" />
            {children}
        </div>
    )
}