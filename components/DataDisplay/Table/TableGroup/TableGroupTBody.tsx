import { FieldDefinition } from "@/interfaces/components/table";
import { useTable } from "@/providers/table";

export function TableGroupTBody<
  IRow extends Partial<Record<string, any>>,
  IColumn extends FieldDefinition
>() {
  const {
    // props
    items,
    fields,
    canChecked,
    canSelected,
    //utils
    changeChecked,
    normalizeClassesField,
    //slots
    slotBodyColumnCheck,
    slotBodyColumn,
  } = useTable<IRow, IColumn>();
  return items.map((item, index) => {
    return (
      <tbody key={index}>
        <tr role={canSelected ? "button" : ""}>
          {canChecked && (
            <th className="min-w-10">
              {slotBodyColumnCheck ? (
                slotBodyColumnCheck(item, index, changeChecked)
              ) : (
                <input type="checkbox"></input>
              )}
            </th>
          )}
          {fields.map((tdField, tdFieldIndex) => {
            return tdField.visible === false ? null : (
              <td
                key={tdFieldIndex}
                className={`${tdField.tdClass} ${normalizeClassesField(
                  tdField.tdClass,
                  item[tdField.key],
                  tdField.key,
                  item
                )} ${tdField.stickyColumn ? "column-sticky" : ""}`}>
                {slotBodyColumn &&
                  slotBodyColumn[`cell-${tdField.key}`]?.(item, index)}
              </td>
            );
          })}
        </tr>
      </tbody>
    );
  });
}
