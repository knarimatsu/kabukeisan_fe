"use client";
import { useForm } from "react-hook-form";
import { CalcData } from "../../types/CalcData";
import { useRecoilState } from "recoil";
import { onkabuResultState } from "../libs/recoil/atom";
import React, { useState } from "react";
import ModalComponent from "../components/ModalComponent";
import axios from "axios";
import TelForm from "../components/Forms/TelForm";

const Onkabu = () => {
    const { register, handleSubmit } = useForm<CalcData>({
        mode: "onSubmit",
    });
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const closeModal = () => {
        setModalIsOpen(false);
    };
    const [onkabuResult, setOnkabuResult] = useRecoilState(onkabuResultState);
    const calcOnkabu = async (data: CalcData) => {
        const onkabuResult = await axios.get(
            `/api/onkabu?buy=${data.buyPrice}&now=${data.nowPrice}&stock=${data.stock}`
        );
        setOnkabuResult(onkabuResult.data.data);
        setModalIsOpen(true);
    };
    return (
        <>
            <main className="h-screen overflow-auto dark:bg-black dark:text-gray-400">
                <h1 className="text-2xl text-center">{"恩株計算"}</h1>
                <form
                    className="w-80 sm:w-96 px-10 py-8 my-4 mx-auto border rounded-lg dark:bg-gray-900"
                    onSubmit={handleSubmit(calcOnkabu)}
                >
                    <TelForm label="取得株数" register={register("stock")} />
                    <TelForm label="取得株価" register={register("buyPrice")} />
                    <TelForm label="現在株価" register={register("nowPrice")} />
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
