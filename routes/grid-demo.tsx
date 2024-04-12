import Grid from "../components/Grid.tsx";
import Column from "../components/Column.tsx";

export default function GridTest() {

    return (
        <div>
          <h3>Limited Archetypes (Outlaws)</h3>
          <Grid rowCount={6} columnCount={4} className="gap-4">
            {/* Row 1 */}
            <Column row={1} col={1} className="text-center text-bold">Colors</Column>
            <Column row={1} col={2} className="text-center text-bold">Archetype</Column>
            <Column row={1} col={3} className="text-center text-bold">Colors</Column>
            <Column row={1} col={4} className="text-center text-bold">Archetype</Column>
            {/* Row 2 */}
            <Column className="text-right">
              WU
            </Column>
            <Column className="text-left">
              "No Spells"/Plot
            </Column>
            <Column className="text-right">
              UB
            </Column>
            <Column className="text-left">
              Crime Control
            </Column>

            {/* Row 3 */}
            <Column className="text-right">
              BR
            </Column>
            <Column className="text-left">
              Outlaws
            </Column>
            <Column className="text-right">
              RG
            </Column>
            <Column className="text-left">
              Ferocious (power 4+)
            </Column>

            {/* Row 4 */}
            <Column className="text-right">
              GW
            </Column>
            <Column className="text-left">
              Mounts/Vehicles
            </Column>
            <Column className="text-right">
              WB
            </Column>
            <Column className="text-left">
              Sacrifice
            </Column>

            {/* Row 5 */}
            <Column className="text-right">
              UR
            </Column>
            <Column className="text-left">
              Two or More Spells
            </Column>
            <Column className="text-right">
              BG
            </Column>
            <Column className="text-left">
              Recursion (from Graveyard)
            </Column>

            {/* Row 6 */}
            <Column className="text-right">
              RW
            </Column>
            <Column className="text-left">
              Mercenary Aggro
            </Column>
            <Column className="text-right">
              GU
            </Column>
            <Column className="text-left">
              Big Mana/Plot
            </Column>
          </Grid>
        </div>

    );
}