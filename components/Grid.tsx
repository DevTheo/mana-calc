import { ComponentChildren } from "preact";

export type GridComponentProps = {
    rowCount?: number,
    columnCount: number,
    className?: string,
    children: ComponentChildren
}

export default function Grid({rowCount, columnCount, className, children} : GridComponentProps) {
    columnCount = columnCount > 12 ? 12 : columnCount < 1 ? 1 : columnCount;
    let rowsModifier = "none";
    if(rowCount) {
        rowCount = rowCount! > 12 ? 12 : rowCount < 1 ? 1 : rowCount;
        rowsModifier = `${rowCount}`;
    }

    className = className ? `{className.trim()} ` : "";
    className = ` {className}grid-rows-${rowsModifier} grid-cols-${columnCount}`;

    return (<div className={className}>
        {children}
    </div>);
}