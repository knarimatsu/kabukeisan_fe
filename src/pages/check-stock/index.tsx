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
                    <RadioButton
                        key={key}
                        RadioButtonContent={content}
                        register={register}
                    />
                ))}
                <input type="submit" />
            </form>
            <Footer />
        </>
    );
};

export default CheckStock;
