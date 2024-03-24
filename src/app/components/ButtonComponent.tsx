import { backgroundColor } from "../libs/modules/bg-color";

const ButtonPart = ({
    title,
    color,
    onClick,
}: {
    title: string;
    color: string;
    onClick?: any;
}) => {
    return (
        <>
            <button
                className={`${backgroundColor(
                    color
                )} text-black border border-black font-semibold text-lg px-4 py-2 rounded-lg m-4 `}
                onClick={onClick}
            >
                {title}
            </button>
        </>
    );
};

export default ButtonPart;
