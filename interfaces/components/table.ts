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

export interface SortFields {
  orderBy: string;
  orderDirection: SortDirection;
}

export type ItemGroupModel<T> = (T extends (infer U)[] ? U : T)

export interface TableNormalModel<T> {
  itemGroup?: T[];
  checkedDisable?: boolean;
}

export interface TableAccordionModel<T> extends TableNormalModel<T> {
  collapsed?: boolean
  isExpanded?: boolean
}