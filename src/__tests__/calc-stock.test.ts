import { expect, test } from "vitest";
import { calcCompanyValue } from "../app/libs/service/calc-value";

// test("安い企業", () => {
//     expect(
//         calcCompanyValue({
//             buyPrice: 1000,
//             profit: 1000,
//             depreciation: 500,
//             investing: 0,
//             roic: 15,
//             cash: 1000,
//             equity: 10000,
//         }).isValue
//     ).toEqual(false);
// });
// test("高い企業", () => {
//     expect(
//         calcCompanyValue({
//             buyPrice: 10000,
//             profit: 100,
//             depreciation: 0,
//             investing: 1,
//             roic: 10,
//             cash: 1000,
//             equity: 10000,
//         }).isValue
//     ).toBe(true);
// });
