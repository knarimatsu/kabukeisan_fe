import { useForm } from "react-hook-form";
import React from "react";
import dynamic from "next/dynamic";
import RadioButton from "../../components/RadioButton";

const Header = dynamic(() => import("../../components/Header"));
const Footer = dynamic(() => import("../../components/Footer"));

const CheckStock = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data: any) => {
        console.log(data);
    };
    return (
        <>
            <Header />
            <form
                className="p-3 dark:bg-black dark:text-gray-400"
                onSubmit={handleSubmit(onSubmit)}
            >
                <RadioButton
                    label="市場においてシェアは高いか"
                    value1="Yes"
                    value2="No"
                    registerName="question-1"
                    register={register}
                />
                <RadioButton
                    label="2つ目の質問"
                    value1="Yes"
                    value2="No"
                    registerName="question-2"
                    register={register}
                />
                <input type="submit" />
            </form>
            <Footer />
        </>
    );
};

export default CheckStock;
