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
                    title={"index.title.onkabu"}
                    description={"index.description.onkabu"}
                    path="onkabu"
                />
                <Card
                    title={"index.title.calc"}
                    description={"index.description.calc"}
                    path="calc-stock"
                />
                <Card
                    title={"index.title.getAccountData"}
                    description={"index.description.getAccountData"}
                    path="account-data"
                />
                <Card
                    title={"index.title.checkStock"}
                    description={"index.description.checkStock"}
                    path="check-stock"
                />
                <Card
                    title={"index.title.portfolio"}
                    description={"index.description.portfolio"}
                    path="portfolio"
                />
            </div>
        </>
    );
    // }
    // return <Login />;
};

export default Home;
