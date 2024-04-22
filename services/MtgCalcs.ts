import { colorSet } from "../models/ColorModels.ts";

export const newColorSet = () => {
    return { c: 0, w: 0, u: 0, b: 0, r: 0, g: 0 } as colorSet;
}

export const fleckLandCalc = (landCount: number, wValue: number, uValue: number, bValue: number, rValue: number, gValue: number) => {
    const result = newColorSet();

    const totalPips = wValue + uValue + bValue + rValue + gValue;
    result.w = Math.floor((landCount * (wValue / totalPips)) + 0.5);
    result.u = Math.floor((landCount * (uValue / totalPips)) + 0.5);
    result.b = Math.floor((landCount * (bValue / totalPips)) + 0.5);
    result.r = Math.floor((landCount * (rValue / totalPips)) + 0.5);
    result.g = Math.floor((landCount * (gValue / totalPips)) + 0.5);

    console.log(result);
    return result;
}