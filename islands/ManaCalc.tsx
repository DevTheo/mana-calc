import { useState } from "preact/hooks";
import ManaSymbol, { ManaSymbolType } from "../components/ManaSymbol.tsx";
import { Color, colorSet, nameToColor } from "../models/ColorModels.ts";
import { DtGrid, DtGridCol, DtGridUnits, DtGridDef } from "../components/DtGrid/DtGrid.tsx";
import { fleckLandCalc, newColorSet } from "../services/MtgCalcs.ts";

const gridColDefs = [
    { units: DtGridUnits.star },
    { units: DtGridUnits.star },
    { units: DtGridUnits.star } 
   ];
const gridRowDefs = [
    { units: DtGridUnits.star },
    { units: DtGridUnits.star },
    { units: DtGridUnits.star },
    { units: DtGridUnits.star },
    { units: DtGridUnits.star },
    { units: DtGridUnits.star },
    { units: DtGridUnits.star },
    { units: DtGridUnits.auto },
    { units: DtGridUnits.star },
    { units: DtGridUnits.star }
   ];

export default function ManaCalc() {
    const [landCount, setLandCount] = useState<number>(0);
    const [wValue, setWVal] = useState<number>(0);
    const [uValue, setUVal] = useState<number>(0);
    const [bValue, setBVal] = useState<number>(0);
    const [rValue, setRVal] = useState<number>(0);
    const [gValue, setGVal] = useState<number>(0);

    const [showCalc, setShowCalc] = useState<boolean>(false);
    const [fleckCalcResult, setFleckCalcResult] = useState<colorSet>(newColorSet());
  
    /*
        Build table with tailwindcss, row one should have a radio button group to determine 40, 60, or 99 card deck, 
        row 2 should have a "card count" field, and row 3 should have the following fields: tag, mana value, C, W, U, B, R, G, and is ramp 
    */
   const handleOnChange = (e: Event) => {
        const el = e.target as HTMLInputElement;
        if(el.id === "landCount") {
            setLandCount(parseInt(el.value));
            return;
        }
        const elColor = nameToColor(el.id);

        switch(elColor) {
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

   const calculate = () => {
        const result = fleckLandCalc(landCount, wValue, uValue, bValue, rValue, gValue);

        setFleckCalcResult(result);
        setShowCalc(true);
   }

    return (
        <div>
            <DtGrid rowDefs={gridRowDefs} colDefs={gridColDefs} className="rounded-none border-black border-2 border-solid p-10 gap-x-2">
                {/* Row 1 */}
                <DtGridCol row={1} col={1}>
                    Land Count:
                </DtGridCol>
                <DtGridCol row={1} col={2} colspan={2}>
                    <input type="number" id="landCount" name="landCount" min="0" max="99"
                        value={landCount} onChange={handleOnChange} />
                </DtGridCol>
                {/* Row 2 */}
                <DtGridCol row={2} col={1}>
                    &nbsp;
                </DtGridCol>
                <DtGridCol row={2} col={2}>
                    <ManaSymbol type={ManaSymbolType.White} />
                </DtGridCol>
                <DtGridCol row={2} col={3}>
                    <ManaSymbol type={ManaSymbolType.Blue} />
                </DtGridCol>

                {/* Row 3 */}
                <DtGridCol row={3} col={1}>
                    &nbsp;
                </DtGridCol>
                <DtGridCol row={3} col={2}>
                    <input type="number" id="W" name="W" min="0" max="99" className={`w-10`}
                        value={wValue} onChange={handleOnChange} />
                </DtGridCol>
                <DtGridCol row={3} col={3}>
                    <input type="number" id="U" name="U" min="0" max="99" className={`w-10`}
                        value={uValue} onChange={handleOnChange} />
                </DtGridCol>

                {/* new Row 4 */}
                <DtGridCol row={4} col={1}>
                    <ManaSymbol type={ManaSymbolType.Black} />
                </DtGridCol>
                <DtGridCol row={4} col={2}>
                    <ManaSymbol type={ManaSymbolType.Red} />
                </DtGridCol>
                <DtGridCol row={4} col={3}>
                    <ManaSymbol type={ManaSymbolType.Green} />
                </DtGridCol>

                {/* new Row 5 */}
                <DtGridCol row={5} col={1}>
                    <input type="number" id="B" name="B" min="0" max="99" className={`w-10`}
                        value={bValue} onChange={handleOnChange} />
                </DtGridCol>
                <DtGridCol row={5} col={2}>
                    <input type="number" id="R" name="R" min="0" max="99" className={`w-10`}
                        value={rValue} onChange={handleOnChange} />
                </DtGridCol>
                <DtGridCol row={5} col={3}>
                    <input type="number" id="G" name="G" min="0" max="99" className={`w-10`}
                        value={gValue} onChange={handleOnChange} />
                </DtGridCol>

                {/* Row 6 */}
                <DtGridCol row={6} col={1} colspan={3} className={`text-right mr-5`}>
                    <button type="button" 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                        onClick={() => calculate()}>Calc</button>
                </DtGridCol>
                {/* Row 7 results */}
                <DtGridCol row={7} col={1} colspan={3}>
                {showCalc ? (
                    <hr />
                ) : (<span>&nbsp;</span>) }
                </DtGridCol>
                {/* Row 8 (results) */}
                <DtGridCol row={8} col={1} colspan={3}>
                {showCalc ? (
                    <h3>Results (using the "Fleck" method):</h3>
                ) : (<span>&nbsp;</span>) }
                </DtGridCol>
                {/* Row 9 (results) */}
                <FleckCalcResults row={9} results={fleckCalcResult} isShown={showCalc} />

            </DtGrid>
       
        </div>
    );
}

export type FleckCalcResultsProps = {
    row: number,
    results: colorSet,
    isShown: boolean
}
export function FleckCalcResults({row, results, isShown}: FleckCalcResultsProps) { 
    return (<>
        <DtGridCol row={row} col={2} className="text-center">
            {isShown ? (<>
            <ManaSymbol type={ManaSymbolType.White} /><br />
            {results.w} </>) : (<span>&nbsp;</span>) }
        </DtGridCol>

        <DtGridCol row={row} col={3} className="text-center">
            {isShown ? (<>
            <ManaSymbol type={ManaSymbolType.Blue} /><br />
            {results.u} </>) : (<span>&nbsp;</span>) }
        </DtGridCol>

        <DtGridCol row={row+1} col={1} className="text-center">
            {isShown ? (<>
            <ManaSymbol type={ManaSymbolType.Black} /><br />
            {results.b} </>) : (<span>&nbsp;</span>) }
        </DtGridCol>

        <DtGridCol row={row+1} col={2} className="text-center">
            {isShown ? (<>
            <ManaSymbol type={ManaSymbolType.Red} /><br />
            {results.r} </>) : (<span>&nbsp;</span>) }
        </DtGridCol>

        <DtGridCol row={row+1} col={3} className="text-center">
            {isShown ? (<>
            <ManaSymbol type={ManaSymbolType.Green} /><br />
            {results.g} </>) : (<span>&nbsp;</span>) }
        </DtGridCol>
    </>); 
} // FleckResults