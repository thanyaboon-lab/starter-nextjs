"use client";

import {
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { MouseEvent, KeyboardEvent, useRef, useState, useEffect } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

export interface DropdownOptions<T> {
  value: T;
  title: string;
  isActive?: boolean;
  icon?: React.ReactElement;
}

interface DropdownProps<T> {
  children?: React.ReactNode;
  slotContent?: Function;
  slotItems?: Function;

  label?: string;
  modelValue: T;
  options: DropdownOptions<T>[];
  disabled?: boolean;

  onChange: (value: T | null) => void;
}

export function Dropdown<T>({
  label,
  modelValue,
  options,
  onChange,
  disabled,
  slotContent,
  slotItems,
}: DropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const { refs, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  const click = useClick(context);
  const role = useRole(context);
  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    role,
    dismiss,
  ]);

  useEffect(() => autoScrollOnOpen(), [isOpen])

  const handleSelect = (option: DropdownOptions<T>) => {
    if (modelValue === option.value) {
      onChange(null);
    } else {
      onChange(option.value);
    }
    toggleDropdown();
  };

  const clearSelection = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    onChange(null);
    toggleDropdown();
  };

  const handleSelectFromKeyboard = () => {
    const value =
      options && options.length > 0 ? options[selectedIndex].value : null;
    onChange(value);
    toggleDropdown()
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (isOpen) {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prevIndex) => {
            const newIndex = prevIndex < options.length - 1 ? prevIndex + 1 : prevIndex
            scrollToOption(newIndex);
            return newIndex
          });
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prevIndex) => {
            const newIndex = prevIndex > 0 ? prevIndex - 1 : prevIndex
            scrollToOption(newIndex);
            return newIndex
          });
          break;
        case "Enter":
          e.preventDefault();
          if (selectedIndex >= 0 && selectedIndex < options.length) {
            handleSelectFromKeyboard();
          }
          break;
        case "Escape":
          e.preventDefault();
          toggleDropdown();
          setSelectedIndex(-1);
          break;
        default:
          break;
      }
    } else if (e.key === "Enter") {
      toggleDropdown();
    }
  };

  const autoScrollOnOpen = () => {
    if (modelValue) {
      const newIndex = options.findIndex(item => item.value === modelValue);
      setSelectedIndex(newIndex)
      scrollToOption(newIndex)
    } else {
      setSelectedIndex(-1)
    }
  }

  const scrollToOption = (index: number) => {
    if (refs && refs.floating && refs.floating.current) {
      const option = refs.floating.current.children[index] as HTMLElement;
      if (option) {
        option.scrollIntoView({ block: 'center', behavior: 'auto' });
      }
    }
  };

  return (
    <>
      <div className="">
        <div
          ref={refs.setReference}
          {...getReferenceProps()}
          role={disabled ? "" : "button"}
          className={`dropdown-content flex items-center justify-between relative p-[10px] border rounded-btn min-h-10 max-h-10 outline-none ${
            isOpen && "border-primary"
          }`}
          onClick={() => (disabled ? undefined : toggleDropdown())}
          onKeyDown={handleKeyDown}
          tabIndex={0}>
          {label && (
            <div
              className={`absolute bg-[#2B2C40] p-1 dropdown-content-focus:text-primary ${
                isOpen && "text-primary"
              } ${isOpen || modelValue ? "top-[-13px] text-[10px]" : "top-1"}`}>
              {label}
            </div>
          )}
          {slotContent ? slotContent() : modelValue || ""}
          {modelValue && !disabled && (
            <button onClick={clearSelection}>
              <IoCloseCircleOutline className="text-lg" />
            </button>
          )}
        </div>
        {isOpen &&
          (slotItems ? (
            slotItems()
          ) : (
            <div
              ref={refs.setFloating}
              {...getFloatingProps()}
              role="listbox"
              className="dropdown-items slim-scrollbar mt-1 shadow shadow-slate-950 bg-[#2B2C40] rounded-btn p-2 max-h-80 overflow-auto">
              {options.map((option, index) => (
                <div
                  key={index}
                  role="option"
                  aria-selected={selectedIndex === index}
                  className={`p-2 hover:bg-primary rounded-btn [&:not(:last-child)]:mb-2 ${
                    option.value === modelValue ? "bg-primary" : ""
                  } ${selectedIndex === index && "bg-[#0D9AF5]"}`}
                  onClick={() => handleSelect(option)}>
                  {option.title}
                </div>
              ))}
            </div>
          ))}
      </div>
    </>
  );
}
