export async function POST(req: Request) {
    const res = await req.json();
    const buy = Number(res.data.buyPrice);
    const now = Number(res.data.nowPrice);
    const stock = Number(res.data.stock);
    const onkabu = Math.round(stock - (((now - buy) * 0.79685) / now) * stock);
    const result =
        onkabu < stock ? `${onkabu}株売却してください` : "恩株は作れません";
    return Response.json({ onkabu: result });
}
