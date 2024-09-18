import { atom } from 'recoil';

export interface CalcValueResult {
  marketCapital: number;
  excessPV: number;
  pv: number;
  costPV: number;
}

export const onkabuResultState = atom({
  key: 'onkabuResultState',
  default: '',
});

export const calcValueStateByShikiho = atom({
  key: 'calcValueStateBySikiho',
  default: {
    marketCapital: 0,
    excessPV: 0,
    pv: 0,
    costPV: 0,
  },
});

export const calcValueStateByScouter = atom({
  key: 'calcValueStateByScouter',
  default: {
    marketCapital: 0,
    excessPV: 0,
    pv: 0,
    costPV: 0,
  },
});

export const checkStockState = atom({
  key: 'checkStockState',
  default: { result: '' },
});
