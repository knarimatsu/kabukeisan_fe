import { PostData } from "../../../types/post-data";

export const calcCompanyValue = (data: PostData) => {
    const { buyPrice, profit, depreciation, investing, roic, cash, equity } =
        data;
    const wacc = 0.1;
    const interest = 0.05;
    const overReturn: number = roic / 100 - wacc;
    const fcf: number =
        Number(profit) + Number(depreciation) - Number(investing);
    const decadePv: number = calcDecadePv(fcf);
    const eternalPv = sumInfiniteGeometricSeries(fcf, 1 / (1 + interest));

    return {
        decadePv: decadePv,
        eternalPv: eternalPv,
        isValue: isValue(buyPrice, decadePv, overReturn),
        eternalPvRatio: calcTime(eternalPv, buyPrice),
        decadePvRatio: calcTime(decadePv, buyPrice),
        pbr: calcTime(buyPrice, Number(equity)),
        per: calcTime(buyPrice, Number(profit)),
    };
};

/**
 * 10年間の企業価値を計算する関数
 * @param profit キャッシュフロー
 * @returns
 */
export const calcDecadePv = (profit: number): number => {
    const interest = 0.05;
    let pv = 0;
    for (let i = 0; i < 10; i++) {
        pv = pv + profit / (1 + interest) ** i;
    }
    pv += profit / interest / (1 + interest) ** 10;
    pv = Math.round(pv);
    return pv;
};

/**
 *　無限等比級数の和
 * @param firstTerm 初項
 * @param commonRatio 公比
 * @returns
 */
export const sumInfiniteGeometricSeries = (
    firstTerm: number,
    commonRatio: number
): number => {
    return Math.round(firstTerm / (1 - commonRatio));
};

/**
 * 時価総額と比べて安いかどうか
 * @param buyPrice 時価総額
 * @param decadePv 10年後の企業価値
 * @param overReturn 超過利益
 * @returns
 */
export const isValue = (
    buyPrice: number,
    decadePv: number,
    overReturn: number
): boolean => {
    const buyPricePvRatio = buyPrice / decadePv;
    if (buyPricePvRatio <= 1 && buyPricePvRatio > 0 && overReturn > 0) {
        return true;
    } else {
        return false;
    }
};

export const calcTime = (numerator: number, denominator: number): number => {
    return Number((numerator / denominator).toFixed(2));
};
