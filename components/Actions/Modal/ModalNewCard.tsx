"use client";

import { useState } from "react";
import { Modal } from "./Modal";
import React from "react";

export function ModalNewCard() {
  const [isOpen, setIsOpen] = useState(false);

  const header = () => {
    return (
      <div className="text-center mb-3">
        <h2 className="text-2xl mb-3 text-secondary">Add New Card</h2>
        <span className="text-sm">Add card for future billing</span>
      </div>
    );
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Dialog</button>
      { (
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          slotHeader={header}>
          a
        </Modal>
      )}
    </>
  );
}
