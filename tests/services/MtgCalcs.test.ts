import {describe, it} from "$std/testing/bdd.ts";
import { assertEquals } from "$std/assert/assert_equals.ts";
import { deckTypeOptions } from "../../services/MtgCalcs.ts";

describe("MtgCalcs", () => {
    describe("deckTypeOptions['Limited']", () => {
        const limited = deckTypeOptions[1];

        [
            {expected: 18, avgCmc: 4, rampCount: 0, hasCompanion: false},
            {expected: 17, avgCmc: 4, rampCount: 3, hasCompanion: false},
            {expected: 17, avgCmc: 3, rampCount: 0, hasCompanion: false},
            {expected: 17, avgCmc: 2.75, rampCount: 0, hasCompanion: false},
            {expected: 16, avgCmc: 2.65, rampCount: 0, hasCompanion: false},
            {expected: 15, avgCmc: 2.5, rampCount: 3, hasCompanion: false},
        ].forEach(scenario => {

            it(`for avgCmc ${scenario.avgCmc}, rampCount ${scenario.rampCount}, hasCompanion ${scenario.hasCompanion} should result in ${scenario.expected} lands`, () => {
                const avgCmc = scenario.avgCmc;
                const rampCount = scenario.rampCount;
                const hasCompanion = scenario.hasCompanion;
                const landCount = Math.floor(limited.landCalc(avgCmc, rampCount, hasCompanion) + 0.5);

                assertEquals(scenario.expected, landCount);
            });
        })
    });
});