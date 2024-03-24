"use client";

import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";

const TextForm = ({
    id,
    name,
    ...register
}: {
    id: string;
    name: string;
    register: any;
}) => {
    <>
        <input
            id={id}
            type="text"
            {...register}
            className="
                block border outline-none py-1 px-3 rounded-md
                h-11 w-full text-lg
                dark:bg-gray-700
            "
        />
    </>;
};

export default TextForm;
