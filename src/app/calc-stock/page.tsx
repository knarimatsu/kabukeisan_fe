"use client";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";

import { calcValueState } from "../libs/recoil/atom";
import React, { useState } from "react";
import ModalComponent from "../components/ModalComponent";
import { PostData } from "../../types/post-data";
import TextForm from "../components/TextForm";
import axios from "axios";

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
        const result = await axios.get(
            `/api/calc-stock?buyPrice=${data.buyPrice}&profit=${data.profit}&depreciation=${data.depreciation}&investing=${data.investing}&roic=${data.roic}`
        );
        setModalIsOpen(true);
        console.log(result);
        setCalcValueResult(result.data.body);
    };

    const modalContent = (
        <div className="px-10 py-8 w-96 border rounded-lg bg-white">
            <p>
                {"10年間企業価値"}: {calcValueResult.decadePv}
            </p>
            <p>
                {"企業価値"}: {calcValueResult.eternalPv}
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
                    className="sm:w-96 px-10 py-8 my-4 mx-auto border rounded-lg dark:bg-gray-900"
                    onSubmit={handleSubmit(calcValue)}
                >
                    <TextForm
                        label="時価総額"
                        register={register("buyPrice")}
                    />
                    <TextForm
                        label="当期純利益"
                        register={register("profit")}
                    />
                    <TextForm
                        label="減価償却費"
                        register={register("depreciation")}
                    />
                    <TextForm
                        label="設備投資"
                        register={register("investing")}
                    />
                    <TextForm label="ROIC" register={register("roic")} />
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
