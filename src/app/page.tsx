'use client';
import Card from './components/Card';

export default function Home() {
  return (
    <>
      <div className="pb-5 py-10 px-10 dark:bg-black xl:flex xl:h-screen">
        <Card
          title={'恩株'}
          description={'恩株とは投資金額を回収した後の持株です。'}
          path="onkabu"
        />
        <Card
          title={'企業価値計算'}
          description={'企業価値を計算します。'}
          path="calc-stock"
        />
        <Card
          title={'株価チェックリスト'}
          description={'株価の定性評価を行います'}
          path="check-stock"
        />
      </div>
    </>
  );
}
