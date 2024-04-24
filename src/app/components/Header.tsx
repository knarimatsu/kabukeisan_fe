import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import HomeIcon from "@mui/icons-material/Home";
import { Button } from "@mui/material";
const Header = () => {
    const pathname = usePathname();
    const router = useRouter();
    const isLoginOrSignupDisplay =
        pathname === "/login/" || pathname === "/signup/";
    return (
        <>
            <header
                className="
                h-12 text-3xl items-center flex w-full justify-between
                dark:bg-black
                "
            >
                <div className="flex">
                    {/* <div
                        className="mx-2 cursor-pointer"
                        onClick={() => router.push("/")}
                    >
                        <HomeIcon
                            sx={{ height: 32, width: 32 }}
                            className="dark:text-gray-400"
                        />
                    </div> */}
                    <div
                        className="dark:text-gray-400 cursor-pointer"
                        onClick={() => router.push("/")}
                    >
                        {"株計算ドットコム"}
                    </div>
                </div>
                {!isLoginOrSignupDisplay && (
                    <div>
                        <Button
                            variant="outlined"
                            className="border-[#2e7d32] text-[#2e7d32] mr-2 dark:text-white"
                            onClick={() => router.push("/login")}
                        >
                            ログイン
                        </Button>
                        <Button
                            variant="outlined"
                            className="border-[#2e7d32] text-[#2e7d32] mr-2 dark:text-white"
                            onClick={() => router.push("/signup")}
                        >
                            新規登録
                        </Button>
                    </div>
                )}
            </header>
        </>
    );
};

export default Header;
