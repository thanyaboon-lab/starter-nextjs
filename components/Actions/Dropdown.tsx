'use client'

import { useFloating } from "@floating-ui/react";
import { useState } from "react";

export interface DropdownOptions<T> {
    value: T
    title: string
    isActive?: boolean
    icon?: React.ReactElement
}

interface DropdownProps<T> {
  children?: React.ReactNode;
  slotContent?: Function;
  slotItems?: Function;

  modelValue: T;
  options: DropdownOptions<T>[]
}

export function Dropdown<T>({ modelValue, options, slotContent, slotItems }: DropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  console.log('🚀 ~ isOpen:', isOpen)

  const { refs, floatingStyles } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  return (
    <>
    <div className="dropdown bg-primary">
      <div ref={refs.setReference} className="dropdown-content bg-primary" onClick={() => setIsOpen(!isOpen)}>
        {slotContent ? slotContent() : modelValue ? modelValue : 'Please Select'}
      </div>
        { 
            isOpen && (slotItems 
            ? slotItems() 
            : 
            <div ref={refs.setFloating} className="dropdown-items" style={floatingStyles}>
                { options.map((option, i) => <li key={i}>{option.title}</li>) }
            </div>)
        }
    </div>
    </>
  );
}
