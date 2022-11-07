import type { NextPage } from "next";
import Card from "../components/Card";

const Home: NextPage = () => {
    const onkabuTitle = "恩株";
    const onkabuDescription =
        "恩株とは投資金額を回収した持株のことです。現在株価からいくら利確するかという計算を行います";
    const calcTitle = "企業価値計算";
    const calcDescription = "企業価値を計算します";
    const portfolioTitle = "保有株管理";
    const portfolioDescription =
        "保有株をもとに割安で変えているかを可視化します";
    const checkStockTitle = "株式チェックリスト";
    const checkStockDescription =
        "各項目について5段階評価を行い投資適格かを判断します";
    return (
        <>
            <div>
                <Card
                    title={onkabuTitle}
                    description={onkabuDescription}
                    path="onkabu"
                />
                <Card
                    title={calcTitle}
                    description={calcDescription}
                    path="calc"
                />
                <Card
                    title={portfolioTitle}
                    description={portfolioDescription}
                    path="portfolio"
                />
                <Card
                    title={checkStockTitle}
                    description={checkStockDescription}
                    path="check-stock"
                />
            </div>
        </>
    );
};

export default Home;
