import Grid from "../components/Grid.tsx";
import Column from "../components/Column.tsx";

export default function GridTest() {

    return (
        <div>
          <h3>Limited Archetypes (Outlaws)</h3>
          <Grid rowCount={6} columnCount={4} className="rounded-none border-black border-2 border-solid m-10">
            {/* Row 1 */}
            <Column row={1} col={1} className="text-center font-bold">Colors</Column>
            <Column row={1} col={2} className="text-center font-bold pr-1 rounded-none border-r-2 border-black">Archetype</Column>
            <Column row={1} col={3} className="text-center font-bold">Colors</Column>
            <Column row={1} col={4} className="text-center font-bold">Archetype</Column>
            
            {/* Row 2 */}
            <Column className="text-center bg-amber-50">
              WU
            </Column>
            <Column className="text-center bg-amber-50 pr-1 rounded-none border-r-2 border-black">
              "No Spells"/Plot
            </Column>
            <Column className="text-center bg-amber-50">
              UB
            </Column>
            <Column className="text-center bg-amber-50">
              Crime Control
            </Column>

            {/* Row 3 */}
            <Column className="text-center">
              BR
            </Column>
            <Column className="text-center pr-1 rounded-none border-r-2 border-black">
              Outlaws
            </Column>
            <Column className="text-center">
              RG
            </Column>
            <Column className="text-center">
              Ferocious (power 4+)
            </Column>

            {/* Row 4 */}
            <Column className="text-center bg-amber-50">
              GW
            </Column>
            <Column className="text-center bg-amber-50 pr-1 border-r-2 border-black">
              Mounts/Vehicles
            </Column>
            <Column className="text-center bg-amber-50">
              WB
            </Column>
            <Column className="text-center bg-amber-50">
              Sacrifice
            </Column>

            {/* Row 5 */}
            <Column className="text-center">
              UR
            </Column>
            <Column className="text-center pr-1 border-r-2 border-black">
              Two or More Spells
            </Column>
            <Column className="text-center">
              BG
            </Column>
            <Column className="text-center">
              Recursion (from Graveyard)
            </Column>

            {/* Row 6 */}
            <Column className="text-center bg-amber-50">
              RW
            </Column>
            <Column className="text-center bg-amber-50 pr-1 border-r-2 border-black">
              Mercenary Aggro
            </Column>
            <Column className="text-center bg-amber-50">
              GU
            </Column>
            <Column className="text-center bg-amber-50">
              Big Mana/Plot
            </Column>
          </Grid>
        </div>

    );
}