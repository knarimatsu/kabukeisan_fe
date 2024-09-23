import React from 'react';
import { useForm } from 'react-hook-form';
import TelForm from '../components/Forms/TelForm';
import { SetterOrUpdater } from 'recoil';
import axios from 'axios';
import { ScouterData } from '../../types/post-data';
import { CalcValueResult } from '../libs/recoil/atom';

type Props = {
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCalcValueResultByScouter: SetterOrUpdater<CalcValueResult>;
};

const Scouter: React.FC<Props> = ({ setModalIsOpen, setCalcValueResultByScouter }) => {
  const { register, handleSubmit } = useForm<ScouterData>({
    mode: 'onSubmit',
  });
  const calcScouter = async (data: ScouterData) => {
    const result = await axios.get('/api/calc-stock', {
      params: {
        buyPrice: data.buyPrice,
        profit: data.profit,
        currentAsset: data.currentAsset,
        debt: data.debt,
        equity: data.equity,
        depreciation: data.depreciation,
        investing: data.investing,
        securities: data.securities,
        isShikiho: false,
      },
    });
    setModalIsOpen(true);
    setCalcValueResultByScouter(result.data.body);
  };
  return (
    <>
      <form
        className="sm:w-96 px-10 py-8 my-4 mx-auto border rounded-lg dark:bg-gray-900"
        onSubmit={handleSubmit(calcScouter)}
      >
        <TelForm label="時価総額(百万)" register={register('buyPrice')} />
        <TelForm label="当期純利益(百万)" register={register('profit')} />
        <TelForm label="流動資産(百万)" register={register('currentAsset')} />
        <TelForm label="投資その他の資産(百万)" register={register('securities')} />
        <TelForm label="負債(百万)" register={register('debt')} />
        <TelForm label="純資産(百万)" register={register('equity')} />
        <TelForm label="減価償却費(百万)" register={register('depreciation')} />
        <TelForm label="設備投資(百万)" register={register('investing')} />
        <div className="mx-auto w-24">
          <input
            type="submit"
            className="block bg-[#2e7d32] hover:bg-[#1b5e20] text-white w-14 py-1 px-3 rounded w-16 mx-auto my-5"
            value={'送信'}
          />
        </div>
      </form>
    </>
  );
};

export default Scouter;
