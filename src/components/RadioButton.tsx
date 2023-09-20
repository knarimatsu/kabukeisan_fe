import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { RadioButtonContent } from "../types/CheckStockContentType";

const RadioButton = ({
    RadioButtonContent,
    register,
}: {
    RadioButtonContent: RadioButtonContent;
    register: UseFormRegister<FieldValues>;
}) => {
    return (
        <>
            <label className="block mx-6 mt-6">
                {RadioButtonContent.label}
                <div>
                    <input
                        className="ml-6"
                        type="radio"
                        value={RadioButtonContent.value1}
                        {...register(RadioButtonContent.registerName)}
                    />
                    {RadioButtonContent.value1}
                    {RadioButtonContent.value2 && (
                        <input
                            className="ml-6"
                            type="radio"
                            value={RadioButtonContent.value2}
                            {...register(RadioButtonContent.registerName)}
                        />
                    )}
                    {RadioButtonContent.value2 && RadioButtonContent.value2}
                    {RadioButtonContent.value3 && (
                        <input
                            className="ml-6"
                            type="radio"
                            value={RadioButtonContent.value3}
                            {...register(RadioButtonContent.registerName)}
                        />
                    )}
                    {RadioButtonContent.value3}
                    {RadioButtonContent.value4 && (
                        <input
                            className="ml-6"
                            type="radio"
                            value={RadioButtonContent.value4}
                            {...register(RadioButtonContent.registerName)}
                        />
                    )}
                    {RadioButtonContent.value4}
                    {RadioButtonContent.value5 && (
                        <input
                            className="ml-6"
                            type="radio"
                            value={RadioButtonContent.value5}
                            {...register(RadioButtonContent.registerName)}
                        />
                    )}
                    {RadioButtonContent.value5}
                </div>
            </label>
        </>
    );
};

export default RadioButton;
