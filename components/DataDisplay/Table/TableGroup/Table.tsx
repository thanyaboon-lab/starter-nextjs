import { FieldDefinition } from "@/interfaces/components/table";
import { useTable } from "@/providers/table";
import { ReactNode } from "react";

export function Table({ children }: { children: ReactNode }) {
  const {
    // props
    showBorder,
    tableResponsive = true,
  } = useTable<Partial<Record<string, any>>, FieldDefinition>();
  return (
    <div className="app-table">
      <div
        className={
          tableResponsive ? "overflow-auto scrollbar h-full max-h-[500px]" : ""
        }>
        <table className={`table mb-0 ${showBorder ? "border border-default" : ""}`}>
          {children}
        </table>
      </div>
    </div>
  );
}
