"use client";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import RadioButtonList from "../components/RadioButtonList";
import { CHECKSTOCKCONTENT } from "../../utils/CheckStockContent";
import ModalComponent from "../components/ModalComponent";
import { checkStockState } from "../libs/recoil/atom";
import { useRecoilState } from "recoil";
import { getCheckStockResult } from "../../utils/getCheckStockResult";

const CheckStock = () => {
    const { register, handleSubmit, reset } = useForm();
    const [checkStockResult, setCheckStockResult] =
        useRecoilState(checkStockState);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const closeModal = () => {
        setModalIsOpen(false);
    };
    const onSubmit = (data: any) => {
        const result = getCheckStockResult(data);
        setCheckStockResult(result);
        setModalIsOpen(true);
    };
    return (
        <>
            <main className="h-screen overflow-auto dark:bg-black dark:text-gray-400">
                <form
                    className="p-3 dark:bg-black dark:text-gray-400"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {CHECKSTOCKCONTENT.map((content, key) => (
                        <div
                            key={key}
                            className="sm:mx-10 lg:mx-auto lg:w-1/2 border rounded dark:border-gray-400 dark:bg-gray-800 p-3 mb-3"
                        >
                            <RadioButtonList
                                RadioButtonContent={content}
                                register={register}
                            />
                        </div>
                    ))}
                    <input
                        type="submit"
                        className="block bg-[#2e7d32] hover:bg-[#1b5e20] text-white w-14 py-1 px-3 rounded w-16 mx-auto my-5"
                    />
                </form>
                <ModalComponent isOpen={modalIsOpen} closeModal={closeModal}>
                    <div className="px-10 py-8 w-96 border rounded-lg bg-white">
                        {Object.values(checkStockResult).map((result, key) => (
                            <p key={key} className="text-center">
                                {result}
                            </p>
                        ))}
                    </div>
                </ModalComponent>
            </main>
        </>
    );
};

export default CheckStock;
