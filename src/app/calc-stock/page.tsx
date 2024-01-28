"use client";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";

import { calcValueState } from "../../libs/recoil/atom";
import { calcCompanyValue } from "../../libs/service/calc-value";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import ModalComponent from "../../components/ModalComponent";
import { PostData } from "../../types/post-data";

const Header = dynamic(() => import("../../components/Header"));
const Footer = dynamic(() => import("../../components/Footer"));

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
                {t("calcValue.companyValue")}: {calcValueResult.pv}
            </p>
            <p>
                {t("calcValue.overReturnValue")}: {calcValueResult.overPv}
            </p>
            <p>
                {t("calcValue.cost")}: {calcValueResult.cost}
            </p>
            <p>
                {t("calcValue.isValue")}: {calcValueResult.isValue}
            </p>
        </div>
    );

    return (
        <>
            <Header />
            <main className="h-screen dark:bg-black dark:text-gray-400">
                <h1 className="text-2xl">{t("index.calcTitle")}</h1>
                <form
                    className="w-96 px-10 py-8 my-4 mx-auto border rounded-lg dark:bg-gray-900"
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
                <ModalComponent isOpen={modalIsOpen} closeModal={closeModal}>
                    {modalContent}
                </ModalComponent>
            </main>
            <Footer />
        </>
    );
};

export default Calc;
