import { useForm } from "react-hook-form";
import React from "react";
import dynamic from "next/dynamic";
import RadioButton from "../../components/RadioButton";
import { CHECKSTOCKCONTENT } from "../../utils/CheckStockContent";

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
                {CHECKSTOCKCONTENT.map((content, key) => (
                    <div
                        key={key}
                        className="sm:mx-10 lg:mx-auto lg:w-1/2 border rounded dark:border-gray-400 dark:bg-gray-800 p-3 mb-3"
                    >
                        <RadioButton
                            RadioButtonContent={content}
                            register={register}
                        />
                    </div>
                ))}
                <input
                    type="submit"
                    className="block bg-[#2e7d32] hover:bg-[#1b5e20] text-white py-1 px-3 rounded w-full w-16 mx-auto my-5"
                />
            </form>
            <Footer />
        </>
    );
};

export default CheckStock;
