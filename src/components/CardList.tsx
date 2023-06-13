import React from "react";
import Card from "./Card";

const CardList = () => {
    return (
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
    );
};

export default CardList;
