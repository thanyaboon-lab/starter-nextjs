import {
  FieldDefinition,
  ItemGroupModel,
  TableNormalModel,
} from "@/interfaces/components/table";
import { useTable } from "@/providers/table";

export function TableGroupTBody<
  IRow extends Partial<Record<string, any>> &
    TableNormalModel<ItemGroupModel<IRow["itemGroup"]>>,
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
    slotBodyRowItemsGroup,
    slotFooter,
  } = useTable<IRow, IColumn>();
  return items.map((tBodyItem, tBodyIndex) => {
    return (
      <tbody key={tBodyIndex}>
        <tr role={canSelected ? "button" : ""}>
          {canChecked && (
            <th className="min-w-10">
              {slotBodyColumnCheck ? (
                slotBodyColumnCheck(tBodyItem, tBodyIndex, changeChecked)
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
                  tBodyItem[tdField.key],
                  tdField.key,
                  tBodyItem
                )} ${tdField.stickyColumn ? "column-sticky" : ""}`}>
                {slotBodyColumn && slotBodyColumn[`cell-${tdField.key}`]
                  ? slotBodyColumn[`cell-${tdField.key}`]?.(
                      tBodyItem,
                      tBodyIndex
                    )
                  : tBodyItem[tdField.key]}
              </td>
            );
          })}
        </tr>
        <>
          {tBodyItem.itemGroup &&
            slotBodyRowItemsGroup &&
            slotBodyRowItemsGroup(tBodyItem.itemGroup)}
          {slotFooter && slotFooter(tBodyItem, tBodyIndex)}
        </>
      </tbody>
    );
  });
}
