import ManaSymbol, { ManaSymbolType } from "../ManaSymbol.tsx";

export default function WUDetails() {
    return (
      <ul>
        <li>
            <span><i class="ms ms-2"></i></span>
            <ManaSymbol type={ManaSymbolType.White} />
            <ManaSymbol type={ManaSymbolType.Blue} />
             - Jem Lightfoot, Sky Explorer</li>
        <li>
            <span><i class="ms ms-3"></i></span>
            <ManaSymbol type={ManaSymbolType.White} />
            <ManaSymbol type={ManaSymbolType.Blue} />
             - Wrangler of the Damned</li>
      </ul>
    );
}