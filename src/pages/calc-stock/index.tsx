import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";

import { calcValueState } from "../../libs/recoil/atom";
import { calcCompanyValue } from "../../libs/service/calc-value";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { PostData } from "../../libs/client/interfaces/post-data";
import { Modal } from "@mui/material";

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

    const openModal = (data: PostData) => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    const calcValue = async (data: PostData) => {
        setModalIsOpen(true);
        const result = await calcCompanyValue(data);
        setCalcValueResult(result);
    };

    const modal = (
        <>
            <Modal
                open={modalIsOpen}
                onClose={closeModal}
                className="flex h-100 w-80 mx-auto items-center justify-center"
            >
                <div className="px-10 py-8 w-96 border rounded-lg bg-white">
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
            </Modal>
        </>
    );

    return (
        <>
            <Header />
            <main className="h-screen dark:bg-black dark:text-gray-400">
                <h1 className="text-2xl">{t("index.calcTitle")}</h1>
                <form
                    className="px-10 py-8 w-72 mx-auto"
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
                {modal}
            </main>
            <Footer />
        </>
    );
};

export default Calc;
