import { NextRequest, NextResponse } from "next/server";
import { calcCompanyValue } from "../../libs/service/calc-value";
import { PostData, ScouterData } from "../../../types/post-data";

export async function GET(req: NextRequest) {
    const searchParams = await req.nextUrl.searchParams;
    const isShikiho = searchParams.get("isShikiho") === "true";
    const shikihoData: PostData = {
        buyPrice: Number(searchParams.get("buyPrice")),
        profit: Number(searchParams.get("profit")),
        depreciation: Number(searchParams.get("depreciation")),
        investing: Number(searchParams.get("investing")),
        roic: Number(searchParams.get("roic")),
        cash: Number(searchParams.get("cash")),
        equity: Number(searchParams.get("equity")),
    };
    const scouterData: ScouterData = {
        ...shikihoData,
        currentAsset: Number(searchParams.get("currentAsset")),
        debt: Number(searchParams.get("debt")),
        securities: Number(searchParams.get("securities")),
    };

    const data = isShikiho ? shikihoData : scouterData;

    const result = await calcCompanyValue(data);
    return NextResponse.json({
        status: 200,
        body: result,
    });
}
