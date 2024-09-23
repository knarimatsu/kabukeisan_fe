import { describe, expect, it } from 'vitest';
import {
  calcCompanyValueByScoutor,
  calcCompanyValueByShikiho,
  dfcCalculator,
  DfcCalculatorReturn,
} from '../../../../app/libs/service/calc-value';
import { PostData, ScouterData } from '../../../../types/post-data';
import { CalcValueResult } from '../../../../app/libs/recoil/atom';

describe('calc-value', () => {
  describe('calcCompanyValueByShikiho', async () => {
    const params: PostData = {
      buyPrice: 500,
      profit: 110,
      depreciation: 30,
      investing: 20,
      equity: 300,
      debt: 300,
    };
    const toBeData: CalcValueResult = {
      marketCapital: 500,
      excessPV: 812,
      pv: 1412,
      costPV: 600,
    };
    const expectData = await calcCompanyValueByShikiho(params);
    it('正しく計算できること', () => {
      expect(expectData).toStrictEqual(toBeData);
    });
  });

  describe('calcCompanyValueByScoutor', async () => {
    const params: ScouterData = {
      buyPrice: 500,
      profit: 110,
      depreciation: 30,
      investing: 20,
      equity: 300,
      debt: 300,
    };
    const toBeData: CalcValueResult = {
      marketCapital: 500,
      excessPV: 812,
      pv: 1412,
      costPV: 600,
    };
    const expectData = await calcCompanyValueByScoutor(params);
    it('正しく計算できること', () => {
      expect(expectData).toStrictEqual(toBeData);
    });
  });

  describe('dfcCalculator', async () => {
    const fcf = 120;
    const roic = 0.2;
    const expectData = await dfcCalculator(fcf, roic);
    const toBeData: DfcCalculatorReturn = {
      pv: 1412,
      excessPV: 812,
      costPV: 600,
    };
    it('正しく計算できること', () => {
      expect(expectData).toStrictEqual(toBeData);
    });
  });

  //   describe('calcDecadePv', () => {
  //     it('正しく計算できること');
  //   });

  //   describe('sumInfiniteGeometricSeries', () => {
  //     it('正しく計算できること');
  //   });

  //   describe('isValue', () => {
  //     it('正しく計算できること');
  //   });

  //   describe('calcTime', () => {
  //     it('正しく計算できること');
  //   });
});
