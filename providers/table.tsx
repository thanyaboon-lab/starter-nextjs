"use client";

import {
  ClassName,
  FieldDefinition,
  SortFields,
} from "@/interfaces/components/table";
import { Context, createContext, ReactNode, useContext, useMemo } from "react";

export interface TableProviderProps<
  IRow = Partial<Record<string, any>>,
  IColumn = FieldDefinition
> {
  // props
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

  // slots
  slotHeaderTop?: (field: FieldDefinition[]) => ReactNode;
  slotHeaderColumn?: {
    [K in keyof IColumn as `head-${string}`]?: (
      field: IColumn | Partial<Record<string, any>>,
      index: number
    ) => ReactNode;
  };
  slotBodyColumn?: {
    [K in keyof IRow as `cell-${K & string}`]?: (
      item: IRow | Partial<Record<string, any>>,
      index: number
    ) => ReactNode;
  };
  slotHeaderColumnCheck?: (
    isAllChecked: boolean | null,
    changeChecked: (index: number | null, newValue: boolean) => void
  ) => ReactNode;
  slotBodyColumnCheck?: (
    item: IRow | Partial<Record<string, any>>,
    index: number,
    changeChecked: (index: number | null, newValue: boolean) => void
  ) => ReactNode;
}

export interface TableInitialize<
  IRow = Partial<Record<string, any>>,
  IColumn = FieldDefinition
> extends TableProviderProps<IRow, IColumn>,
    TableUtils {}

export interface TableUtils {
  // utils table
  isAllChecked: boolean | null;
  disabledCheckAll: boolean;
  sortTable: (key: string) => SortFields;
  changeChecked: (index: number | null, newValue: boolean) => void;
  normalizeClassesField: (
    className: ClassName | undefined,
    value: any,
    key: string,
    item: any
  ) => string | string[];
}

// Create the context
const TableContext = createContext<TableInitialize | undefined>(undefined);

// Create the provider
export function TableProvider<
  IRow extends Partial<Record<string, any>>,
  IColumn extends FieldDefinition
>(props: TableInitialize<IRow, IColumn>) {
  // Provide Utils Table
  const isAllChecked = useMemo<boolean | null>(() => {
    if (
      props.items &&
      props.checked &&
      props.checked.size >= props.items.length &&
      props.items.length > 0
    )
      return true;
    else if (props.checked && props.checked.size > 0) return null;
    else return false;
  }, [props.checked, props.items]);

  const disabledCheckAll = useMemo(() => {
    return (
      props.items &&
      props.items.length > 0 &&
      props.items.every((item) => item.checkedDisable)
    );
  }, [props.items]);

  function sortTable(key: string): SortFields {
    const priorDirection =
      props.sortFields?.orderBy === key
        ? props.sortFields.orderDirection
        : null;
    return {
      orderBy: key,
      orderDirection:
        priorDirection === null || priorDirection === "DESC" ? "ASC" : "DESC",
    };
  }

  function changeChecked(index: number | null, newValue: boolean) {
    if (props.checked) {
      if (index !== null) {
        if (newValue) props.checked.add(index);
        else props.checked.delete(index);
      } else {
        if (newValue) {
          for (let i = 0; i < props.items.length; i++) {
            if (!props.items[i].checkedDisable) props.checked.add(i);
            else if (!props.items[i].checkedDisable) props.checked.add(i);
          }
        } else {
          props.checked.clear();
        }
      }
    }
  }

  function normalizeClassesField<IRow>(
    className: ClassName | undefined,
    value: any,
    key: string,
    item: IRow
  ) {
    return typeof className === "function"
      ? className(value, key, item)
      : className || "";
  }

  return (
    <TableContext.Provider
      value={{
        ...props,
        isAllChecked,
        disabledCheckAll,
        sortTable,
        changeChecked,
        normalizeClassesField,
      }}>
      {props.children}
    </TableContext.Provider>
  );
}

// Custom hook for accessing the context
export function useTable<IRow, IColumn>(): Omit<
  TableInitialize<IRow, IColumn>,
  "children"
> {
  const context = useContext(
    TableContext as Context<TableInitialize<IRow, IColumn> | undefined>
  );
  if (!context) {
    throw new Error("useTable must be used within a ClickProvider");
  }
  return context;
}
