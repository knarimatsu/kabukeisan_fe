import dynamic from "next/dynamic";
import React from "react";
const Header = dynamic(() => import("./Header"));
const Footer = dynamic(() => import("./Footer"));
const Card = dynamic(() => import("./Card"));

const CardList = () => {
    return (
        <>
            <Header />
            <div className="pb-5 py-10 px-10 dark:bg-black xl:flex xl:h-screen">
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
                    title={"index.title.checkStock"}
                    description={"index.description.checkStock"}
                    path="check-stock"
                />
            </div>
            <Footer />
        </>
    );
};

export default CardList;
