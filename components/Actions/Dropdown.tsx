'use client'

import { useClick, useDismiss, useFloating, useInteractions, useRole } from "@floating-ui/react";
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

  const { refs, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  const click = useClick(context);
  const role = useRole(context);
  const dismiss = useDismiss(context);

  const {getReferenceProps, getFloatingProps} = useInteractions([
    click,
    role,
    dismiss
  ]);

  return (
    <>
    <div className="dropdown bg-primary">
      <div ref={refs.setReference} {...getReferenceProps()} className="dropdown-content bg-primary" onClick={() => setIsOpen(!isOpen)}>
        {slotContent ? slotContent() : modelValue ? modelValue : 'Please Select'}
      </div>
        { 
            isOpen && (slotItems 
            ? slotItems() 
            : 
            <div ref={refs.setFloating} {...getFloatingProps()} className="dropdown-items">
                { options.map((option, i) => <li key={i}>{option.title}</li>) }
            </div>)
        }
    </div>
    </>
  );
}
