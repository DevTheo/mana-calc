export enum ManaSymbolType {
    White,
    Blue,
    Black,
    Red,
    Green
};

export default function ManaSymbol({type}: {type: ManaSymbolType}) {
    switch(type) {
        case ManaSymbolType.White:
            return (<span className="text-white"><i class="ms ms-w ms-cost ms-shadow"></i></span>);
        case ManaSymbolType.Blue:
            return (<span className="text-blue-500"><i class="ms ms-u ms-cost ms-shadow"></i></span>);
        case ManaSymbolType.Black:
            return (<span className="text-black"><i class="ms ms-b ms-cost ms-shadow"></i></span>);
        case ManaSymbolType.Red:
            return (<span className="text-red-500"><i class="ms ms-r ms-cost ms-shadow"></i></span>);
        case ManaSymbolType.Green:
            return (<span className="text-green-500"><i class="ms ms-g ms-cost ms-shadow"></i></span>);
    }
}