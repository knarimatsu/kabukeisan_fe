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
        <div className="p-6 bg-white rounded-lg m-10 border-inherit shadow-md">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {t(title)}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
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
