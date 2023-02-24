import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { CalcData } from "../../libs/client/interfaces/calc-data";
import { calcOnkabu } from "../api/onkabu";

const Onkabu = () => {
    const { register, handleSubmit } = useForm<CalcData>({
        mode: "onSubmit",
    });
    const post = (data: CalcData) => {
        console.log(data);
        // calcOnkabu(data);
    };
    const { t } = useTranslation();
    return (
        <main className="h-screen">
            <h1 className="text-2xl m-3">{"Onkabu"}</h1>
            <form
                className="px-10 py-8 w-3/4 my-4 mx-auto border rounded-lg"
                onSubmit={handleSubmit(post)}
            >
                <label htmlFor="stock" className="block my-5">
                    {t("onkabu.stockAmount")}
                    <input
                        id="stock"
                        type="text"
                        {...register("stock")}
                        className="block border w-full h-9 outline-none p-3 rounded-md"
                    />
                </label>
                <label htmlFor="buy-price" className="block my-5">
                    取得株価
                    <input
                        id="buy-price"
                        type="text"
                        {...register("buyPrice")}
                        className="block border w-full h-9 outline-none p-3 rounded-md"
                    />
                </label>
                <label htmlFor="now-price" className="block my-5">
                    現在株価
                    <input
                        id="now-price"
                        type="text"
                        {...register("nowPrice")}
                        className="block border w-full h-9 outline-none p-3 rounded-md"
                    />
                </label>
                <div className="mx-auto w-1/3">
                    <input type="submit" className="border py-1 w-full" />
                </div>
            </form>
        </main>
    );
};

export default Onkabu;
