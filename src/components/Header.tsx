import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
const Header = () => {
    const { t } = useTranslation();
    const router = useRouter();
    return (
        <>
            <header className="border-b h-12 text-3xl items-center flex">
                <div
                    className="mx-2 cursor-pointer"
                    onClick={() => router.push("/")}
                >
                    <HomeIcon sx={{ height: 32, width: 32 }} />
                </div>
                <div>{t("header.title")}</div>
            </header>
        </>
    );
};

export default Header;
