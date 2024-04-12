import ManaSymbol, { ManaSymbolType } from "../ManaSymbol.tsx";

export default function GWDetails() {
    return (
      <ul>
        <li>
            <span><i class="ms ms-1"></i></span>
            <ManaSymbol type={ManaSymbolType.Green} />
            <ManaSymbol type={ManaSymbolType.White} />
             - Congregation Gryff</li>
        <li>
            <ManaSymbol type={ManaSymbolType.Green} />
            <ManaSymbol type={ManaSymbolType.White} />
             - Miriam, Herd Whisperer</li>
      </ul>
    );
}