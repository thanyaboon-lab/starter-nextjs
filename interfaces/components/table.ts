export type ClassName =
  | string
  | string[]
  | ((value: any, key: string, item: any) => string);

export interface FieldDefinition {
  key: string;
  label: string;
  tdClass?: ClassName;
  thClass?: ClassName;
  sortable?: boolean;
  stickyColumn?: boolean;
  rowSpan?: number;
  colSpan?: number;
  required?: boolean;
  visible?: boolean;
  isEllipsis?: boolean;
  ellipsisLines?: number; // Number of lines to show before ellipsis
}

export type SortDirection = null | "ASC" | "DESC";

export interface SortFields<T extends string> {
  orderBy: T;
  orderDirection: SortDirection;
}

export interface TableNormal<T> {
  itemGroup?: T[];
  checkedDisable?: boolean;
}

export interface TableAccordion<T> extends TableNormal<T> {
  collapsed?: boolean
  isExpanded?: boolean
}