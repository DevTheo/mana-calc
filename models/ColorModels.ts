
export enum Color {
    Colorless,White,Blue,Black,Red,Green
}

export const nameToColor = (name: string) => {
    if(name.startsWith("W")) return Color.White;
    if(name.startsWith("U")) return Color.Blue;
    if(name.startsWith("B")) return Color.Black;
    if(name.startsWith("R")) return Color.Red;
    if(name.startsWith("G")) return Color.Green;
        
    return Color.Colorless;
}

export type colorSet = {
    c: number,
    w: number,
    u: number,
    b: number,
    r: number,
    g: number
}

