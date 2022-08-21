import React from 'react';
import { useForm } from "react-hook-form";


const CheckStockCard = (
    {
        activeStep,
        next,
        back,
        done
    }:{
        activeStep: number;
        next: any;
        back: any;
        done: any;
    }
) => {
    const {register, handleSubmit} = useForm();
    const onSubmit = (data: any) => {
        console.log(data);
    };

    switch (activeStep) {
        case 0:
            return (
                <>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="block mt-3 mx-6">
                            市場においてシェアは高いか
                            <div>
                                <input type="radio" value={'Yes'} {...register('question-1')}/>Yes
                                <input type="radio" value={'No'} {...register('question-1')}/>No
                            </div>
                        </label>
                        <label className="block mt-3 mx-6">
                            他の企業よりも先に製品を開発しているか
                            <div>
                                <input type="radio" value={'Yes'} {...register('question-2')}/>Yes
                                <input type="radio" value={'No'} {...register('question-2')}/>No
                            </div>
                        </label>
                        <label className="block mt-3 mx-6">
                            他の企業からの参入はないか
                            <div>
                                <input type="radio" value={'Yes'} {...register('question-3')}/>Yes
                                <input type="radio" value={'No'} {...register('question-3')}/>No
                            </div>
                        </label>
                        <label className="block mt-3 mx-6">
                            競合は少ないか
                            <div>
                                <input type="radio" value={'Yes'} {...register('question-4')}/>Yes
                                <input type="radio" value={'No'} {...register('question-4')}/>No
                            </div>
                        </label>
                    </form>
                    <button onClick={next}>次へ</button>
                </>
            );
        case 1:
            return (
                <>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="block mt-3 mx-6">
                            時代の変化に対応しているか
                            <input type="radio" value={'Yes'} {...register('question-5')}/>Yes
                            <input type="radio" value={'No'} {...register('question-5')}/>No
                        </label>
                        <label className="block mt-3 mx-6">
                            長年たっても廃れないビジネスモデル(ストックビジネス)を持っているか
                            <input type="radio" value={'Yes'} {...register('question-6')}/>Yes
                            <input type="radio" value={'No'} {...register('question-6')}/>No
                        </label>
                    </form>
                    <button onClick={next}>次へ</button>
                    <button onClick={back}>戻る</button>
                </>
            );
        case 2:
            return (
                <>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="block mt-3 mx-6">
                        製品、サービスの価格は崩れていないか
                            <input type="radio" value={'Yes'} {...register('question-9')}/>Yes
                            <input type="radio" value={'No'} {...register('question-9')}/>No
                        </label>
                        <label className="block mt-3 mx-6">
                            長年にわたって利益が出ているか
                            <input type="radio" value={'Yes'} {...register('question-10')}/>Yes
                            <input type="radio" value={'No'} {...register('question-10')}/>No
                        </label>
                        <label className="block mt-3 mx-6">
                            利益は年々増加しているか
                            <input type="radio" value={'Yes'} {...register('question-11')}/>Yes
                            <input type="radio" value={'No'} {...register('question-11')}/>No
                        </label>
                        <label className="block mt-3 mx-6">
                            無駄な製品、サービスを作っていないか
                            <input type="radio" value={'Yes'} {...register('question-12')}/>Yes
                            <input type="radio" value={'No'} {...register('question-12')}/>No
                        </label>
                        <label className="block mt-3 mx-6">
                            自己資本比率は高いか
                            <input type="radio" value={'Yes'} {...register('question-12')}/>Yes
                            <input type="radio" value={'No'} {...register('question-12')}/>No
                        </label>
                        <label className="block mt-3 mx-6">
                            ROE・ROAは高いか
                            <input type="radio" value={'Yes'} {...register('question-12')}/>Yes
                            <input type="radio" value={'No'} {...register('question-12')}/>No
                        </label>
                        <label className="block mt-3 mx-6">
                            流動比率は高いか
                            <input type="radio" value={'Yes'} {...register('question-12')}/>Yes
                            <input type="radio" value={'No'} {...register('question-12')}/>No
                        </label>
                        <label className="block mt-3 mx-6">
                            配当性向は高いか
                            <input type="radio" value={'Yes'} {...register('question-12')}/>Yes
                            <input type="radio" value={'No'} {...register('question-12')}/>No
                        </label>
                        <label className="block mt-3 mx-6">
                            各利益率は高いか
                            <input type="radio" value={'Yes'} {...register('question-12')}/>Yes
                            <input type="radio" value={'No'} {...register('question-12')}/>No
                        </label>
                    </form>
                    <button onClick={next}>次へ</button>
                    <button onClick={back}>戻る</button>
                </>
            );
        case 3:
            return (
                <>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="block mt-3 mx-6">
                            経営者は派手ではないか
                            <input type="radio" value={'Yes'} {...register('question-13')}/>Yes
                            <input type="radio" value={'No'} {...register('question-13')}/>No
                        </label>
                        <label className="block mt-3 mx-6">
                            雇用関係は良いか
                            <input type="radio" value={'Yes'} {...register('question-14')}/>Yes
                            <input type="radio" value={'No'} {...register('question-14')}/>No
                        </label>
                        <label className="block mt-3 mx-6">
                            経営者は謙虚で真面目か
                            <input type="radio" value={'Yes'} {...register('question-15')}/>Yes
                            <input type="radio" value={'No'} {...register('question-15')}/>No
                        </label>
                    </form>
                    <button onClick={next}>次へ</button>
                    <button onClick={back}>戻る</button>
                </>
            );
        case 4:
            return (
                <>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="block mt-3 mx-6">
                            航空産業ではない
                            <input type="radio" value={'Yes'} {...register('question-17')}/>Yes
                            <input type="radio" value={'No'} {...register('question-17')}/>No
                        </label>
                        <label className="block mt-3 mx-6">
                            その企業は、少なくとも数年は収益が増え続けることを可能にする、十分な市場可能性のある製品やサービスをもっているか?
                            <input type="radio" value={'Yes'} {...register('question-18')}/>Yes
                            <input type="radio" value={'No'} {...register('question-18')}/>No
                        </label>
                        <label className="block mt-3 mx-6">
                            現在売れている製品ラインの潜在的な需要がほとんどなくなったときに、経営陣には会社の収益をさらに伸ばすような製品やプロセスを開発・発展し続ける決意があるか?
                            <input type="radio" value={'Yes'} {...register('question-18')}/>Yes
                            <input type="radio" value={'No'} {...register('question-18')}/>No
                        </label>
                        <label className="block mt-3 mx-6">
                            企業の規模と比べて、どのくらい企業のリサーチと開発努力が 効果的であるか?
                            <input type="radio" value={'Yes'} {...register('question-18')}/>Yes
                            <input type="radio" value={'No'} {...register('question-18')}/>No
                        </label>
                        <label className="block mt-3 mx-6">
                            その企業は、平均以上の販売組織があるか?
                            <input type="radio" value={'Yes'} {...register('question-18')}/>Yes
                            <input type="radio" value={'No'} {...register('question-18')}/>No
                        </label>
                        <label className="block mt-3 mx-6">
                            その企業には、十分な利幅があるか?
                            <input type="radio" value={'Yes'} {...register('question-18')}/>Yes
                            <input type="radio" value={'No'} {...register('question-18')}/>No
                        </label>
                        <label className="block mt-3 mx-6">
                            利幅を改善、または維持するために何をしているか?                            
                            <input type="radio" value={'Yes'} {...register('question-18')}/>Yes
                            <input type="radio" value={'No'} {...register('question-18')}/>No
                        </label>
                        <label className="block mt-3 mx-6">
                            その企業には、労働者・従業員との関係に特筆すべき点があるか?
                            <input type="radio" value={'Yes'} {...register('question-18')}/>Yes
                            <input type="radio" value={'No'} {...register('question-18')}/>No
                        </label>
                        <label className="block mt-3 mx-6">
                            その企業には、企業幹部との関係に特筆すべき点があるか?
                            <input type="radio" value={'Yes'} {...register('question-18')}/>Yes
                            <input type="radio" value={'No'} {...register('question-18')}/>No
                        </label>
                        <label className="block mt-3 mx-6">
                            その企業は、マネージメントに柔軟性があるか?
                            <input type="radio" value={'Yes'} {...register('question-18')}/>Yes
                            <input type="radio" value={'No'} {...register('question-18')}/>No
                        </label>
                        <label className="block mt-3 mx-6">
                            企業の費用分析と会計管理は、どのくらいきちんとしているか?
                            <input type="radio" value={'Yes'} {...register('question-18')}/>Yes
                            <input type="radio" value={'No'} {...register('question-18')}/>No
                        </label>
                        <label className="block mt-3 mx-6">
                            競争相手と比べて、どの位その企業が突出しているかを知る手がかりとなるような、その分野特有の評価できる特徴がなにかあるか?
                            <input type="radio" value={'Yes'} {...register('question-18')}/>Yes
                            <input type="radio" value={'No'} {...register('question-18')}/>No
                        </label>
                        <label className="block mt-3 mx-6">
                            予測可能な未来に、企業の成長が著しいために自己資金調達が行われ、その結果株式の総数が増大し、現在の株主が予期していた利益が、ほとんど相殺されてしまうような事態になりそうか?
                            <input type="radio" value={'Yes'} {...register('question-18')}/>Yes
                            <input type="radio" value={'No'} {...register('question-18')}/>No
                        </label>

                        <label className="block mt-3 mx-6">
                            その企業の経営陣は、物事がうまくいっている時には、さまざまな出来事を投資家にどんどん話すのに、問題や損失が生じると、だんまりを決め込んでしまうようなことがあるか?
                            <input type="radio" value={'Yes'} {...register('question-19')}/>Yes
                            <input type="radio" value={'No'} {...register('question-19')}/>No
                        </label>
                        <label className="block mt-3 mx-6">
                            利益という点で、短期間および長期間の見通しがその企業にあるか?
                            <input type="radio" value={'Yes'} {...register('question-20')}/>Yes
                            <input type="radio" value={'No'} {...register('question-20')}/>No
                        </label>
                        <label className="block mt-3 mx-6">
                            その企業は、完璧な経営体制を敷いているか?
                            <input type="radio" value={'Yes'} {...register('question-20')}/>Yes
                            <input type="radio" value={'No'} {...register('question-20')}/>No
                        </label>
                        <label className="block mt-3 mx-6">
                            若手の幹部は多いか
                            <input type="radio" value={'Yes'} {...register('question-20')}/>Yes
                            <input type="radio" value={'No'} {...register('question-20')}/>No
                        </label>
                    </form>
                    <button onClick={done}>完了</button>
                    <button onClick={back}>戻る</button>
                </>
            );
        default:
            return null;
    }
};

export default CheckStockCard;