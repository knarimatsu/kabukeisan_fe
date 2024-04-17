import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = await request.nextUrl.searchParams;
    const buyPrice = Number(searchParams.get("buy"));
    const nowPrice = Number(searchParams.get("now"));
    const stock = Number(searchParams.get("stock"));
    const onkabu = Math.round(
        stock - (((nowPrice - buyPrice) * 0.79685) / nowPrice) * stock
    );

    if (onkabu < stock) {
        return NextResponse.json(
            { data: onkabu + "株売却してください" },
            { status: 200 }
        );
    }
    return NextResponse.json({ data: "恩株は作れません" }, { status: 200 });
}
