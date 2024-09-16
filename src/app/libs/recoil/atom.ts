import { atom } from "recoil";

export const onkabuResultState = atom({
  key: "onkabuResultState",
  default: "",
});

export const calcValueStateByShikiho = atom({
  key: "calcValueStateBySikiho",
  default: {
    decadePv: 0,
    eternalPv: 0,
    isValue: "",
    eternalPvRatio: 0,
    decadePvRatio: 0,
    per: 0,
    pbr: 0,
  },
});

export const calcValueStateByScouter = atom({
  key: "calcValueStateByScouter",
  default: {
    decadePv: 0,
    eternalPv: 0,
    isValue: "",
    eternalPvRatio: 0,
    decadePvRatio: 0,
    per: 0,
    pbr: 0,
    nuetralPER: 0,
  },
});

export const checkStockState = atom({
  key: "checkStockState",
  default: { result: "" },
});
