import ManaSymbol, { ManaSymbolType } from "../ManaSymbol.tsx";

export default function RWDetails() {
    return (
      <ul>
        <li>
            <span><i class="ms ms-2"></i></span>
            <ManaSymbol type={ManaSymbolType.Red} />
            <ManaSymbol type={ManaSymbolType.White} />
            - Ertha Jo, Frontier Mentor</li>
        <li>
            <span><i class="ms ms-x"></i></span>
            <ManaSymbol type={ManaSymbolType.Red} />
            <ManaSymbol type={ManaSymbolType.White} />
            - Form a Posse</li>
      </ul>
    );
}