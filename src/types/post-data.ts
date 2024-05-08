import Scouter from "../app/calc-stock/Scouter";
export type PostData = {
    buyPrice: number;
    profit: number;
    depreciation: number;
    investing: number;
    roic: number;
    cash: number;
    equity: number;
};

export interface ScouterData extends PostData {
    currentAsset?: number;
    debt?: number;
    securities?: number;
}

export interface CalcValueResultModalProp {
    decadePv: number;
    eternalPv: number;
    isValue: string;
    eternalPvRatio: number;
    decadePvRatio: number;
    per: number;
    pbr: number;
    nuetralPER?: number;
}
