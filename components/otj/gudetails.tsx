import ManaSymbol, { ManaSymbolType } from "../ManaSymbol.tsx";

export default function GUDetails() {
    return (
      <ul>

<li>
            <ManaSymbol type={ManaSymbolType.Green} />
            <ManaSymbol type={ManaSymbolType.Blue} />
            - Doc Aurlock, Grizzled Genius</li>
        <li>
            <span><i class="ms ms-3"></i></span>
            <ManaSymbol type={ManaSymbolType.Green} />
            <ManaSymbol type={ManaSymbolType.Blue} />
            - Make Your Own Luck</li>
      </ul>
    );
}