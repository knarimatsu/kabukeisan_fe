import { PostData } from "../../types/post-data";

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
    const pv: number = calcPv(fcf);
    const overPv: number = calcPv(fcf * (overReturn / (Number(roic) / 100)));
    const cost = calcPv(fcf * (wacc / (Number(roic) / 100)));
    const isValue = () => {
        const buyPricePvRatio = Number(buyPrice) / pv;
        if (buyPricePvRatio <= 1 && buyPricePvRatio > 0 && overReturn > 0) {
            return "安い";
        } else {
            return "高い";
        }
    };
    return {
        pv: pv,
        overPv: overPv,
        cost: cost,
        isValue: isValue(),
    };
};
