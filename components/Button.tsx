import Router, { useRouter } from "next/router";
import { backgroundColor, borderColor, textColor } from "../libs/modules/bg-color";

const Button = (
    {
        title,
        color,
        onClick
    }: {
        title:string
        color: string
        onClick?: any
    }
) => {
    return(
        <>
            <button
                className={`${backgroundColor(color)} ${textColor(color)} font-semibold text-lg px-4 py-2 rounded-lg m-4 `}
                onClick={onClick}
            >
                {title}
            </button>
        </>
    );
};

export default Button;