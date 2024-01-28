"use client";

import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import dynamic from "next/dynamic";

export default function Home({
    title,
    description,
    path,
}: {
    title: string;
    description: string;
    path: string;
}) {
    const Header = dynamic(() => import("../components/Header"));
    const Footer = dynamic(() => import("../components/Footer"));
    const Card = dynamic(() => import("../components/Card"));
    const router = useRouter();
    const { t } = useTranslation();
    return (
        <>
            <Header />
            <div className="pb-5 py-10 px-10 dark:bg-black xl:flex xl:h-screen">
                <Card
                    title={t("index.title.onkabu")}
                    description={"index.description.onkabu"}
                    path="onkabu"
                />
                <Card
                    title={"index.title.calc"}
                    description={"index.description.calc"}
                    path="calc-stock"
                />
                <Card
                    title={"index.title.checkStock"}
                    description={"index.description.checkStock"}
                    path="check-stock"
                />
            </div>
            <Footer />
        </>
    );
}
