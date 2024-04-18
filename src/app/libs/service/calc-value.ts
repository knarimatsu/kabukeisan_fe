import { PostData } from "../../../types/post-data";

export const calcCompanyValue = (data: PostData) => {
    const { buyPrice, profit, depreciation, investing, roic } = data;
    const wacc = 0.1;
    const overReturn: number = roic / 100 - wacc;
    const calcPv = (profit: number): number => {
        let pv = 0;
        for (let i = 0; i < 10; i++) {
            pv = pv + Number(profit) / (1 + wacc) ** i;
        }
        pv += Number(profit) / wacc / (1 + wacc) ** 10;
        pv = Math.round(pv);
        return pv;
    };
    const fcf: number =
        Number(profit) + Number(depreciation) - Number(investing);
    const decadePv: number = calcPv(fcf);
    const eternalPv = sumInfiniteGeometricSeries(fcf, 0.05);
    const isValue = () => {
        const buyPricePvRatio = Number(buyPrice) / decadePv;
        if (buyPricePvRatio <= 1 && buyPricePvRatio > 0 && overReturn > 0) {
            return "安い";
        } else {
            return "高い";
        }
    };
    return {
        decadePv: decadePv,
        eternalPv: eternalPv,
        isValue: isValue(),
    };
};

export const sumInfiniteGeometricSeries = (
    firstTerm: number,
    commonRatio: number
): number => {
    return Math.round(firstTerm * (1 / (1 - 1 / (1 + commonRatio))));
};
