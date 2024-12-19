import { FieldDefinition } from "@/interfaces/components/table";
import { useTable } from "@/providers/table";

interface TableGroupTBody<IRow, IColumn> {
  fields: FieldDefinition[];
  tBodyItem: IRow;
  tBodyIndex: number;
  checked?: Set<number | string>;
  canChecked?: boolean;
  canSelected?: boolean;
}

export function TableGroupTBody() {
  const props = useTable<Partial<Record<string, any>>, FieldDefinition>();
  return (
    <tbody>
      <tr role={props.canSelected ? "button" : ""}>
        <td>tbody</td>
      </tr>
    </tbody>
  );
}
