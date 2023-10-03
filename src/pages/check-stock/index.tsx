import { useForm } from "react-hook-form";
import React from "react";
import dynamic from "next/dynamic";
import RadioButton from "../../components/RadioButton";
import { CHECKSTOCKCONTENT } from "../../utils/CheckStockContent";
import { Button, Input } from "@mui/material";
import { useTranslation } from "react-i18next";

const Header = dynamic(() => import("../../components/Header"));
const Footer = dynamic(() => import("../../components/Footer"));

const CheckStock = () => {
    const { t } = useTranslation();
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
                        className="w-1/2 px-6 py-2 mx-auto my-2 border border-white rounded-md dark:border-gray-400 dark:bg-gray-800"
                    >
                        <RadioButton
                            RadioButtonContent={content}
                            register={register}
                        />
                    </div>
                ))}
                <div className="text-center my-8">
                    <Button
                        type="submit"
                        variant="contained"
                        className="bg-[#2e7d32] hover:bg-[#1b5e20]"
                    >
                        {t("button.send")}
                    </Button>
                </div>
            </form>
            <Footer />
        </>
    );
};

export default CheckStock;
