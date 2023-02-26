import { useSession, signOut } from "next-auth/react";
import type { NextPage } from "next";
import Login from "../components/Login";
import "../../src/i18n/config";
import React from "react";
// import Card from "../components/Card";
import dynamic from "next/dynamic";

const Home: NextPage = () => {
    const { data: session, status } = useSession();
    const Card = dynamic(() => import("../components/Card"));
    if (status === "loading") {
        return null;
    }
    // if (session) {
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
