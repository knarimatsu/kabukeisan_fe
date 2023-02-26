import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";

import { calcValueState } from "../../libs/recoil/atom";
import { calcCompanyValue } from "../../libs/service/calc-value";

interface PostData {
    buyPrice: number;
    profit: number;
    depreciation: number;
    investing: number;
    roic: number;
}
const Calc = () => {
    const { register, handleSubmit } = useForm<PostData>({
        mode: "onSubmit",
    });
    const { t } = useTranslation();
    const [calcValueResult, setCalcValueResult] =
        useRecoilState(calcValueState);
    const calcValue = async (data: PostData) => {
        const result = await calcCompanyValue(data);
        setCalcValueResult(result);
    };

    return (
        <>
            <main className="h-screen">
                <h1 className="text-2xl m-3">{t("index.calcTitle")}</h1>
                <form
                    className="px-10 py-8 w-3/4 my-4 mx-auto border rounded-lg"
                    onSubmit={handleSubmit(calcValue)}
                >
                    <label htmlFor="buy-price" className="block my-5">
                        {t("calcValue.marketCap")}
                        <input
                            id="buy-price"
                            {...register("buyPrice")}
                            type="text"
                            className="block border w-full h-9 outline-none p-3 rounded-md"
                        />
                    </label>
                    <label htmlFor="profit" className="block my-5">
                        {t("calcValue.netProfit")}
                        <input
                            id="profit"
                            {...register("profit")}
                            type="text"
                            className="block border w-full h-9 outline-none p-3 rounded-md"
                        />
                    </label>
                    <label htmlFor="depreciation" className="block my-5">
                        {t("calcValue.depreciation")}
                        <input
                            id="depreciation"
                            {...register("depreciation")}
                            type="text"
                            className="block border w-full h-9 outline-none p-3 rounded-md"
                        />
                    </label>
                    <label htmlFor="investing" className="block my-5">
                        {t("calcValue.investing")}
                        <input
                            id="investing"
                            {...register("investing")}
                            type="text"
                            className="block border w-full h-9 outline-none p-3 rounded-md"
                        />
                    </label>
                    <label htmlFor="roic" className="block my-5">
                        {t("calcValue.roic")}
                        <input
                            id="roic"
                            {...register("roic")}
                            type="text"
                            className="block border w-full h-9 outline-none p-3 rounded-md"
                        />
                    </label>
                    <div className="mx-auto w-24">
                        <input
                            type="submit"
                            className="border py-1 w-full"
                            value={t("button.send") as string}
                        />
                    </div>
                </form>
                {calcValueResult.isValue !== "" && (
                    <div className="px-10 py-8 w-3/4 my-4 mx-auto border rounded-lg">
                        <p>
                            {t("calcValue.companyValue")}: {calcValueResult.pv}
                        </p>
                        <p>
                            {t("calcValue.overReturnValue")}:{" "}
                            {calcValueResult.overPv}
                        </p>
                        <p>
                            {t("calcValue.cost")}: {calcValueResult.cost}
                        </p>
                        <p>
                            {t("calcValue.isValue")}: {calcValueResult.isValue}
                        </p>
                    </div>
                )}
            </main>
        </>
    );
};

export default Calc;
