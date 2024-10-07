"use client";

import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

interface CardProps {
  title?: string;
  slotHeaderRight?: Function;
  children?: React.ReactNode;
}

export function Card({
  title,
  slotHeaderRight,
  children,
}: CardProps) {
  return (
    <div className={`rounded-[10px] bg-default shadow-lg`}>
      <div className="flex items-center justify-between p-6">
        <label className="text-tertiary text-xl">{title}</label>
        {slotHeaderRight ? slotHeaderRight() : null}
      </div>
      <div className={`transition-[height] duration-300 ${children ? 'h-auto visible' : 'h-0 invisible'}`}>
        {children && <div className={`pb-6 px-6`}>{children}</div>}
      </div>
    </div>
  );
}

export function CardCollapsible({
  title,
  children,
}: CardProps) {
  const [isCollapse, setCollapse] = useState(true);

  const ButtonCollapse = () => {
    return (
      <button
        className="rounded-[100%] hover:bg-gray-600 p-2"
        onClick={() => setCollapse(!isCollapse)}>
        <IoIosArrowUp className={`transition-all ${isCollapse ? 'rotate-180 ' : ''}`} />
      </button>
    );
  };

  return (
    <Card title={title} slotHeaderRight={ButtonCollapse}>
      {isCollapse && children}
    </Card>
  );
}
