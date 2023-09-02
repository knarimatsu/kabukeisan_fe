import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const Card = ({
    title,
    description,
    path,
}: {
    title: string;
    description: string;
    path: string;
}) => {
    const router = useRouter();
    const { t } = useTranslation();
    function toPage() {
        router.push(`/${path}`);
    }
    return (
        <div className="w-72 h-56 p-6 mb-10 mx-auto bg-white rounded-lg border-inherit shadow-md dark:bg-gray-800">
            <h5 className="mb-2 text-2xl font-normal tracking-tight text-gray-900 dark:text-gray-400">
                {t(title)}
            </h5>
            <p className="font-normal text-gray-700 my-5 dark:text-gray-400">
                {t(description)}
            </p>
            <div className="flex justify-center m-3">
                <Button
                    variant="contained"
                    className="bg-[#2e7d32] hover:bg-[#1b5e20]"
                    onClick={toPage}
                >
                    {t(title)}
                </Button>
            </div>
        </div>
    );
};

export default Card;
