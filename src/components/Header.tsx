import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import HomeIcon from "@mui/icons-material/Home";
const Header = () => {
    const { t } = useTranslation();
    const router = useRouter();
    return (
        <>
            <header
                className="
                border-b h-12 text-3xl items-center flex
                dark:bg-black
                "
            >
                <div
                    className="mx-2 cursor-pointer"
                    onClick={() => router.push("/")}
                >
                    <HomeIcon
                        sx={{ height: 32, width: 32 }}
                        className="dark:text-gray-400"
                    />
                </div>
                <div className="dark:text-gray-400">{t("header.title")}</div>
            </header>
        </>
    );
};

export default Header;
