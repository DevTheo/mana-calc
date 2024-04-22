import { useState } from "preact/hooks";
import ManaSymbol, { ManaSymbolType } from "../components/ManaSymbol.tsx";
import { Color, colorSet, nameToColor } from "../models/ColorModels.ts";
import { DtGrid, DtGridCol, DtGridUnits, DtGridDef } from "../components/DtGrid/DtGrid.tsx";

const gridColDefs = [
    { units: DtGridUnits.star },
    { units: DtGridUnits.star },
    { units: DtGridUnits.star },
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
    const [fleckCalcResult, setFleckCalcResult] = useState<colorSet>({
        c:0,
        w:0,
        u:0,
        b:0,
        r:0,
        g:0
    });
  
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
        console.log("onClick");
        const result = {...fleckCalcResult};

        const totalPips = wValue + uValue + bValue + rValue + gValue;
        result.w = Math.floor((landCount * (wValue / totalPips)) + 0.5);
        result.u = Math.floor((landCount * (uValue / totalPips)) + 0.5);
        result.b = Math.floor((landCount * (bValue / totalPips)) + 0.5);
        result.r = Math.floor((landCount * (rValue / totalPips)) + 0.5);
        result.g = Math.floor((landCount * (gValue / totalPips)) + 0.5);

        console.log(result);
        setFleckCalcResult(result);
        setShowCalc(true);
   }

    return (
        <div>
            <DtGrid rowDefs={gridRowDefs} colDefs={gridColDefs} className="rounded-none border-black border-2 border-solid p-10">
                {/* Row 1 */}
                <DtGridCol row={1} col={1} colspan={6}>
                    &nbsp;
                </DtGridCol>
                {/* Row 2 */}
                <DtGridCol row={2} col={1} colspan={6}>
                    Land Count:
                    <input type="number" id="landCount" name="landCount" min="0" max="99"
                        value={landCount} onChange={handleOnChange} />
                </DtGridCol>
                {/* Row 3 */}
                <DtGridCol row={3} col={1}>
                    &nbsp;
                </DtGridCol>
                <DtGridCol row={3} col={2}>
                    <ManaSymbol type={ManaSymbolType.White} />
                </DtGridCol>
                <DtGridCol row={3} col={3}>
                    <ManaSymbol type={ManaSymbolType.Blue} />
                </DtGridCol>
                <DtGridCol row={3} col={4}>
                    <ManaSymbol type={ManaSymbolType.Black} />
                </DtGridCol>
                <DtGridCol row={3} col={5}>
                    <ManaSymbol type={ManaSymbolType.Red} />
                </DtGridCol>
                <DtGridCol row={3} col={6}>
                    <ManaSymbol type={ManaSymbolType.Green} />
                </DtGridCol>
                {/* Row 4 */}
                <DtGridCol row={4} col={1}>
                    &nbsp;
                </DtGridCol>
                <DtGridCol row={4} col={2}>
                    <input type="number" id="W" name="W" min="0" max="99" className={`w-10`}
                        value={wValue} onChange={handleOnChange} />
                </DtGridCol>
                <DtGridCol row={4} col={3}>
                    <input type="number" id="U" name="U" min="0" max="99" className={`w-10`}
                        value={uValue} onChange={handleOnChange} />
                </DtGridCol>
                <DtGridCol row={4} col={4}>
                    <input type="number" id="B" name="B" min="0" max="99" className={`w-10`}
                        value={bValue} onChange={handleOnChange} />
                </DtGridCol>
                <DtGridCol row={4} col={5}>
                    <input type="number" id="R" name="R" min="0" max="99" className={`w-10`}
                        value={rValue} onChange={handleOnChange} />
                </DtGridCol>
                <DtGridCol row={4} col={6}>
                    <input type="number" id="G" name="G" min="0" max="99" className={`w-10`}
                        value={gValue} onChange={handleOnChange} />
                </DtGridCol>

                {/* Row 5 */}
                <DtGridCol row={5} col={1} colspan={6}>
                    &nbsp;
                </DtGridCol>

                {/* Row 6 */}
                <DtGridCol row={6} col={1} colspan={6} className={`text-right mr-5`}>
                    <button type="button" 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                        onClick={() => calculate()}>Calc</button>
                </DtGridCol>
                {/* Row 7 results */}
                <DtGridCol row={7} col={1} colspan={6}>
                {showCalc ? (
                    <hr />
                ) : (<span>&nbsp;</span>) }
                </DtGridCol>
                {/* Row 8 (results) */}
                <DtGridCol row={8} col={1} colspan={6}>
                {showCalc ? (
                    <h3>Results (using the "Fleck" method):</h3>
                ) : (<span>&nbsp;</span>) }
                </DtGridCol>
                {/* Row 9 (results) */}
                
                <DtGridCol row={9} col={2} className="text-center">
                    {showCalc ? (<>
                    <ManaSymbol type={ManaSymbolType.White} /><br />
                    {fleckCalcResult.w} </>) : (<span>&nbsp;</span>) }
                </DtGridCol>

                <DtGridCol row={9} col={3} className="text-center">
                    {showCalc ? (<>
                    <ManaSymbol type={ManaSymbolType.Blue} /><br />
                    {fleckCalcResult.u} </>) : (<span>&nbsp;</span>) }
                </DtGridCol>

                <DtGridCol row={9} col={4} className="text-center">
                    {showCalc ? (<>
                    <ManaSymbol type={ManaSymbolType.Black} /><br />
                    {fleckCalcResult.b} </>) : (<span>&nbsp;</span>) }
                </DtGridCol>

                <DtGridCol row={9} col={5} className="text-center">
                    {showCalc ? (<>
                    <ManaSymbol type={ManaSymbolType.Red} /><br />
                    {fleckCalcResult.r} </>) : (<span>&nbsp;</span>) }
                </DtGridCol>

                <DtGridCol row={9} col={6} className="text-center">
                    {showCalc ? (<>
                    <ManaSymbol type={ManaSymbolType.Green} /><br />
                    {fleckCalcResult.g} </>) : (<span>&nbsp;</span>) }
                </DtGridCol>

            </DtGrid>
       
        </div>
    );
}