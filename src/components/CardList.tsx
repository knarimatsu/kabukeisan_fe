import dynamic from "next/dynamic";
import React from "react";
const Header = dynamic(() => import("./Header"));
const Footer = dynamic(() => import("./Footer"));
const Card = dynamic(() => import("./Card"));

const CardList = () => {
    return (
        <>
            <Header />
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
                {/* <Card
                    title={"index.title.getAccountData"}
                    description={"index.description.getAccountData"}
                    path="account-data"
                /> */}
                {/* <Card
                    title={"index.title.checkStock"}
                    description={"index.description.checkStock"}
                    path="check-stock"
                />
                <Card
                    title={"index.title.portfolio"}
                    description={"index.description.portfolio"}
                    path="portfolio"
                /> */}
            </div>
            <Footer />
        </>
    );
};

export default CardList;
