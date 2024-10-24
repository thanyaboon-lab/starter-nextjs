interface TableProps {
  showBorder?: boolean;
  tableResponsive?: boolean;
  tableSlot?: Function
  children?: React.ReactNode;
}

export function Table({showBorder, tableResponsive, tableSlot, children}: TableProps) {
    return (
        <div className="app-table">
            <div className={tableResponsive ? 'overflow-auto scrollbar h-full max-h-[500px]' : ''}>
                {tableSlot ? tableSlot() : <table className={`table mb-0 ${showBorder && 'border'}`}>{children}</table>}
            </div>
        </div>
    )
}
