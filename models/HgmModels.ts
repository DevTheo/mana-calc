// Adapted from https://github.com/blakescode/hypergeometric-calculator/

export type TableEntry = {
    description: string;
    probability: number;
};

export type HgmParameters = {
    populationSize: number;
    populationSuccesses: number;
    sampleSize: number;
    sampleSuccesses: number;
};

export type HgmResults = {
    equal: number;
    lessThan: number;
    lessThanOrEqual: number;
    greaterThan: number;
    greaterThanOrEqual: number;
};