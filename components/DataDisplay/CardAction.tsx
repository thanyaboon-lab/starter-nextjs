"use client";

import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

interface CardActionProps {
  title?: string;
  slotHeaderRight?: Function;
  children?: React.ReactNode;
}

export function CardAction({
  title,
  slotHeaderRight,
  children,
}: CardActionProps) {
  return (
    <div className="rounded-[10px] bg-default shadow-lg shadow-slate-900">
      <div className="flex items-center justify-between p-6">
        <label className="text-secondary text-xl">{title}</label>
        {slotHeaderRight ? slotHeaderRight() : null}
      </div>
      <div className={`transition-[height] duration-300 ${children ? 'h-auto visible' : 'h-0'}`}>
        <div className={`pb-6 px-6`}>{children}</div>
      </div>
    </div>
  );
}

export function CardCollapsible({
  title,
  children,
}: CardActionProps) {
  const [isCollapse, setCollapse] = useState(true);

  const BUttonCollapse = () => {
    return (
      <button
        className="rounded-[100%] hover:bg-gray-600 p-2"
        onClick={() => setCollapse(!isCollapse)}>
        <IoIosArrowUp className={`transition-all ${isCollapse ? 'rotate-180 ' : ''}`} />
      </button>
    );
  };

  return (
    <CardAction title={title} slotHeaderRight={BUttonCollapse}>
      {isCollapse && children}
    </CardAction>
  );
}
