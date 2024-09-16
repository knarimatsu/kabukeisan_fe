"use client";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";

import {
  calcValueStateByScouter,
  calcValueStateByShikiho,
} from "../libs/recoil/atom";
import React, { useState } from "react";
import ModalComponent from "../components/Dialogs/ModalComponent";
import ToggleSwitch from "../components/Buttons/ToggleSwitch";
import Shikiho from "./Shikiho";
import Scouter from "./Scouter";

const Calc = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isShikiho, setIsShikiho] = useState(true);
  const { t } = useTranslation();
  const [calcValueResultByShikiho, setCalcValueResultByShikiho] =
        useRecoilState(calcValueStateByShikiho);
  const [calsValueResultByScouter, setCalsValueResultByScouter] =
        useRecoilState(calcValueStateByScouter);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const modalContent = isShikiho ? (
    <div className="px-10 py-8 w-96 border rounded-lg bg-white">
      <p>
        {"10年間企業価値"}:{" "}
        {calcValueResultByShikiho.decadePv.toLocaleString()}
      </p>
      <p className="text-xl font-black text-emerald-500">
        {"時価総額の"}: {`${calcValueResultByShikiho.decadePvRatio}倍`}
      </p>
      <hr />
      <p>
        {"永続企業価値"}:{" "}
        {calcValueResultByShikiho.eternalPv.toLocaleString()}
      </p>
      <p className="text-xl font-black text-emerald-500">
        {"時価総額の"}: {`${calcValueResultByShikiho.eternalPvRatio}倍`}
      </p>
      <hr />
      <p>
        {"株主資本"}:{" "}
        {calcValueResultByShikiho.eternalPv.toLocaleString()}
      </p>
      <p className="text-xl font-black text-emerald-500">
        {"時価総額の"}:{" "}
        {`${(1 / calcValueResultByShikiho.pbr).toFixed(2)}倍`}
      </p>
      <p>
        {"PBR"}: {`${calcValueResultByShikiho.pbr}`}
      </p>
      <hr />
      <p>
        {"PER"}: {`${calcValueResultByShikiho.per}`}
      </p>
    </div>
  ) : (
    <div className="px-10 py-8 w-96 border rounded-lg bg-white">
      <p>
        {"10年間企業価値"}:{" "}
        {calsValueResultByScouter.decadePv.toLocaleString()}
      </p>
      <p className="text-xl font-black text-emerald-500">
        {"時価総額の"}: {`${calsValueResultByScouter.decadePvRatio}倍`}
      </p>
      <hr />
      <p>
        {"永続企業価値"}:{" "}
        {calsValueResultByScouter.eternalPv.toLocaleString()}
      </p>
      <p className="text-xl font-black text-emerald-500">
        {"時価総額の"}: {`${calsValueResultByScouter.eternalPvRatio}倍`}
      </p>
      <hr />
      <p>
        {"株主資本"}:{" "}
        {calsValueResultByScouter.eternalPv.toLocaleString()}
      </p>
      <p className="text-xl font-black text-emerald-500">
        {"時価総額の"}:{" "}
        {`${(1 / calsValueResultByScouter.pbr).toFixed(2)}倍`}
      </p>
      <p>
        {"PBR"}: {`${calsValueResultByScouter.pbr}`}
      </p>
      <hr />
      <p>
        {"PER"}: {`${calsValueResultByScouter.per}`}
      </p>
    </div>
  );

  return (
    <>
      <main className="h-screen overflow-auto dark:bg-black dark:text-gray-400">
        {/* <h1 className="text-2xl">{t("index.calcTitle")}</h1> */}
        <h1 className="text-2xl text-center mb-5">{"企業価値計算"}</h1>
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
            setCalcValueResultByScouter={
              setCalsValueResultByScouter
            }
          />
        )}
        <ModalComponent isOpen={modalIsOpen} closeModal={closeModal}>
          {modalContent}
        </ModalComponent>
      </main>
    </>
  );
};

export default Calc;
