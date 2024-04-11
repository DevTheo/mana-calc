import { useState } from "preact/hooks";

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
   const onChange = (e: Event) => {

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
        const result = {...fleckCalcResult};

        const totalPips = wValue + uValue + bValue + rValue + gValue;
        result.w = Math.floor((wValue / totalPips) + 0.5);
        result.u = Math.floor((uValue / totalPips) + 0.5);
        result.b = Math.floor((bValue / totalPips) + 0.5);
        result.r = Math.floor((rValue / totalPips) + 0.5);
        result.g = Math.floor((gValue / totalPips) + 0.5);

        setFleckCalcResult(result);
        setShowCalc(true);
   }

    return (
        <>
            <table>
            {/* <tr>
            <td className="text-right" colspan={4}>
                Deck Type:
            </td>
            <td className="text-left" colspan={6}>
                <select id="deckType" name="deckType">
                <option value="">Choose a deck size</option>v
                <option value="40">Limited (40)</option>
                <option value="60">Constructed (60)</option>
                <option value="99">Commander (99)</option>
                </select>
            </td>
            </tr> */}
            <tr>
            <td colspan={2} className={`text-right`}>Land Count:</td>
            <td colspan={3} className={`text-left`}>
                <input type="number" id="landCount" name="landCount" min="0" max="99" 
                    value={landCount} onChange={onChange} />
            </td>
            </tr>
            {/* <tr>
            <td>Tag:</td>
            <td><input type="text" id="tag" name="tag" /></td>
            </tr> */}
            {/* <tr>
            <td>Mana Value:</td>
            <td><input type="text" id="manaValue" name="manaValue" /></td>
            </tr> */}
            <tr>
            {/* <td>C:</td> */}
            <td>W:</td>
            <td>U:</td>
            <td>B:</td>
            <td>R:</td>
            <td>G:</td>
            </tr>
            <tr>
            {/* 
            <td><input type="text" id="C" name="C" /></td> */}
            <td>
                <input type="number" id="W" name="W" min="0" max="99" 
                    value={wValue} onChange={onChange} />
            </td>
            <td>
                <input type="number" id="U" name="U" min="0" max="99" 
                    value={uValue} onChange={onChange} />
            </td>
            <td>
                <input type="number" id="B" name="B" min="0" max="99" 
                    value={bValue} onChange={onChange} />
            </td>
            <td>
                <input type="number" id="R" name="R" min="0" max="99" 
                    value={rValue} onChange={onChange} />
            </td>
            <td>
                <input type="number" id="G" name="G" min="0" max="99" 
                    value={gValue} onChange={onChange} />
            </td>
            </tr>
            {/* <tr>
            <td>Is Ramp:</td>
            <td><input type="checkbox" id="isRamp" name="isRamp" /></td>
            </tr> */}
            <tr>
            <td colspan={5} className={`text-right`}>
                <button type="submit">Submit</button>
            </td>
            </tr>
        </table>

        {showCalc && (
            <div>
                <hr />
                <h3>Results:</h3>
                <table>
                    <tr>
                    {/* <td>C:</td> */}
                    <td>W:</td>
                    <td>U:</td>
                    <td>B:</td>
                    <td>R:</td>
                    <td>G:</td>
                    </tr>
                    <tr>
                    {/* <td>{fleckCalcResult.C}</td> */}
                    <td>{fleckCalcResult.w}</td>
                    <td>{fleckCalcResult.u}</td>
                    <td>{fleckCalcResult.b}</td>
                    <td>{fleckCalcResult.r}</td>
                    <td>{fleckCalcResult.g}</td>
                    </tr>
                </table>
            </div>)}        
        </>
    );
}