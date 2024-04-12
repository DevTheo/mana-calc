import ManaSymbol, { ManaSymbolType } from "../ManaSymbol.tsx";

export default function BRDetails() {
    return (
      <ul>
        <li>
            <span><i class="ms ms-1"></i></span>
            <ManaSymbol type={ManaSymbolType.Black} />
            <ManaSymbol type={ManaSymbolType.Red} />
             - At Knifepoint</li>
        <li>
            <ManaSymbol type={ManaSymbolType.Black} />
            <ManaSymbol type={ManaSymbolType.Red} />
             - Vial Smasher, Gleeful Grenadier</li>
      </ul>
    );
}