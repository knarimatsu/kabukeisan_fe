"use client";
import { FormPropsType } from "../../libs/types/FormProps";

const NumberForm: React.FC<FormPropsType> = ({ label, register }) => {
    return (
        <label className="block my-5">
            {label}
            <input
                type="number"
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

export default NumberForm;
