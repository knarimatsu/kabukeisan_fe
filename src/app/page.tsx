"use client";
import Card from "./components/Card";

export default function Home() {
    return (
        <>
            <div className="pb-5 py-10 px-10 dark:bg-black xl:h-screen">
                <div className="xl:flex">
                    <Card
                        title={"恩株"}
                        description={"恩株とは投資金額を回収した後の持株です。"}
                        path="onkabu"
                    />
                    <Card
                        title={"企業価値計算"}
                        description={"企業価値を計算します。"}
                        path="calc-stock"
                    />
                    <Card
                        title={"株価チェックリスト"}
                        description={"株価の定性評価を行います"}
                        path="check-stock"
                    />
                </div>
                <div className="xl:flex">
                    <Card
                        title={"投資額計算"}
                        description={"投資金額の計算"}
                        path="investment-amount"
                    />
                </div>
            </div>
        </>
    );
}
