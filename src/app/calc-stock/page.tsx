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
import { Switch } from "@mui/material";

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
            `/api/calc-stock?buyPrice=${data.buyPrice}&profit=${data.profit}&depreciation=${data.depreciation}&investing=${data.investing}&roic=${data.roic}&cash=${data.cash}&equity=${data.equity}`
        );
        setModalIsOpen(true);
        setCalcValueResult(result.data.body);
    };

    const modalContent = (
        <div className="px-10 py-8 w-96 border rounded-lg bg-white">
            <p>
                {"10年間企業価値"}: {calcValueResult.decadePv.toLocaleString()}
            </p>
            <p className="text-xl font-black text-emerald-500">
                {"時価総額の"}: {`${calcValueResult.decadePvRatio}倍`}
            </p>
            <hr />
            <p>
                {"永続企業価値"}: {calcValueResult.eternalPv.toLocaleString()}
            </p>
            <p className="text-xl font-black text-emerald-500">
                {"時価総額の"}: {`${calcValueResult.eternalPvRatio}倍`}
            </p>
            <hr />
            <p>
                {"株主資本"}: {calcValueResult.eternalPv.toLocaleString()}
            </p>
            <p className="text-xl font-black text-emerald-500">
                {"時価総額の"}: {`${(1 / calcValueResult.pbr).toFixed(2)}倍`}
            </p>
            <p>
                {"PBR"}: {`${calcValueResult.pbr}`}
            </p>
            <hr />
            <p>
                {"PER"}: {`${calcValueResult.per}`}
            </p>
        </div>
    );

    return (
        <>
            <main className="h-screen overflow-auto dark:bg-black dark:text-gray-400">
                {/* <h1 className="text-2xl">{t("index.calcTitle")}</h1> */}
                <h1 className="text-2xl text-center">{"企業価値計算"}</h1>
                <form
                    className="sm:w-96 px-10 py-8 my-4 mx-auto border rounded-lg dark:bg-gray-900"
                    onSubmit={handleSubmit(calcValue)}
                >
                    <TextForm
                        label="時価総額(百万)"
                        register={register("buyPrice")}
                    />
                    <TextForm
                        label="当期純利益(百万)"
                        register={register("profit")}
                    />
                    <TextForm
                        label="減価償却費(百万)"
                        register={register("depreciation")}
                    />
                    <TextForm
                        label="設備投資(百万)"
                        register={register("investing")}
                    />
                    <TextForm label="ROIC(%)" register={register("roic")} />
                    <TextForm label="現金(百万)" register={register("cash")} />
                    <TextForm
                        label="純資産(百万)"
                        register={register("equity")}
                    />
                    <div className="mx-auto w-24">
                        <input
                            type="submit"
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
