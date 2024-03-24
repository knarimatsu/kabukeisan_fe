"use client";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { CalcData } from "../../types/CalcData";
import { useRecoilState } from "recoil";
import { onkabuResultState } from "../libs/recoil/atom";
import React, { useState } from "react";
import ModalComponent from "../components/ModalComponent";

const Onkabu = () => {
    const { register, handleSubmit } = useForm<CalcData>({
        mode: "onSubmit",
    });
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
            <main className="h-screen dark:bg-black dark:text-gray-400">
                <h1 className="text-2xl ">{"恩株計算"}</h1>
                <form
                    className="sm:w-96 px-10 py-8 my-4 mx-auto border rounded-lg dark:bg-gray-900"
                    onSubmit={handleSubmit(calcOnkabu)}
                >
                    <label htmlFor="stock" className="block my-5">
                        {"取得株数"}
                        <input
                            id="stock"
                            type="text"
                            {...register("stock")}
                            className="
                                block border outline-none py-1 px-3 rounded-md
                                h-11 w-full text-lg
                                dark:bg-gray-700
                            "
                        />
                    </label>
                    <label htmlFor="buy-price" className="block my-5">
                        {"取得株価"}
                        <input
                            id="buy-price"
                            type="text"
                            {...register("buyPrice")}
                            className="
                                block border outline-none py-1 px-3 rounded-md
                                h-11 w-full text-lg
                                dark:bg-gray-700
                            "
                        />
                    </label>
                    <label htmlFor="now-price" className="block my-5">
                        {"現在株価"}
                        <input
                            id="now-price"
                            type="text"
                            {...register("nowPrice")}
                            className="
                                block border outline-none py-1 px-3 rounded-md
                                h-11 w-full text-lg
                                dark:bg-gray-700
                            "
                        />
                    </label>
                    <div className="mx-auto w-1/3">
                        <input
                            type="submit"
                            // className="border py-1 w-full"
                            className="
                                block bg-[#2e7d32] text-white
                                w-14 py-1 px-3 rounded w-16 mx-auto my-5
                                hover:bg-[#1b5e20]
                            "
                            value={"送信"}
                        />
                    </div>
                </form>
                <ModalComponent isOpen={modalIsOpen} closeModal={closeModal}>
                    <div className="px-10 py-8 w-96 border rounded-lg bg-white">
                        {onkabuResult}
                    </div>
                </ModalComponent>
            </main>
        </>
    );
};

export default Onkabu;
