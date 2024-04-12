import ManaSymbol, { ManaSymbolType } from "../ManaSymbol.tsx";


export default function WBDetails() {
    return (
      <ul>
        <li>
            <span><i class="ms ms-2"></i></span>
            <ManaSymbol type={ManaSymbolType.White} />
            <ManaSymbol type={ManaSymbolType.Black} />
             - Baron Bertram Graywater</li>
        <li>
            <span><i class="ms ms-1"></i></span>
            <ManaSymbol type={ManaSymbolType.White} />
            <ManaSymbol type={ManaSymbolType.Black} />
             - Ruthless Lawbringer</li>
      </ul>
    );
}