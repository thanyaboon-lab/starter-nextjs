"use client";

import { FieldDefinition, SortFields } from "@/interfaces/components/table";
import { Context, createContext, ReactNode, useContext } from "react";

export interface TableProviderProps<
  IRow = Partial<Record<string, any>>,
  IColumn = FieldDefinition
> {
  children?: ReactNode;
  fields: IColumn[];
  items: IRow[];
  checked?: Set<number | string>;
  sortFields?: SortFields;
  headCheckMode?: boolean;
  showEmpty?: boolean;
  showBorder?: boolean;
  stickyHeader?: boolean;
  stickyFooter?: boolean;
  tableResponsive?: boolean;
  canChecked?: boolean;
  canSelected?: boolean;
  onSelected?: () => IRow;

  slotBodyCheck?: Function;
}

// Create the context
const TableContext = createContext<TableProviderProps | undefined>(undefined);

// Create the provider
export function TableProvider<
  IRow extends Partial<Record<string, any>>,
  IColumn extends FieldDefinition
>(props: TableProviderProps<IRow, IColumn>) {
  return (
    <TableContext.Provider value={{ ...props }}>
      {props.children}
    </TableContext.Provider>
  );
}

// Custom hook for accessing the context
export function useTable<IRow, IColumn>(): TableProviderProps<IRow, IColumn> {
  const context = useContext(
    TableContext as Context<TableProviderProps<IRow, IColumn> | undefined>
  );
  console.log('🚀 ~ context:', context)
  if (!context) {
    throw new Error("useTable must be used within a ClickProvider");
  }
  return context;
}
