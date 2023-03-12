import { useSession } from "next-auth/react";
import type { NextPage } from "next";
import "../../src/i18n/config";
import React from "react";
import Card from "../components/Card";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
const Home: NextPage = () => {
    const { data: session, status } = useSession();
    if (status === "loading") {
        return null;
    }
    return (
        <>
            <div>
                <Card
                    title={"index.onkabuTitle"}
                    description={"index.onkabuDescription"}
                    path="onkabu"
                />
                <Card
                    title={"index.calcTitle"}
                    description={"index.calcDescription"}
                    path="calc"
                />
                {/* <Card
                    title={portfolioTitle}
                    description={portfolioDescription}
                    path="portfolio"
                /> */}
                {/* <Card
                    title={"index.checkStockTitle"}
                    description={"index.checkStockDescription"}
                    path="check-stock"
                /> */}
            </div>
        </>
    );
    // }
    // return <Login />;
};

export default Home;
