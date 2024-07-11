import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineTranslate, MdOutlineWbSunny  } from "react-icons/md";

export default function Navbar () {
    return (
        <>
            <div className="flex justify-between p-3 shadow-lg shadow-slate-900 rounded-[8px] bg-default text-secondary min-h-16">
                <div className="flex items-center gap-2" role="button">
                    <div className="rounded-[100%] hover:bg-gray-600 p-2"><IoSearchOutline size={22} /></div> <span className="text-default">Search (Ctrl+/)</span>
                </div>
                <div className="flex items-center gap-2">
                    <button className="p-2 rounded-[100%] hover:bg-gray-600"><MdOutlineTranslate /></button>
                    <button className="p-2 rounded-[100%] hover:bg-gray-600"><MdOutlineWbSunny /></button>
                </div>
            </div>
        </>
    )
}