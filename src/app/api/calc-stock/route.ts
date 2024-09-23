import { NextRequest, NextResponse } from 'next/server';
import {
  calcCompanyValueByScoutor,
  calcCompanyValueByShikiho,
} from '../../libs/service/calc-value';
import { ScouterData, PostData } from '../../../types/post-data';

export async function GET(req: NextRequest) {
  const searchParams = await req.nextUrl.searchParams;
  const isShikiho = searchParams.get('isShikiho') === 'true';
  const shikihoData: PostData = {
    buyPrice: Number(searchParams.get('buyPrice')),
    profit: Number(searchParams.get('profit')),
    depreciation: Number(searchParams.get('depreciation')),
    investing: Number(searchParams.get('investing')),
    equity: Number(searchParams.get('equity')),
    debt: Number(searchParams.get('debt')),
  };
  const scouterData: ScouterData = {
    ...shikihoData,
    currentAsset: Number(searchParams.get('currentAsset')),
    debt: Number(searchParams.get('debt')),
    securities: Number(searchParams.get('securities')),
  };
  if (isShikiho) {
    return NextResponse.json({
      status: 200,
      body: await calcCompanyValueByShikiho(shikihoData),
    });
  }
  return NextResponse.json({
    status: 200,
    body: await calcCompanyValueByScoutor(scouterData),
  });
}
