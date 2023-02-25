import { useSession, signOut } from "next-auth/react";
import type { NextPage } from "next";
import Card from "../components/Card";
import Login from "../components/Login";
import "../../src/i18n/config";

const Home: NextPage = () => {
    const { data: session, status } = useSession();
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
                <Card
                    title={"index.checkStockTitle"}
                    description={"index.checkStockDescription"}
                    path="check-stock"
                />
            </div>
        </>
    );
    // }
    // return <Login />;
};

export default Home;
