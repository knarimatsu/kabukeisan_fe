import React from "react";
import { useForm } from "react-hook-form";
import TelForm from "../components/Forms/TelForm";
import { PostData } from "../../types/post-data";
import { SetterOrUpdater } from "recoil";
import axios from "axios";

type Props = {
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setCalcValueResultBySikiho: SetterOrUpdater<{
        decadePv: number;
        eternalPv: number;
        isValue: string;
        eternalPvRatio: number;
        decadePvRatio: number;
        per: number;
        pbr: number;
    }>;
};

const Shikiho: React.FC<Props> = ({
    setModalIsOpen,
    setCalcValueResultBySikiho,
}) => {
    const { register, handleSubmit } = useForm<PostData>({
        mode: "onSubmit",
    });
    const calcShikiho = async (data: PostData) => {
        const result = await axios.get(
            `/api/calc-stock?buyPrice=${data.buyPrice}&profit=${data.profit}&depreciation=${data.depreciation}&investing=${data.investing}&roic=${data.roic}&cash=${data.cash}&equity=${data.equity}&isShikiho=true`
        );
        setModalIsOpen(true);
        setCalcValueResultBySikiho(result.data.body);
    };
    return (
        <>
            <form
                className="sm:w-96 px-10 py-8 my-4 mx-auto border rounded-lg dark:bg-gray-900"
                onSubmit={handleSubmit(calcShikiho)}
            >
                <TelForm
                    label="時価総額(百万)"
                    register={register("buyPrice")}
                />
                <TelForm label="純資産(百万)" register={register("equity")} />
                <TelForm
                    label="設備投資(百万)"
                    register={register("investing")}
                />
                <TelForm
                    label="減価償却費(百万)"
                    register={register("depreciation")}
                />
                <TelForm label="現金(百万)" register={register("cash")} />

                <TelForm
                    label="当期純利益(百万)"
                    register={register("profit")}
                />
                {/* <TextForm label="ROIC(%)" register={register("roic")} /> */}

                <div className="mx-auto w-24">
                    <input
                        type="submit"
                        className="block bg-[#2e7d32] hover:bg-[#1b5e20] text-white w-14 py-1 px-3 rounded w-16 mx-auto my-5"
                        value={"送信"}
                    />
                </div>
            </form>
        </>
    );
};

export default Shikiho;
