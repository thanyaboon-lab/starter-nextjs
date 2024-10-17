"use client";

import { ThemeContext } from "@/providers/theme";
import React, { useContext } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineTranslate, MdOutlineWbSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

interface NavbarProps {
  activeSidebar: boolean
  toggleSidebar: (value: boolean) => void;
}

export default function Navbar({ activeSidebar, toggleSidebar }: NavbarProps) {
  const themeContext = useContext(ThemeContext);

  return (
    <>
      <div className="flex items-center gap-3 px-6 w-full">
        <button
          className="lg:hidden p-2 rounded-btn border border-default hover:text-white hover:border-white"
          onClick={() => toggleSidebar(!activeSidebar)}>
          <GiHamburgerMenu width={25} height={25} />
        </button>
        <div
          className={`flex justify-between p-3 shadow-lg rounded-[8px] bg-default text-secondary min-h-16 w-full`}>
          <div className="flex items-center gap-2" role="button">
            <div className="rounded-[100%] hover:bg-hover p-2">
              <IoSearchOutline size={22} />
            </div>{" "}
            <span className="text-default">Search (Ctrl+/)</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-[100%] hover:bg-hover">
              <MdOutlineTranslate />
            </button>
            <button
              className="p-2 rounded-[100%] hover:bg-hover"
              onClick={() => themeContext.toggleTheme()}>
              {themeContext.theme === "dark" ? (
                <MdOutlineWbSunny />
              ) : (
                <IoMdMoon />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
