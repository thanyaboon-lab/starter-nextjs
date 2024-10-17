import { CardProps } from "./interface";

export function CardBase({
  title,
  format,
  slotHeaderRight,
  children,
}: CardProps) {
  return (
    <div
      className={`rounded-[10px] bg-default ${
        format === "border" ? "border border-default" : "shadow-lg"
      }`}>
      <div className="flex items-center justify-between p-6">
        <label className="text-tertiary text-xl">{title}</label>
        {slotHeaderRight ? slotHeaderRight() : null}
      </div>
      {children && <div className={`pb-6 px-6`}>{children}</div>}
    </div>
  );
}
