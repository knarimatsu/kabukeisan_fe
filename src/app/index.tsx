import type { NextPage } from "next";
import "../../src/i18n/config";
import React from "react";

import dynamic from "next/dynamic";

const Home: NextPage = () => {
    const CardList = dynamic(() => import("../components/CardList"));
    return <CardList />;
};

export default Home;
