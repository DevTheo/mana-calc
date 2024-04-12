import { useState } from "preact/hooks";
import StackPanel, { StackPanelOrientation } from "../components/StackPanel.tsx";
import ManaSymbol, { ManaSymbolType } from "../components/ManaSymbol.tsx";

enum Color {
    Colorless,White,Blue,Black,Red,Green
}

const nameToColor = (name: string) => {
    if(name.startsWith("W")) return Color.White;
    if(name.startsWith("U")) return Color.Blue;
    if(name.startsWith("B")) return Color.Black;
    if(name.startsWith("R")) return Color.Red;
    if(name.startsWith("G")) return Color.Green;
        
    return Color.Colorless;
}

type colorSet = {
    c: number,
    w: number,
    u: number,
    b: number,
    r: number,
    g: number
}

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
        console.log("onChange", e);
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
            <table>
            <tr>
            <td colspan={2} className={`text-right`}>Land Count:</td>
            <td colspan={3} className={`text-left`}>
                <input type="number" id="landCount" name="landCount" min="0" max="99" 
                    value={landCount} onChange={handleOnChange} />
            </td>
            </tr>
            <tr>
            <td><ManaSymbol type={ManaSymbolType.White} /></td>
            <td><ManaSymbol type={ManaSymbolType.Blue} /></td>
            <td><ManaSymbol type={ManaSymbolType.Black} /></td>
            <td><ManaSymbol type={ManaSymbolType.Red} /></td>
            <td><ManaSymbol type={ManaSymbolType.Green} /></td>
            </tr>
            <tr>
            <td>
                <input type="number" id="W" name="W" min="0" max="99" 
                    value={wValue} onChange={handleOnChange} />
            </td>
            <td>
                <input type="number" id="U" name="U" min="0" max="99" 
                    value={uValue} onChange={handleOnChange} />
            </td>
            <td>
                <input type="number" id="B" name="B" min="0" max="99" 
                    value={bValue} onChange={handleOnChange} />
            </td>
            <td>
                <input type="number" id="R" name="R" min="0" max="99" 
                    value={rValue} onChange={handleOnChange} />
            </td>
            <td>
                <input type="number" id="G" name="G" min="0" max="99" 
                    value={gValue} onChange={handleOnChange} />
            </td>
            </tr>
            <tr>
            <td colspan={5} className={`text-right`}>
                <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => calculate()}>Calc</button>
            </td>
            </tr>
        </table>

        {showCalc && (
            <div>
                <hr />
                <h3>Results (using the "Fleck" method):</h3>
                <StackPanel orientation={StackPanelOrientation.Horizontal} className="gap-x-4">
                    <StackPanel orientation={StackPanelOrientation.Vertical}>
                        <div><ManaSymbol type={ManaSymbolType.White} /></div>
                        <div>{fleckCalcResult.w}</div>
                    </StackPanel>
                    <StackPanel orientation={StackPanelOrientation.Vertical}>
                    <div><ManaSymbol type={ManaSymbolType.Blue} /></div>
                        <div>{fleckCalcResult.u}</div>
                    </StackPanel>
                    <StackPanel orientation={StackPanelOrientation.Vertical}>
                        <div><ManaSymbol type={ManaSymbolType.Black} /></div>
                        <div>{fleckCalcResult.b}</div>
                    </StackPanel>
                    <StackPanel orientation={StackPanelOrientation.Vertical}>
                        <div><ManaSymbol type={ManaSymbolType.Red} /></div>
                        <div>{fleckCalcResult.r}</div>
                    </StackPanel>
                    <StackPanel orientation={StackPanelOrientation.Vertical}>
                        <div><ManaSymbol type={ManaSymbolType.Green} /></div>
                        <div>{fleckCalcResult.g}</div>
                    </StackPanel>
                </StackPanel>
           </div>)}        
        </div>
    );
}