import { atom } from "recoil";

export const onkabuResultState = atom({
    key: "onkabuResultState",
    default: "",
});

export const calcValueState = atom({
    key: "calcValueState",
    default: {
        decadePv: 0,
        eternalPv: 0,
        isValue: "",
    },
});

export const checkStockState = atom({
    key: "checkStockState",
    default: { result: "" },
});
