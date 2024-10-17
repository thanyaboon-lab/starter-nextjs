import { useState } from "react";
import { CardCollapsibleProps } from "./interface";
import { IoIosArrowUp } from "react-icons/io";

export function CardCollapsible({
  title,
  format,
  slotBodyContent,
  icon,
  children,
}: CardCollapsibleProps) {
  const [isCollapse, setCollapse] = useState(true);

  const ButtonCollapse = () => {
    return (
      <button
        className="rounded-[100%] hover:bg-gray-600 p-2"
        onClick={() => setCollapse(!isCollapse)}>
        {icon ? (
          icon
        ) : (
          <IoIosArrowUp
            className={`transition-all ${isCollapse ? "rotate-180 " : ""}`}
          />
        )}
      </button>
    );
  };

  return (
    <div
      className={`rounded-[10px] bg-default ${
        format === "border" ? "border border-default" : "shadow-lg"
      }`}>
      <div className="flex items-center justify-between p-6">
        <label className="text-tertiary text-xl">{title}</label>
        <ButtonCollapse />
      </div>
      {slotBodyContent ? (
        <div
          className={`pb-6 px-6 ${
            isCollapse ? "border-b border-default" : ""
          }`}>
          {slotBodyContent()}
        </div>
      ) : null}
      <div
        className={`transition-[height] duration-300 overflow-hidden ${
          isCollapse ? "h-auto" : "h-0"
        }`}>
        {children && (
          <div className={`pb-6 px-6 ${slotBodyContent ? "pt-6" : ""}`}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
