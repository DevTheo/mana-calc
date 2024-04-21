import { useState } from "preact/hooks";
import { Color, colorSet, nameToColor } from "../models/ColorModels.ts";
import ManaSymbol, { ManaSymbolType } from "../components/ManaSymbol.tsx";
import StackPanel, { StackPanelOrientation } from "../components/StackPanel.tsx";

enum DeckType {
    None,
    Limited,
    Constructed,
    Commander
}

type DeckTypeOption = {
    label: string,
    value: DeckType,
    cardCount: number,
    landCalc: (avgCmc: number, rampCount: number, hasCompanion: boolean) => number
}

const deckTypeOptions = [
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


export default function LandCount() {
    const [deckType, setDeckType] = useState<DeckType>(DeckType.None);
    
    const [cardCount, setCardCount] = useState<number>(0);
    const [rampCount, setRampCount] = useState<number>(0);
    const [cValue, setCVal] = useState<number>(0);
    const [wValue, setWVal] = useState<number>(0);
    const [uValue, setUVal] = useState<number>(0);
    const [bValue, setBVal] = useState<number>(0);
    const [rValue, setRVal] = useState<number>(0);
    const [gValue, setGVal] = useState<number>(0);

    const [showLandCalc, setLandShowCalc] = useState<boolean>(false);
    const [landCalcResult, setLandCalcResult] = useState<number>(0);
  
    /*
        Build table with tailwindcss, row one should have a radio button group to determine 40, 60, or 99 card deck, 
        row 2 should have a "card count" field, and row 3 should have the following fields: tag, mana value, C, W, U, B, R, G, and is ramp 
    */
   const handleOnChange = (e: Event) => {

    const el = e.target as HTMLInputElement;
        if (el.id === "cardCount") {
            setCardCount(parseInt(el.value));
            return;
        } else if (el.id === "rampCount") {
            setRampCount(parseInt(el.value));
            return;
        }
        const elColor = nameToColor(el.id);

        switch(elColor) {
            case Color.Colorless:
                setCVal(parseInt(el.value));
                break;
            case Color.White:
                setWVal(parseInt(el.value));
                break;
            case Color.Blue:
                setUVal(parseInt(el.value));
                break;
            case Color.Black:
                setBVal(parseInt(el.value));
                break;
            case Color.Red:
                setRVal(parseInt(el.value));
                break;
            case Color.Green:
                setGVal(parseInt(el.value));
                break;
        }
   }

   const Calc = () => {
        const deckTypeOption = deckTypeOptions.find(i => i.value === deckType);

        if(!deckTypeOption) {
            setLandCalcResult(0);
            setLandShowCalc(false);
            return;
        }

        const totalPips = cValue + wValue + uValue + bValue + rValue + gValue;
        console.log(`${totalPips} / ${cardCount}`);
        const avgManaVal = Math.floor((totalPips / cardCount) + 0.5);
        const result = deckTypeOption.landCalc(avgManaVal, rampCount, false);
        console.log(result);
        setLandCalcResult(result);
        setLandShowCalc(true);
   }

   function deckTypeChanged(event: Event): void {
        const target = event.target as HTMLSelectElement;
        const dcktypIndex = target.selectedIndex <= 0 ? 0 : (
            target.selectedIndex > deckTypeOptions.length - 1 ? deckTypeOptions.length - 1 :
            target.selectedIndex as number
        );

        setDeckType(deckTypeOptions[dcktypIndex].value);
   }

    return (
        <div>
            <table>
                <tr>
                    <td colspan={6}>                        
                        Deck Type:
                        <select onChange={deckTypeChanged}>
                        { deckTypeOptions
                            .map((option) => (
                            <option selected={option.value === deckType} 
                                    value={option.value}>{option.label}</option>)) 
                        }
                        </select>
                    </td>
                </tr><tr>
                    <td colspan={6}>
                        Card Count:
                        <input id="cardCount" name="cardCount" className={`w-40`} 
                            value={cardCount} onChange={handleOnChange}/>
                    </td>
                </tr><tr>
                    <td colspan={6}>
                        Cheap Ramp Count:
                        <input id="rampCount" name="rampCount" className={`w-40`} 
                            value={rampCount} onChange={handleOnChange}/>
                    </td>
                </tr>
                <tr>
                    <td><ManaSymbol type={ManaSymbolType.Colorless} /></td>
                    <td><ManaSymbol type={ManaSymbolType.White} /></td>
                    <td><ManaSymbol type={ManaSymbolType.Blue} /></td>
                    <td><ManaSymbol type={ManaSymbolType.Black} /></td>
                    <td><ManaSymbol type={ManaSymbolType.Red} /></td>
                    <td><ManaSymbol type={ManaSymbolType.Green} /></td>
                </tr>
                <tr>
                    <td>
                        <input type="number" id="C" name="C" min="0" max="99" className={`w-20`} 
                            value={cValue} onChange={handleOnChange} />
                    </td>
                    <td>
                        <input type="number" id="W" name="W" min="0" max="99" className={`w-20`}
                            value={wValue} onChange={handleOnChange} />
                    </td>
                    <td>
                        <input type="number" id="U" name="U" min="0" max="99" className={`w-20`}
                            value={uValue} onChange={handleOnChange} />
                    </td>
                    <td>
                        <input type="number" id="B" name="B" min="0" max="99" className={`w-20`}
                            value={bValue} onChange={handleOnChange} />
                    </td>
                    <td>
                        <input type="number" id="R" name="R" min="0" max="99" className={`w-20`}
                            value={rValue} onChange={handleOnChange} />
                    </td>
                    <td>
                        <input type="number" id="G" name="G" min="0" max="99" className={`w-20`}
                            value={gValue} onChange={handleOnChange} />
                    </td>
                </tr>
                <tr>
                    <td colspan={6} className={`text-right`}>
                        <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => Calc()}>Calc</button>
                    </td>
                </tr>
  
        {showLandCalc ? (<>            
            <tr>
                <td colspan={6}><hr /></td>
            </tr><tr>
                <td colspan={6}>
                    <h3>Recommended Lands:</h3>
                </td>
            </tr><tr>
                <td colspan={6}>
                   <h4>{Math.floor(landCalcResult + 0.5)}</h4>
                </td>
           </tr></>) : (
            <>            
            <tr>
                <td colspan={6}>&nbsp;</td>
            </tr><tr>
                <td colspan={6}>
                    <h3>&nbsp;</h3>
                </td>
            </tr><tr>
                <td colspan={6}>
                   <h4>&nbsp;</h4>
                </td>
           </tr></>
           )}        
           </table>
      </div>
    );
}