import { useState } from "react";
import { useForm } from "react-hook-form";

const CheckStock = () => {
    const {register, handleSubmit, reset} = useForm();
    const onSubmit = (data: any) => {
        console.log(data);
    };
    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label className="block mt-3 mx-6">
                市場においてシェアは高いか
                <div>
                    <input type="radio" value="Yes" {...register('question-1')}/>Yes
                    <input type="radio" value="No" {...register('question-1')}/>No
                </div>
            </label>
            <label className="block mt-3 mx-6">
                他の企業よりも先に製品を開発しているか
                <div>
                    <input type="radio" value="Yes" {...register('question-2')}/>Yes
                    <input type="radio" value="No" {...register('question-2')}/>No
                </div>
            </label>
            <label className="block mt-3 mx-6">
                他の企業からの参入はないか
                <div>
                    <input type="radio" value="Yes" {...register('question-3')}/>Yes
                    <input type="radio" value="No" {...register('question-3')}/>No
                </div>
            </label>
            <label className="block mt-3 mx-6">
                競合は少ないか
                <div>
                    <input type="radio" value="Yes" {...register('question-4')}/>Yes
                    <input type="radio" value="No" {...register('question-4')}/>No
                </div>
            </label>
            <label className="block mt-3 mx-6">
                時代の変化に対応しているか
                <div>
                    <input type="radio" value="Yes" {...register('question-5')}/>Yes
                    <input type="radio" value="No" {...register('question-5')}/>No
                </div>
            </label>
            <label className="block mt-3 mx-6">
                長年たっても廃れないビジネスモデル(ストックビジネス)を持っているか
                <div>
                    <input type="radio" value="Yes" {...register('question-6')}/>Yes
                    <input type="radio" value="No" {...register('question-6')}/>No
                </div>
            </label>
            <label className="block mt-3 mx-6">
                製品、サービスの価格は崩れていないか
                <div>
                    <input type="radio" value="Yes" {...register('question-7')}/>Yes
                    <input type="radio" value="No" {...register('question-7')}/>No
                </div>
            </label>
            <label className="block mt-3 mx-6">
                長年にわたって利益が出ているか
                <div>
                    <input type="radio" value="Yes" {...register('question-8')}/>Yes
                    <input type="radio" value="No" {...register('question-8')}/>No
                </div>
            </label>
            <label className="block mt-3 mx-6">
                利益は年々増加しているか
                <div>
                    <input type="radio" value="Yes" {...register('question-9')}/>Yes
                    <input type="radio" value="No" {...register('question-9')}/>No
                </div>
            </label>
            <label className="block mt-3 mx-6">
                無駄な製品、サービスを作っていないか
                <div>
                    <input type="radio" value="Yes" {...register('question-10')}/>Yes
                    <input type="radio" value="No" {...register('question-10')}/>No
                </div>
            </label>
            <label className="block mt-3 mx-6">
                自己資本比率は高いか
                <div>
                    <input type="radio" value="Yes" {...register('question-11')}/>Yes
                    <input type="radio" value="No" {...register('question-11')}/>No
                </div>
            </label>
            <label className="block mt-3 mx-6">
                ROE・ROAは高いか
                <div>
                    <input type="radio" value="Yes" {...register('question-12')}/>Yes
                    <input type="radio" value="No" {...register('question-12')}/>No
                </div>
            </label>
            <label className="block mt-3 mx-6">
                流動比率は高いか
                <div>
                    <input type="radio" value="Yes" {...register('question-13')}/>Yes
                    <input type="radio" value="No" {...register('question-13')}/>No
                </div>
            </label>
            <label className="block mt-3 mx-6">
                配当性向は高いか
                <div>
                    <input type="radio" value="Yes" {...register('question-14')}/>Yes
                    <input type="radio" value="No" {...register('question-14')}/>No
                </div>
            </label>
            <label className="block mt-3 mx-6">
                各利益率は高いか
                <div>
                    <input type="radio" value="Yes" {...register('question-15')}/>Yes
                    <input type="radio" value="No" {...register('question-15')}/>No
                </div>
            </label>
            <label className="block mt-3 mx-6">
                経営者は派手ではないか
                <div>
                    <input type="radio" value="Yes" {...register('question-16')}/>Yes
                    <input type="radio" value="No" {...register('question-16')}/>No
                </div>
            </label>
            <label className="block mt-3 mx-6">
                雇用関係は良いか
                <div>
                    <input type="radio" value="Yes" {...register('question-17')}/>Yes
                    <input type="radio" value="No" {...register('question-17')}/>No
                </div>
            </label>
            <label className="block mt-3 mx-6">
                経営者は謙虚で真面目か
                <div>
                    <input type="radio" value="Yes" {...register('question-18')}/>Yes
                    <input type="radio" value="No" {...register('question-18')}/>No
                </div>
            </label>
            <label className="block mt-3 mx-6">
                航空産業ではない
                <div>
                    <input type="radio" value="Yes" {...register('question-19')}/>Yes
                    <input type="radio" value="No" {...register('question-19')}/>No
                </div>
            </label>
            <label className="block mt-3 mx-6">
                その企業は、少なくとも数年は収益が増え続けることを可能にする、十分な市場可能性のある製品やサービスをもっているか?
                <div>
                    <input type="radio" value="Yes" {...register('question-20')}/>Yes
                    <input type="radio" value="No" {...register('question-20')}/>No
                </div>
            </label>
            <label className="block mt-3 mx-6">
                現在売れている製品ラインの潜在的な需要がほとんどなくなったときに、経営陣には会社の収益をさらに伸ばすような製品やプロセスを開発・発展し続ける決意があるか?
                <div>
                    <input type="radio" value="Yes" {...register('question-21')}/>Yes
                    <input type="radio" value="No" {...register('question-21')}/>No
                </div>
            </label>
            <label className="block mt-3 mx-6">
                企業の規模と比べて、どのくらい企業のリサーチと開発努力が 効果的であるか?
                <div>
                    <input type="radio" value="Yes" {...register('question-22')}/>Yes
                    <input type="radio" value="No" {...register('question-22')}/>No
                </div>
            </label>
            <label className="block mt-3 mx-6">
                その企業は、平均以上の販売組織があるか?
                <div>
                    <input type="radio" value="Yes" {...register('question-23')}/>Yes
                    <input type="radio" value="No" {...register('question-23')}/>No
                </div>
            </label>
            <label className="block mt-3 mx-6">
                その企業には、十分な利幅があるか?
                <div>
                    <input type="radio" value="Yes" {...register('question-24')}/>Yes
                    <input type="radio" value="No" {...register('question-24')}/>No
                </div>
            </label>
            <label className="block mt-3 mx-6">
                利幅を改善、または維持するために何をしているか?
                <div>
                    <input type="radio" value="Yes" {...register('question-25')}/>Yes
                    <input type="radio" value="No" {...register('question-25')}/>No
                </div>
            </label>
            <label className="block mt-3 mx-6">
                その企業には、労働者・従業員との関係に特筆すべき点があるか?
                <div>
                    <input type="radio" value="Yes" {...register('question-26')}/>Yes
                    <input type="radio" value="No" {...register('question-26')}/>No
                </div>
            </label>
            <label className="block mt-3 mx-6">
                その企業には、企業幹部との関係に特筆すべき点があるか?
                <div>
                    <input type="radio" value="Yes" {...register('question-27')}/>Yes
                    <input type="radio" value="No" {...register('question-27')}/>No
                </div>
            </label>
            <label className="block mt-3 mx-6">
                その企業は、マネージメントに柔軟性があるか?
                <div>
                    <input type="radio" value="Yes" {...register('question-28')}/>Yes
                    <input type="radio" value="No" {...register('question-28')}/>No
                </div>
            </label>
            <label className="block mt-3 mx-6">
                企業の費用分析と会計管理は、どのくらいきちんとしているか?
                <div>
                    <input type="radio" value="Yes" {...register('question-29')}/>Yes
                    <input type="radio" value="No" {...register('question-29')}/>No
                </div>
            </label>
            <label className="block mt-3 mx-6">
                競争相手と比べて、どの位その企業が突出しているかを知る手がかりとなるような、その分野特有の評価できる特徴がなにかあるか?
                <div>
                    <input type="radio" value="Yes" {...register('question-30')}/>Yes
                    <input type="radio" value="No" {...register('question-30')}/>No
                </div>
            </label>
            <label className="block mt-3 mx-6">
                予測可能な未来に、企業の成長が著しいために自己資金調達が行われ、その結果株式の総数が増大し、現在の株主が予期していた利益が、ほとんど相殺されてしまうような事態になりそうか?
                <div>
                    <input type="radio" value="Yes" {...register('question-31')}/>Yes
                    <input type="radio" value="No" {...register('question-31')}/>No
                </div>
            </label>
            <label className="block mt-3 mx-6">
                その企業の経営陣は、物事がうまくいっている時には、さまざまな出来事を投資家にどんどん話すのに、問題や損失が生じると、だんまりを決め込んでしまうようなことがあるか?
                <div>
                    <input type="radio" value="Yes" {...register('question-32')}/>Yes
                    <input type="radio" value="No" {...register('question-32')}/>No
                </div>
            </label>
            <label className="block mt-3 mx-6">
                <div>
                    <input type="radio" value="Yes" {...register('question-33')}/>Yes
                    <input type="radio" value="No" {...register('question-33')}/>No
                </div>
                利益という点で、短期間および長期間の見通しがその企業にあるか?
            </label>
            <label className="block mt-3 mx-6">
                その企業は、完璧な経営体制を敷いているか?
                <div>
                    <input type="radio" value="Yes" {...register('question-34')}/>Yes
                    <input type="radio" value="No" {...register('question-34')}/>No
                </div>
            </label>
            <label className="block mt-3 mx-6">
                若手の幹部は多いか
                <div>
                    <input type="radio" value="Yes" {...register('question-35')}/>Yes
                    <input type="radio" value="No" {...register('question-35')}/>No
                </div>
            </label>
            <input type="submit" />
        </form>
      </>
    );
};

export default CheckStock;