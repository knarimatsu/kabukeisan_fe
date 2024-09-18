'use client';
import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';

import {
  CalcValueResult,
  calcValueStateByScouter,
  calcValueStateByShikiho,
} from '../libs/recoil/atom';
import React, { useState } from 'react';
import ModalComponent from '../components/Dialogs/ModalComponent';
import ToggleSwitch from '../components/Buttons/ToggleSwitch';
import Shikiho from './Shikiho';
import Scouter from './Scouter';

const Calc = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isShikiho, setIsShikiho] = useState(true);
  const { t } = useTranslation();
  const [calcValueResultByShikiho, setCalcValueResultByShikiho] = useRecoilState(
    calcValueStateByShikiho,
  );
  const [calcValueResultByScouter, setCalcValueResultByScouter] = useRecoilState(
    calcValueStateByScouter,
  );

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const modalContent = () => {
    let data: CalcValueResult;
    data = isShikiho ? calcValueResultByShikiho : calcValueResultByScouter;
    return (
      <div className="px-10 py-8 w-96 border rounded-lg bg-white">
        <p>
          {'現在価値'}: {data.pv}
        </p>
        <p>{(data.pv / data.marketCapital).toFixed(1)}</p>
        <p>
          {'超過リターン'}: {data.excessPV}
        </p>
        <p>{(data.excessPV / data.marketCapital).toFixed(1)}</p>
        <p>
          {'資本費用'}: {data.costPV}
        </p>
        <p>{(data.costPV / data.marketCapital).toFixed(1)}</p>
        <p>
          {'時価総額'}: {data.marketCapital}
        </p>
      </div>
    );
  };

  return (
    <>
      <main className="h-screen overflow-auto dark:bg-black dark:text-gray-400">
        {/* <h1 className="text-2xl">{t("index.calcTitle")}</h1> */}
        <h1 className="text-2xl text-center mb-5">{'企業価値計算'}</h1>
        <ToggleSwitch
          isFirstLabel={isShikiho}
          firstLabel="四季報"
          secondLabel="スカウター"
          changeState={setIsShikiho}
        />
        {isShikiho ? (
          <Shikiho
            setModalIsOpen={setModalIsOpen}
            setCalcValueResultBySikiho={setCalcValueResultByShikiho}
          />
        ) : (
          <Scouter
            setModalIsOpen={setModalIsOpen}
            setCalcValueResultByScouter={setCalcValueResultByScouter}
          />
        )}
        <ModalComponent isOpen={modalIsOpen} closeModal={closeModal}>
          {modalContent()}
        </ModalComponent>
      </main>
    </>
  );
};

export default Calc;
