import { colorSet } from "../models/ColorModels.ts";

export const newColorSet = () => {
    return { c: 0, w: 0, u: 0, b: 0, r: 0, g: 0 } as colorSet;
}

// Frank Karsen Land count stuff is below 

export enum DeckType {
    None,
    Limited,
    Constructed,
    Commander
}

export type DeckTypeOption = {
    label: string,
    value: DeckType,
    cardCount: number,
    landCalc: (avgCmc: number, rampCount: number, hasCompanion: boolean) => number
}

export const deckTypeOptions = [
    {label: "Select a Deck Type", value: DeckType.None, cardCount: 0, landCalc: (avgCmc: number, rampCount: number, hasCompanion: boolean= false) => {
        return 0;
    } },
    {label: "Limited", value: DeckType.Limited, cardCount: 40, landCalc: (avgCmc: number, rampCount: number, hasCompanion: boolean = false) => {
        console.log(`(13.06 + (${avgCmc} * 1.267)) - (${rampCount} * 0.28) + ((${hasCompanion ? 1 : 0}) * 0.27)`)
        return (13.06 + (avgCmc * 1.267)) - (rampCount * 0.28) + ((hasCompanion ? 1 : 0) * 0.27);
    } },
    {label: "Constructed", value: DeckType.Constructed, cardCount: 60, landCalc: (avgCmc: number, rampCount: number, hasCompanion: boolean= false) => {
        return (19.59 + (avgCmc * 1.9)) - (rampCount * 0.28) + ((hasCompanion ? 1 : 0) * 0.27);
    } },
    {label: "Commander", value: DeckType.Commander, cardCount: 99, landCalc: (avgCmc: number, rampCount: number, hasCompanion: boolean= false) => {
        return (31.42 + (avgCmc * 3.13) - (rampCount * 0.28)) + ((hasCompanion ? 2 : 1) * 0.27) - 1.35;
    } }
] as Array<DeckTypeOption>;

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