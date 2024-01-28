"use client";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { CalcData } from "../../types/CalcData";
import { useRecoilState } from "recoil";
import { onkabuResultState } from "../../libs/recoil/atom";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import ModalComponent from "../../components/ModalComponent";

const Header = dynamic(() => import("../../components/Header"));
const Footer = dynamic(() => import("../../components/Footer"));

const Onkabu = () => {
    const { register, handleSubmit } = useForm<CalcData>({
        mode: "onSubmit",
    });
    const { t } = useTranslation();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const closeModal = () => {
        setModalIsOpen(false);
    };
    const [onkabuResult, setOnkabuResult] = useRecoilState(onkabuResultState);
    const calcOnkabu = (data: CalcData): void => {
        const buy = Number(data.buyPrice);
        const now = Number(data.nowPrice);
        const stock = Number(data.stock);
        const onkabu = Math.round(
            stock - (((now - buy) * 0.79685) / now) * stock
        );

        if (onkabu < stock) {
            setOnkabuResult(onkabu + "株売却してください");
        } else {
            setOnkabuResult("恩株は作れません");
        }
        setModalIsOpen(true);
    };
    return (
        <>
            <Header />
            <main className="h-screen dark:bg-black dark:text-gray-400">
                <h1 className="text-2xl ">{"Onkabu"}</h1>
                <form
                    className="w-96 px-10 py-8 my-4 mx-auto border rounded-lg dark:bg-gray-900"
                    onSubmit={handleSubmit(calcOnkabu)}
                >
                    <label htmlFor="stock" className="block my-5">
                        {t("onkabu.stockAmount")}
                        <input
                            id="stock"
                            type="text"
                            {...register("stock")}
                            className="block border w-full h-9 outline-none p-3 rounded-md dark:bg-gray-700"
                        />
                    </label>
                    <label htmlFor="buy-price" className="block my-5">
                        {t("onkabu.stockPrice")}
                        <input
                            id="buy-price"
                            type="text"
                            {...register("buyPrice")}
                            className="block border w-full h-9 outline-none p-3 rounded-md dark:bg-gray-700"
                        />
                    </label>
                    <label htmlFor="now-price" className="block my-5">
                        {t("onkabu.nowPrice")}
                        <input
                            id="now-price"
                            type="text"
                            {...register("nowPrice")}
                            className="block border w-full h-9 outline-none p-3 rounded-md dark:bg-gray-700"
                        />
                    </label>
                    <div className="mx-auto w-1/3">
                        <input
                            type="submit"
                            className="border py-1 w-full"
                            value={t("button.send") as string}
                        />
                    </div>
                </form>
                <ModalComponent isOpen={modalIsOpen} closeModal={closeModal}>
                    <div className="px-10 py-8 w-96 border rounded-lg bg-white">
                        {onkabuResult}
                    </div>
                </ModalComponent>
            </main>
            <Footer />
        </>
    );
};

export default Onkabu;
