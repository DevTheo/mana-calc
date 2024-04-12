import { ComponentChildren } from "preact";

export type ColumnComponentProps = {
    row?: number,
    rowend?: number,
    col?: number,
    colend?: number,
    colspan?: number,
    colspanAuto?: boolean,
    rowspan?: number;
    className?: string,
    children: ComponentChildren
}

export default function Column({row, rowend, col, colend, colspanAuto, colspan, rowspan, className, children}: ColumnComponentProps) {
    className = className ? `${className.trim()}` : "";

    const rowClass = row ? ` grid-row-start-${row}` : "";
    const rowEndClass = rowend ? ` grid-row-end-${rowend}` : "";
    rowspan = !rowEndClass && !rowspan ? 1 : rowspan;
    const rowSpanClass = rowspan ? ` grid-row-span-${rowspan}` : "";
    const colClass = col ? ` grid-col-start-${col}` : "";
    const colEndClass = colend ? ` grid-col-end-${colend}` : "";
    colspan = !colEndClass && !colspan ? 1 : colspan;
    const colSpanClass = colspan ? ` grid-col-span-${colspan}` : "";
    const colspanAutoClass = colspanAuto ? ` grid-col-span-auto` : "";


    return (<div className={`${className}${rowClass}${rowEndClass}${rowSpanClass}${colClass}${colEndClass}${colSpanClass}${colspanAutoClass}`}>
        {children}
    </div>);
}