import { useForm } from "react-hook-form";
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
    const [calcValueResult, setCalcValueResult] =
        useRecoilState(calcValueState);
    const calcValue = async (data: PostData) => {
        const result = await calcCompanyValue(data);
        setCalcValueResult(result);
    };

    return (
        <>
            <main className="h-screen">
                <h1 className="text-2xl m-3">企業価値計算</h1>
                <form
                    className="px-10 py-8 w-3/4 my-4 mx-auto border rounded-lg"
                    onSubmit={handleSubmit(calcValue)}
                >
                    <label htmlFor="buy-price" className="block my-5">
                        時価総額
                        <input
                            id="buy-price"
                            {...register("buyPrice")}
                            type="text"
                            className="block border w-full h-9 outline-none p-3 rounded-md"
                        />
                    </label>
                    <label htmlFor="profit" className="block my-5">
                        当期純利益
                        <input
                            id="profit"
                            {...register("profit")}
                            type="text"
                            className="block border w-full h-9 outline-none p-3 rounded-md"
                        />
                    </label>
                    <label htmlFor="depreciation" className="block my-5">
                        減価償却費
                        <input
                            id="depreciation"
                            {...register("depreciation")}
                            type="text"
                            className="block border w-full h-9 outline-none p-3 rounded-md"
                        />
                    </label>
                    <label htmlFor="investing" className="block my-5">
                        設備投資
                        <input
                            id="investing"
                            {...register("investing")}
                            type="text"
                            className="block border w-full h-9 outline-none p-3 rounded-md"
                        />
                    </label>
                    <label htmlFor="roic" className="block my-5">
                        ROIC
                        <input
                            id="roic"
                            {...register("roic")}
                            type="text"
                            className="block border w-full h-9 outline-none p-3 rounded-md"
                        />
                    </label>
                    <div className="mx-auto w-1/3">
                        <input type="submit" className="border py-1 w-full" />
                    </div>
                </form>
                {calcValueResult.isValue !== "" && (
                    <div className="px-10 py-8 w-3/4 my-4 mx-auto border rounded-lg">
                        <p>企業価値: {calcValueResult.pv}</p>
                        <p>企業の付加価値: {calcValueResult.overPv}</p>
                        <p>コスト: {calcValueResult.cost}</p>
                        <p>割安感: {calcValueResult.isValue}</p>
                    </div>
                )}
            </main>
        </>
    );
};

export default Calc;
