import { useState } from "preact/hooks";
import { Color, colorSet, nameToColor } from "../models/ColorModels.ts";
import ManaSymbol, { ManaSymbolType } from "../components/ManaSymbol.tsx";
import { DtGrid, DtGridCol, DtGridUnits, DtGridDef } from "../components/DtGrid/DtGrid.tsx";
import { newColorSet, fleckLandCalc, DeckType, deckTypeOptions } from "../services/MtgCalcs.ts";
import { FleckCalcResults } from "./ManaCalc.tsx";

const gridColDefs = [
    { units: DtGridUnits.star },
    { units: DtGridUnits.star },
    { units: DtGridUnits.star },
   ];
const gridRowDefs = [
    { units: DtGridUnits.star },
    { units: DtGridUnits.star },
    { units: DtGridUnits.star },
    { units: DtGridUnits.star },
    { units: DtGridUnits.star },
    { units: DtGridUnits.star },
    { units: DtGridUnits.star },
    { units: DtGridUnits.star },
    { units: DtGridUnits.star },
    { units: DtGridUnits.auto }, // <hr />
    { units: DtGridUnits.star },
    { units: DtGridUnits.star },
    { units: DtGridUnits.star }
   ];

export default function LandCount() {
    const [deckType, setDeckType] = useState<DeckType>(DeckType.None);
    
    const [spellCount, setSpellCount] = useState<number>(0);
    const [rampCount, setRampCount] = useState<number>(0);
    const [cValue, setCVal] = useState<number>(0);
    const [wValue, setWVal] = useState<number>(0);
    const [uValue, setUVal] = useState<number>(0);
    const [bValue, setBVal] = useState<number>(0);
    const [rValue, setRVal] = useState<number>(0);
    const [gValue, setGVal] = useState<number>(0);

    const [showLandCalc, setLandShowCalc] = useState<boolean>(false);
    const [landCalcResult, setLandCalcResult] = useState<number>(0);

    const [showFleckCalc, setShowFleckCalc] = useState<boolean>(false);
    const [fleckCalcResult, setFleckCalcResult] = useState<colorSet>(newColorSet());

    /*
        Build table with tailwindcss, row one should have a radio button group to determine 40, 60, or 99 card deck, 
        row 2 should have a "card count" field, and row 3 should have the following fields: tag, mana value, C, W, U, B, R, G, and is ramp 
    */
   const handleOnChange = (e: Event) => {

    const el = e.target as HTMLInputElement;
        if (el.id === "spellCount") {
            setSpellCount(parseInt(el.value));
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
        const avgManaVal = Math.floor((totalPips / spellCount) + 0.5);
        const result = deckTypeOption.landCalc(avgManaVal, rampCount, false);
        setLandCalcResult(result);
        setLandShowCalc(true);

        const fleckResults = fleckLandCalc(result, wValue, uValue, bValue, rValue, gValue);
        setFleckCalcResult(fleckResults);
        setShowFleckCalc(true);

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
            <DtGrid rowDefs={gridRowDefs} colDefs={gridColDefs} className="rounded-none border-black border-2 border-solid p-10 gap-x-2">
                  {/* Row 1 */}
                <DtGridCol row={1} col={1}>
                    Deck Type:
                </DtGridCol>
                <DtGridCol row={1} col={2} colspan={2}>
                    <select onChange={deckTypeChanged}>
                    { deckTypeOptions
                        .map((option) => (
                        <option selected={option.value === deckType} 
                                value={option.value}>{option.label}</option>)) 
                    }
                    </select>
                </DtGridCol>

                  {/* Row 2 */}
                <DtGridCol row={2} col={1}>
                    Spell Count:
                </DtGridCol>
                <DtGridCol row={2} col={2} colspan={2}>
                    <input type="number" id="spellCount" name="spellCount" className={`w-30`} 
                        value={spellCount} onChange={handleOnChange}/>
                </DtGridCol>

                  {/* Row 3 */}
                <DtGridCol row={3} col={1}>
                    # of Cheap Ramp:
                </DtGridCol>
                <DtGridCol row={3} col={2} colspan={2}>
                    <input type="number" id="rampCount" name="rampCount" className={`w-30`} 
                        value={rampCount} onChange={handleOnChange}/>
                </DtGridCol>

                  {/* Row 4 */}
                <DtGridCol row={4} col={1} className="text-center">
                    <ManaSymbol type={ManaSymbolType.Colorless} />
                </DtGridCol>
                <DtGridCol row={4} col={2} className="text-center">
                    <ManaSymbol type={ManaSymbolType.White} />
                </DtGridCol>
                <DtGridCol row={4} col={3} className="text-center">
                    <ManaSymbol type={ManaSymbolType.Blue} />
                </DtGridCol>

                  {/* Row 5 */}
                <DtGridCol row={5} col={1} className="text-center">
                    <input type="number" id="C" name="C" min="0" max="199" className={`w-20`} 
                        value={cValue} onChange={handleOnChange} />
                </DtGridCol>
                <DtGridCol row={5} col={2} className="text-center">
                    <input type="number" id="W" name="W" min="0" max="199" className={`w-20`} 
                        value={wValue} onChange={handleOnChange} />
                </DtGridCol>
                <DtGridCol row={5} col={3} className="text-center">
                    <input type="number" id="U" name="U" min="0" max="199" className={`w-20`} 
                        value={uValue} onChange={handleOnChange} />
                </DtGridCol>

                  {/* (new) Row 6 */}
                <DtGridCol row={6} col={1} className="text-center">
                    <ManaSymbol type={ManaSymbolType.Black} />
                </DtGridCol>
                <DtGridCol row={6} col={2} className="text-center">
                    <ManaSymbol type={ManaSymbolType.Red} />
                </DtGridCol>
                <DtGridCol row={6} col={3} className="text-center">
                    <ManaSymbol type={ManaSymbolType.Green} />
                </DtGridCol>

                  {/* (new) Row 7 */}
                <DtGridCol row={7} col={1} className="text-center">
                    <input type="number" id="B" name="B" min="0" max="199" className={`w-20`} 
                        value={bValue} onChange={handleOnChange} />
                </DtGridCol>
                <DtGridCol row={7} col={2} className="text-center">
                    <input type="number" id="R" name="R" min="0" max="199" className={`w-20`} 
                        value={rValue} onChange={handleOnChange} />
                </DtGridCol>
                <DtGridCol row={7} col={3} className="text-center">
                    <input type="number" id="G" name="F" min="0" max="199" className={`w-20`} 
                        value={gValue} onChange={handleOnChange} />
                </DtGridCol>

                  {/* Row 8 */}
                <DtGridCol row={8} col={1} colspan={3} className={`text-right`}>
                        <button type="button" 
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                            onClick={() => Calc()}>Calc</button>
                </DtGridCol>

                  {/* Row 9(result) */}
                <DtGridCol row={9} col={1} colspan={3}>
                    {showLandCalc ? (<hr />) : (
                        <>&nbsp;</>
                    ) }
                </DtGridCol>

                  {/* Row 8 (result) */}
                <DtGridCol row={9} col={1} colspan={3}>
                    {showLandCalc ? (                    
                        <h3>Recommended Lands: <b>{Math.floor(landCalcResult + 0.5)}</b></h3>) : (
                        <>&nbsp;</>
                    ) }
                </DtGridCol>

                {/* Row 10 (fleck result) */}
                <FleckCalcResults row={10} results={fleckCalcResult} isShown={showFleckCalc} />
            </DtGrid>
      </div>
    );
}
