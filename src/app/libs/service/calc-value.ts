import { ScouterData, PostData } from '../../../types/post-data';
import { CalcValueResult } from '../recoil/atom';

export interface DfcCalculatorReturn {
  pv: number;
  excessPV: number;
  costPV: number;
}

export const calcCompanyValueByShikiho = async <T extends PostData>(params: T) => {
  const { buyPrice, profit, depreciation, investing, equity, debt } = params;
  const freeCachFlow = profit + depreciation - investing;
  const investedCapital = equity + debt;
  const roic = Number((freeCachFlow / investedCapital).toFixed(2));
  return {
    marketCapital: buyPrice,
    ...(await dfcCalculator(freeCachFlow, roic, 10)),
  };
};

export const calcCompanyValueByScoutor = async <T extends ScouterData>(
  data: T,
): Promise<CalcValueResult> => {
  const {
    buyPrice,
    profit,
    depreciation,
    investing,
    equity,
    currentAsset,
    securities,
    debt,
  } = data;

  const netCash = Number(currentAsset) + Number(securities) * 0.7 - Number(debt);
  const freeCachFlow = profit + depreciation - investing;
  const investedCapital = equity + debt;
  const roic = Number((freeCachFlow / investedCapital).toFixed(2));
  console.log(freeCachFlow, roic);
  return {
    marketCapital: buyPrice,
    ...(await dfcCalculator(freeCachFlow, roic, 10)),
  };
};

export const dfcCalculator = async (
  fcf: number,
  roic: number,
  year: number,
): Promise<DfcCalculatorReturn> => {
  const investing = Math.ceil(fcf / roic);
  const capitalCost = 0.1;
  const excessReturn = Math.ceil(roic - capitalCost);
  const excessProfit = investing * excessReturn;
  const cost = investing * capitalCost;
  let pv = 0;
  let excessPV = 0;
  let costPV = 0;
  for (let i = 0; i < year; i++) {
    excessPV += excessProfit / 1.1 ** (year + 1);
    costPV += cost / 1.1 ** (year + 1);
  }
  excessPV += excessProfit / 0.1 / 1.1 ** 6;
  costPV += cost / 0.1 / 1.1 ** 6;
  pv = excessPV + costPV;
  return new Promise<DfcCalculatorReturn>((resolve) => {
    resolve({
      pv: Math.ceil(pv),
      excessPV: Math.ceil(excessPV),
      costPV: Math.ceil(costPV),
    });
  });
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
  commonRatio: number,
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
  overReturn: number,
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
