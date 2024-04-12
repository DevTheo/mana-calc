import ManaSymbol, { ManaSymbolType } from "../ManaSymbol.tsx";

export default function UBDetails() {
    return (
      <ul>
        <li>
            <span><i class="ms ms-1"></i></span>
            <ManaSymbol type={ManaSymbolType.Blue} />
            <ManaSymbol type={ManaSymbolType.Black} />
             - Intimidation Campaign</li>
        <li>
            <span><i class="ms ms-1"></i></span>
            <ManaSymbol type={ManaSymbolType.Blue} />
            <ManaSymbol type={ManaSymbolType.Black} />
             - Lazav, Familiar Stranger</li>
      </ul>
    );
}