import { FieldDefinition, SortFields } from "@/interfaces/components/table";
import { useTable } from "@/providers/table";
import { useCallback } from "react";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";

export function TableGroupTHead<IRow, IColumn extends FieldDefinition>() {
  const {
    // props
    fields,
    sortTable,
    canChecked,
    stickyHeader,
    sortFields,
    // utils
    isAllChecked,
    changeChecked,
    //slots
    slotHeaderTop,
    slotHeaderColumn,
    slotHeaderColumnCheck,
  } = useTable<IRow, IColumn>();
  const handleSortTable = useCallback(
    (key: string) => sortTable?.(key),
    [sortTable]
  );

  return (
    <thead>
      {slotHeaderTop && slotHeaderTop(fields)}
      <tr>
        {canChecked && (
          <th className="min-w-10">
            {slotHeaderColumnCheck ? (
              slotHeaderColumnCheck(isAllChecked, changeChecked)
            ) : (
              <input type="checkbox"></input>
            )}
          </th>
        )}
        {fields.map(
          (field, index) =>
            field.visible === false ? null : (
              <th
                key={index}
                role={field.sortable ? "button" : ""}
                rowSpan={field.rowSpan}
                colSpan={field.colSpan}
                onClick={() => handleSortTable(field.key)}
                className={`${field.thClass} ${field.stickyColumn ? "column-sticky" : ""} ${
                  stickyHeader ? "is-sticky" : ""
                }`}>
                {slotHeaderColumn && slotHeaderColumn[`head-${field.key}`] ? (
                  slotHeaderColumn[`head-${field.key}`]?.(field, index)
                ) : (
                  <div
                    className={`f-12 ${
                      field.sortable ? "inline-flex items-center gap-2" : ""
                    }`}>
                    <div>
                      {field.label}
                      {field.required && (
                        <span className="text-danger ps-1">*</span>
                      )}
                    </div>
                    {field.sortable ? (
                      field.key === sortFields?.orderBy ? (
                        sortFields.orderDirection === "DESC" ? (
                          <FaSortDown />
                        ) : (
                          <FaSortUp />
                        )
                      ) : (
                        <FaSort />
                      )
                    ) : null}
                  </div>
                )}
              </th>
            )
        )}
      </tr>
    </thead>
  );
}
