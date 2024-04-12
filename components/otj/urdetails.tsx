import ManaSymbol, { ManaSymbolType } from "../ManaSymbol.tsx";

export default function URDetails() {
    return (
      <ul>
        <li>
            <span><i class="ms ms-2"></i></span>
            <ManaSymbol type={ManaSymbolType.Blue} />
            <ManaSymbol type={ManaSymbolType.Red} />
            - Kraum, Violent Cacophony</li>
        <li>
            <ManaSymbol type={ManaSymbolType.Blue} />
            <ManaSymbol type={ManaSymbolType.Red} />
            - Slick Sequence</li>
      </ul>
    );
}