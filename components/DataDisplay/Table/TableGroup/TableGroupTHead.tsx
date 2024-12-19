import { FieldDefinition, SortFields } from "@/interfaces/components/table";
import { useTable } from "@/providers/table";

export function TableGroupTHead() {
  const props = useTable<Partial<Record<string, any>>, FieldDefinition>();
  return (
    <thead>
      <tr>
        {props.fields.map((field, index) => (
          <th key={index}>
            {field.label}
          </th>
        ))}
      </tr>
    </thead>
  );
}
