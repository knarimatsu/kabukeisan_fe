"use client";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";

import { calcValueState } from "../libs/recoil/atom";
import { calcCompanyValue } from "../libs/service/calc-value";
import React, { useState } from "react";
import ModalComponent from "../components/ModalComponent";
import { PostData } from "../../types/post-data";

const Calc = () => {
    const { register, handleSubmit } = useForm<PostData>({
        mode: "onSubmit",
    });

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { t } = useTranslation();
    const [calcValueResult, setCalcValueResult] =
        useRecoilState(calcValueState);

    const closeModal = () => {
        setModalIsOpen(false);
    };
    const calcValue = async (data: PostData) => {
        setModalIsOpen(true);
        const result = await calcCompanyValue(data);
        setCalcValueResult(result);
    };

    const modalContent = (
        <div className="px-10 py-8 w-96 border rounded-lg bg-white">
            <p>
                {"企業価値"}: {calcValueResult.pv}
            </p>
            <p>
                {"超過リターン価値"}: {calcValueResult.overPv}
            </p>
            <p>
                {"コスト"}: {calcValueResult.cost}
            </p>
            <p>
                {"割安感"}: {calcValueResult.isValue}
            </p>
        </div>
    );

    return (
        <>
            <main className="h-screen dark:bg-black dark:text-gray-400">
                {/* <h1 className="text-2xl">{t("index.calcTitle")}</h1> */}
                <h1 className="text-2xl">{"企業価値計算"}</h1>
                <form
                    className="w-96 px-10 py-8 my-4 mx-auto border rounded-lg dark:bg-gray-900"
                    onSubmit={handleSubmit(calcValue)}
                >
                    <label htmlFor="buy-price" className="block my-5">
                        {"時価総額"}
                        <input
                            id="buy-price"
                            {...register("buyPrice")}
                            type="text"
                            className="block border w-full h-9 outline-none p-3 rounded-md"
                        />
                    </label>
                    <label htmlFor="profit" className="block my-5">
                        {"当期純利益"}
                        <input
                            id="profit"
                            {...register("profit")}
                            type="text"
                            className="block border w-full h-9 outline-none p-3 rounded-md"
                        />
                    </label>
                    <label htmlFor="depreciation" className="block my-5">
                        {"減価償却費"}
                        <input
                            id="depreciation"
                            {...register("depreciation")}
                            type="text"
                            className="block border w-full h-9 outline-none p-3 rounded-md"
                        />
                    </label>
                    <label htmlFor="investing" className="block my-5">
                        {"設備投資"}
                        <input
                            id="investing"
                            {...register("investing")}
                            type="text"
                            className="block border w-full h-9 outline-none p-3 rounded-md"
                        />
                    </label>
                    <label htmlFor="roic" className="block my-5">
                        {"ROIC"}
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
                            // className="border py-1 w-full"
                            className="block bg-[#2e7d32] hover:bg-[#1b5e20] text-white w-14 py-1 px-3 rounded w-16 mx-auto my-5"
                            value={"送信"}
                        />
                    </div>
                </form>
                <ModalComponent isOpen={modalIsOpen} closeModal={closeModal}>
                    {modalContent}
                </ModalComponent>
            </main>
        </>
    );
};

export default Calc;
