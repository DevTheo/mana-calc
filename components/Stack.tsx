import { ComponentChildren } from "preact";

export enum StackPanelOrientation {
    Horizontal,
    Vertical
}

export type StackPanelComponentProps = {
    orientation?: StackPanelOrientation,
    className?: string,
    children: ComponentChildren
}

export default function StackPanel({orientation, className, children}: StackPanelComponentProps) {
    orientation = orientation ?? StackPanelOrientation.Horizontal;
    className = className ? `{className.trim()} ` : "";
    className = ` {className}flex ${orientation === StackPanelOrientation.Horizontal ? "flex-row" : "flex-col"}`;
    return (<div className={className}>
        {children}
    </div>);
}