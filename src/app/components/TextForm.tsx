"use client";

import {
    FieldValues,
    UseFormRegister,
    UseFormRegisterReturn,
} from "react-hook-form";

type TextFormProps = {
    label: string;
    register: UseFormRegisterReturn;
};

const TextForm: React.FC<TextFormProps> = ({ label, register }) => {
    return (
        <label className="block my-5">
            {label}
            <input
                {...register}
                className="
                block border outline-none py-1 px-3 rounded-md
                h-11 w-full text-lg
                dark:bg-gray-700
            "
            />
        </label>
    );
};

export default TextForm;
