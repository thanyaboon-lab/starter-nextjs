"use client";

import {
  FloatingFocusManager,
  FloatingOverlay,
  useClick,
  useDismiss,
  useFloating,
  useId,
  useInteractions,
  useRole,
  useTransitionStyles,
} from "@floating-ui/react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean
  btnTitle?: string
  title?: string;
  children?: React.ReactNode;
  onClose: () => void
  slotHeader?: Function;
  slotFooter?: Function;
}

export function Modal({ isOpen, onClose, btnTitle, title, children, slotHeader, slotFooter }: ModalProps) {

  const { refs, context } = useFloating();

  const { isMounted, styles } = useTransitionStyles(context, {
    duration: { open: 200, close: 100 },
    initial: { opacity: 0, transform: 'scale(0.8)' },
    open: { opacity: 1, transform: 'scale(1)' },
    close: { opacity: 0, transform: 'scale(0.8)' },
  });

  // console.log('🚀 ~ isMounted:', isMounted)

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  const labelId = useId();
  const descriptionId = useId();

  return (
    isOpen && (
      <FloatingOverlay
        lockScroll
        className="flex items-center justify-center z-20"
        style={{ background: "rgba(14, 15, 36, 0.68)" }}>
        <FloatingFocusManager context={context}>
          <div
            ref={refs.setFloating}
            aria-labelledby={labelId}
            aria-describedby={descriptionId}
            {...getFloatingProps()}
            className="bg-default rounded-[8px] min-h-[700px] min-w-[500px] p-12 relative">
            <button
              className="absolute top-5 right-5"
              onClick={onClose}>
              <IoClose />
            </button>
            {slotHeader ? slotHeader() : <h2>{title}</h2>}
            {children}
            {slotFooter ? slotFooter() : null}
          </div>
        </FloatingFocusManager>
      </FloatingOverlay>
    )
  );
}
