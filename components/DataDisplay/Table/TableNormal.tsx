"use client"
import {
  FieldDefinition,
  ItemGroupModel,
  SortFields,
  TableNormalModel,
} from "@/interfaces/components/table";
import { Table } from "./TableGroup/Table";
import { TableProvider, TableProviderProps } from "@/providers/table";
import { ReactNode } from "react";
import { TableGroupTBody } from "./TableGroup/TableGroupTBody";
import { TableGroupTHead } from "./TableGroup/TableGroupTHead";
// import { ClickProvider } from "@/providers/clickContext";

interface TableNormalProps<IRow, IColumn> extends TableProviderProps<IRow, IColumn> {}

export function TableNormal<
  IRow extends TableNormalModel<ItemGroupModel<IRow["itemGroup"]>> &
    Partial<Record<string, any>>,
  IColumn extends FieldDefinition
>(props: TableNormalProps<IRow, IColumn>) {
  return (
    // <ClickProvider handleClick={props.onSelected}>
    <TableProvider<IRow, IColumn> {...props}>
      <Table>
        <TableGroupTHead<IRow, IColumn> />
        <TableGroupTBody<IRow, IColumn> />
      </Table>
    </TableProvider>
    // </ClickProvider>
  );
}
