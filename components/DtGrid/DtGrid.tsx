import { ComponentChildren } from "preact";

export enum DtGridUnits {
    auto,
    pixels,
    star,
};

export type DtGridDef = {
    unitAmount?: number,
    units: DtGridUnits | string
};

export type DtGridProps = {
    className?: string,
    colDefs: DtGridDef[],
    rowDefs: DtGridDef[],
    children: ComponentChildren
};

const dtGridDefToStyleItem = (def: DtGridDef) => {
    const units = def.units === DtGridUnits.star ? "fr" : 
    def.units === DtGridUnits.auto ? "auto" : def.units as string;
    const amount = (def.unitAmount || (def.units !== DtGridUnits.auto ? 1 : ""));
    return `${amount}${units}`;    
};

export function DtGrid({className, colDefs, rowDefs, children}: DtGridProps) {
    const style = {
        display: "grid",
        gridTemplateColumns: "",
        gridTemplateRows: ""
    };

    style.gridTemplateColumns = colDefs.map(dtGridDefToStyleItem).join(" ");
    style.gridTemplateRows = rowDefs.map(dtGridDefToStyleItem).join(" ");

    return (
        <div style={style} className={className}>
            {children}
        </div>);
}

export type DtGridColProps = {
    className?: string,
    col: number,
    row: number,
    colspan?: number,
    rowspan?: number,
    children: ComponentChildren
};
export function DtGridCol ({className, col, row, colspan, rowspan, children}: DtGridColProps) {

    const styles = [] as string[];
    if(colspan) { 
        styles.push(`grid-column-start: ${col};grid-column-end: span ${colspan}`);
    } else {
        styles.push(`grid-column: ${col}`);
    }
    if(rowspan) { 
        styles.push(`grid-row-start: ${row};grid-row-end: span ${rowspan}`);
    } else {
        styles.push(`grid-row: ${row}`);
    }

    return (
        <div style={styles.join(";")} className={className}>
            {children}
        </div>
    );
}