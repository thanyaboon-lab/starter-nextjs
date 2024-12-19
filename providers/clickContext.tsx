import React, { createContext, useContext, ReactNode, Context } from "react";

interface ClickContextType<Args = any, Return = void> {
  handleClick?: (args: Args) => Return;
}

// Create the context
const ClickContext = createContext<ClickContextType | undefined>(undefined);

// Define provider props
interface ClickProviderProps<Args = any, Return = void> {
  children: ReactNode;
  handleClick?: (args: Args) => Return;
}

// Create the provider
export function ClickProvider<Args, Return>({ children, handleClick }: ClickProviderProps<Args, Return>) {
  return (
    <ClickContext.Provider value={{ handleClick }}>
      {children}
    </ClickContext.Provider>
  );
}

// Custom hook for accessing the context
export function useClick<Args = any, Return = void>(): ClickContextType<Args, Return> {
  const context = useContext(ClickContext as Context<ClickContextType<Args, Return> | undefined>);
  if (!context) {
    throw new Error("useClick must be used within a ClickProvider");
  }
  return context;
};
