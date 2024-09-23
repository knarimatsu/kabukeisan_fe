export type PostData = {
  buyPrice: number;
  profit: number;
  depreciation: number;
  investing: number;
  equity: number;
  debt: number;
};

export interface ScouterData extends PostData {
  currentAsset?: number;
  securities?: number;
}

export interface CalcValueResultModalProp {
  decadePv: number;
  eternalPv: number;
  isValue: string;
  eternalPvRatio: number;
  decadePvRatio: number;
  per: number;
  pbr: number;
  nuetralPER?: number;
}
