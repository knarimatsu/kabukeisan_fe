import React from "react";
import { FieldValues, UseFormRegister, useForm } from "react-hook-form";

const RadioButton = ({
    label,
    value1,
    value2,
    value3,
    value4,
    value5,
    register,
    registerName,
}: {
    label: string;
    value1: string;
    value2?: string;
    value3?: string;
    value4?: string;
    value5?: string;
    registerName: string;
    register: UseFormRegister<FieldValues>;
}) => {
    // const { register } = useForm();
    return (
        <>
            <label className="block mx-6">
                {label}
                <div>
                    <input
                        type="radio"
                        value={value1}
                        {...register(registerName)}
                    />
                    {value1}
                    {value2 && (
                        <input
                            type="radio"
                            value={value2}
                            {...register(registerName)}
                        />
                    )}
                    {value2 && value2}
                    {value3 && (
                        <input
                            type="radio"
                            value={value3}
                            {...register(registerName)}
                        />
                    )}
                    {value3}
                    {value4 && (
                        <input
                            type="radio"
                            value={value4}
                            {...register(registerName)}
                        />
                    )}
                    {value4}
                    {value5 && (
                        <input
                            type="radio"
                            value={value5}
                            {...register(registerName)}
                        />
                    )}
                    {value5}
                </div>
            </label>
        </>
    );
};

export default RadioButton;
