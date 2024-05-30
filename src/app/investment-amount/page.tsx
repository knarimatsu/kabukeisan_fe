"use client";
import React from "react";
import TelForm from "../components/Forms/TelForm";
import { useForm } from "react-hook-form";
import { InvestmentAmountData } from "../../types/InvestmentAmount";

const InvestmentAmount = () => {
    const { register, handleSubmit } = useForm<InvestmentAmountData>({
        mode: "onSubmit",
    });
    return (
        <main className="h-screen overflow-auto dark:bg-black dark:text-gray-400">
            <h1 className="text-2xl text-center mb-5">{"企業価値計算"}</h1>
            <form
                className="
                w-80 sm:w-96 px-10 py-8 my-4 mx-auto border rounded-lg dark:bg-gray-900"
                onSubmit={handleSubmit(() => console.log("hello"))}
            >
                <TelForm label="勝率" register={register("provability")} />
                <TelForm label="現在株価" register={register("nowPrice")} />
                <TelForm label="期待株価" register={register("expectReturn")} />
                <TelForm label="底値" register={register("expectLoss")} />
                <div className="mx-auto w-1/3">
                    <input
                        type="submit"
                        className="
                                block bg-[#2e7d32] text-white
                                w-14 py-1 px-3 rounded w-16 mx-auto my-5
                                hover:bg-[#1b5e20]
                            "
                        value={"送信"}
                    />
                </div>
            </form>
        </main>
    );
};

export default InvestmentAmount;
