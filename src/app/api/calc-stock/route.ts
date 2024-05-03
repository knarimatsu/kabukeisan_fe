import { NextRequest, NextResponse } from "next/server";
import { calcCompanyValue } from "../../libs/service/calc-value";
import { PostData } from "../../../types/post-data";

export async function GET(req: NextRequest) {
    const searchParams = await req.nextUrl.searchParams;
    const buyPrice = Number(searchParams.get("buyPrice"));
    const profit = Number(searchParams.get("profit"));
    const depreciation = Number(searchParams.get("depreciation"));
    const investing = Number(searchParams.get("investing"));
    const roic = Number(searchParams.get("roic"));
    const cash = Number(searchParams.get("cash"));
    const equity = Number(searchParams.get("equity"));
    const data: PostData = {
        buyPrice,
        profit,
        depreciation,
        investing,
        roic,
        cash,
        equity,
    };
    const result = await calcCompanyValue(data);
    return NextResponse.json({
        status: 200,
        body: result,
    });
}
