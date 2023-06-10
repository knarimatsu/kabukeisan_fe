import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";

import { calcValueState } from "../../libs/recoil/atom";
import { calcCompanyValue } from "../../libs/service/calc-value";
import axios from "axios";

type RequestForm = {
    code: string;
};
const AccountData = () => {
    const { register, handleSubmit } = useForm<RequestForm>({
        mode: "onSubmit",
    });
    const { t } = useTranslation();

    const getAccountData = async (data: RequestForm) => {
        axios
            .post(
                "https://doxwggiuyc.execute-api.ap-northeast-1.amazonaws.com/dev/get-account-data",
                { code: data.code },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "x-api-key": "Vu1kj7ojWi9mSKRnyrjE88T9f0sMzYas9IUqDGsD",
                    },
                }
            )
            .then((res) => {
                console.log(res.data);
            });
    };
    return (
        <main className="h-screen">
            <h1 className="text-2xl m-3">{t("index.calcTitle")}</h1>
            <form
                className="px-10 py-8 w-3/4 my-4 mx-auto border rounded-lg"
                onSubmit={handleSubmit(getAccountData)}
            >
                <label htmlFor="buy-price" className="block my-5">
                    {t("calcValue.marketCap")}
                    <input
                        id="buy-price"
                        {...register("code")}
                        type="text"
                        className="block border w-full h-9 outline-none p-3 rounded-md"
                    />
                </label>
                <button
                    className="mx-auto bg-blue-500 hover:bg-blue-700
                    text-white font-bold py-2 px-4 rounded"
                    type="submit"
                >
                    {t("index.calcTitle")}
                </button>
            </form>
        </main>
    );
};

export default AccountData;
