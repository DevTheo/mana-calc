import Grid from "../components/Grid.tsx";
import Column from "../components/Column.tsx";
import ManaSymbol, { ManaSymbolType } from "../components/ManaSymbol.tsx";
import WUDetails from "../components/otj/wudetails.tsx";
import BGDetails from "../components/otj/bgdetails.tsx";
import BRDetails from "../components/otj/brdetails.tsx";
import RGDetails from "../components/otj/rgdetails.tsx";
import GWDetails from "../components/otj/gwdetails.tsx";
import GUDetails from "../components/otj/gudetails.tsx";
import RWDetails from "../components/otj/rwdetails.tsx";
import URDetails from "../components/otj/urdetails.tsx";
import WBDetails from "../components/otj/wbdetails.tsx";
import UBDetails from "../components/otj/ubdetails.tsx";

export default function GridTest() {

    return (
        <div>
          <h3>Limited Archetypes (Outlaws)</h3>
          <Grid rowCount={6} columnCount={4} className="rounded-none border-black border-2 border-solid m-10">
            {/* Row 1 */}
            <Column row={1} col={1} className="text-left font-bold border-b-2 border-black">Colors</Column>
            <Column row={1} col={2} className="text-center font-bold pr-1 rounded-none border-r-2 border-b-2 border-black">Archetype</Column>
            <Column row={1} col={3} className="text-center font-bold border-b-2 border-black">Colors</Column>
            <Column row={1} col={4} className="text-left font-bold border-b-2 border-black" border-b-2 border-black>Archetype</Column>
            
            {/* Row 2 */}
            <Column className="text-center bg-amber-50 border-b-2 border-black">
              <ManaSymbol type={ManaSymbolType.White} />
              <ManaSymbol type={ManaSymbolType.Blue} />
            </Column>
            <Column className="text-left bg-amber-50 pr-1 rounded-none border-r-2 pb-1 border-black border-b-2">
              <p>"No Spells"/Plot</p>
              <WUDetails />
            </Column>
            <Column className="text-center bg-amber-50 pb-1 border-b-2 border-black">
                <ManaSymbol type={ManaSymbolType.Blue} />
                <ManaSymbol type={ManaSymbolType.Black} />
            </Column>
            <Column className="text-left bg-amber-50 border-b-2 border-black">
              <p>Crime Control</p>
              <UBDetails />
            </Column>

            {/* Row 3 */}
            <Column className="text-center border-b-2 border-black">
                <ManaSymbol type={ManaSymbolType.Black} />
                <ManaSymbol type={ManaSymbolType.Red} />
            </Column>
            <Column className="text-left pr-1 rounded-none border-r-2 border-b-2 border-black">
              <p>Outlaws</p>
              <BRDetails />
            </Column>
            <Column className="text-center border-b-2 border-black">
              <ManaSymbol type={ManaSymbolType.Red} />
              <ManaSymbol type={ManaSymbolType.Green} />
            </Column>
            <Column className="text-left border-b-2 border-black">
              <p>Ferocious (power 4+)</p>
              <RGDetails />
            </Column>

            {/* Row 4 */}
            <Column className="text-center bg-amber-50 border-b-2 border-black">
              <ManaSymbol type={ManaSymbolType.Green} />
              <ManaSymbol type={ManaSymbolType.White} />
            </Column>
            <Column className="text-left bg-amber-50 pr-1 border-r-2 border-b-2 border-black">
              <p>Mounts/Vehicles</p>
              <GWDetails />
            </Column>
            <Column className="text-center bg-amber-50 border-b-2 border-black">
                <ManaSymbol type={ManaSymbolType.White} />
                <ManaSymbol type={ManaSymbolType.Black} />
            </Column>
            <Column className="text-left bg-amber-50 border-b-2 border-black">
              <p>Sacrifice</p>
              <WBDetails />
            </Column>

            {/* Row 5 */}
            <Column className="text-center border-b-2 border-black">
                <ManaSymbol type={ManaSymbolType.Blue} />
                <ManaSymbol type={ManaSymbolType.Red} />
            </Column>
            <Column className="text-left pr-1 border-r-2 border-b-2 border-black">
              <p>Two or More Spells</p>
              <URDetails />
            </Column>
            <Column className="text-center border-b-2 border-black">
                <ManaSymbol type={ManaSymbolType.Black} />
                <ManaSymbol type={ManaSymbolType.Green} />
            </Column>
            <Column className="text-left border-b-2 border-black">
              <p>Recursion (from Graveyard)</p>
              <BGDetails />
            </Column>

            {/* Row 6 */}
            <Column className="text-center bg-amber-50 border-b-2 border-black">
              <ManaSymbol type={ManaSymbolType.Red} />
              <ManaSymbol type={ManaSymbolType.White} />
            </Column>
            <Column className="text-left bg-amber-50 pr-1 border-r-2 border-b-2 border-black">
              <p>Mercenary Aggro</p>
              <RWDetails />
            </Column>
            <Column className="text-center bg-amber-50 border-b-2 border-black">
              <ManaSymbol type={ManaSymbolType.Green} />
              <ManaSymbol type={ManaSymbolType.Blue} />
            </Column>
            <Column className="text-left bg-amber-50 border-b-2 border-black">
              <p>Big Mana/Plot</p>
              <GUDetails />
            </Column>
          </Grid>
        </div>

    );
}