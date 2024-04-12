import ManaSymbol, { ManaSymbolType } from "../ManaSymbol.tsx";

export default function BGDetails() {
    return (
      <ul>
        <li>
            <span><i class="ms ms-3"></i></span>
            <ManaSymbol type={ManaSymbolType.Black} />
            <ManaSymbol type={ManaSymbolType.Green} />
            - Badlands Revival</li>
        <li>
            <span><i class="ms ms-1"></i></span>
            <ManaSymbol type={ManaSymbolType.Black} />
            <ManaSymbol type={ManaSymbolType.Green} />
            - Honest Rutstein</li>
      </ul>
    );
}