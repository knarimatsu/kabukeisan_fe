import { atom } from "recoil";

export const onkabuResultState = atom({
    key: "onkabuResultState",
    default: "",
});

export const calcValueState = atom({
    key: "calcValueState",
    default: {
        pv: 0,
        overPv: 0,
        cost: 0,
        isValue: "",
    },
});

export const checkStockState = atom({
    key: "checkStockState",
    default: { result: "" },
});
