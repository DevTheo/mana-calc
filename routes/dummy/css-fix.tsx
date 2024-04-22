
// Hidden page to make sure that the CSS is picked up prroperly
export default function NotUsed() {
    return (
        <div>
            <div className="grid grid-rows-6 grid-cols-4 gap-4 rounded-none border-black border-2 border-solid">
            <div className="border-l-2">01</div>
            <div>09</div>
            </div>            
            <div className="grid grid-rows-12 grid-cols-6 gap-4 rounded-none border-black border-2 border-solid">
            <div className="border-l-2 grid-colspan-6">01</div>
            <div>09</div>
            </div>            
        </div>
    );
}