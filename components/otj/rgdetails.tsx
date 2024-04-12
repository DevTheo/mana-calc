import ManaSymbol, { ManaSymbolType } from "../ManaSymbol.tsx";

export default function RGDetails() {
    return (
      <ul>
        <li>
            <span><i class="ms ms-2"></i></span>
            <ManaSymbol type={ManaSymbolType.Red} />
            <ManaSymbol type={ManaSymbolType.Green} />
             - Cactusfolk Sureshot</li>
        <li>
            <span><i class="ms ms-1"></i></span>
            <ManaSymbol type={ManaSymbolType.Red} />
            <ManaSymbol type={ManaSymbolType.Green} />
             - Jolene, Plundering Pugilist</li>
      </ul>
    );
}