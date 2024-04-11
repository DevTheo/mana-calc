import { ComponentChildren } from "preact";

export type SubGridColumnComponentProps = {
    className?: string,
    row?: number,
    rowend?: number,
    rowspan?: number;
    col?: number,
    colend?: number,
    colspan?: number,
    colspanAuto?: boolean,
    children: ComponentChildren
}

export default function Grid({className, row, rowend, rowspan, col, colend, colspan, colspanAuto, children} : SubGridColumnComponentProps) {

    className = className ? `{className.trim()} grid grid-cols-subgrid` : "";
    const rowClass = row ? ` grid-row-start-${row}` : "";
    const rowEndClass = rowend ? ` grid-row-end-${rowend}` : "";
    const rowSpanClass = rowspan ? ` grid-row-span-${rowspan}` : "";
    const colClass = col ? ` grid-col-start-${col}` : "";
    const colEndClass = colend ? ` grid-col-end-${colend}` : "";
    const colSpanClass = colspan ? ` grid-col-span-${colspan}` : "";
    const colSpanAutoClass = colspanAuto ? ` grid-col-span-auto` : "";

    return (<div className={`${className}${rowClass}${rowEndClass}${rowSpanClass}${colClass}${colEndClass}${colSpanClass}${colSpanAutoClass}`}>
        {children}
    </div>);
}