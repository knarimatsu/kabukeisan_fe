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
    default: {
        question1: "",
        question2: "",
        question3: "",
        question4: "",
        question5: "",
        question6: "",
        question7: "",
        question8: "",
        question9: "",
        question10: "",
        question11: "",
        question12: "",
        question13: "",
        question14: "",
        question15: "",
    },
});
