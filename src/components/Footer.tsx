import { NextComponentType } from "next";

const Footer: NextComponentType = () => {
    return (
        <p
            className="
                p-4 text-xs flex items-center border-t w-full h-16
                dark:text-gray-400 dark:bg-black
                dark:border-gray-800
            "
        >
            © 2023 kabukeisan.com
        </p>
    );
};

export default Footer;
