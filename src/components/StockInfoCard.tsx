const StockInfoCard = () => {
    return(
        <>
            <section className="border border-inherit rounded-lg m-5 drop-shadow-md">
                <div className="flex justify-start">
                    <div className="m-5 w-1/2">
                        <div className="m-2 text-lg font-bold">益利回り:<span>10%</span></div>
                        <div className="m-2 text-lg font-bold">配当利回り:<span>3%</span></div>
                        <div className="m-2 text-lg font-bold">ROE:<span>5%</span></div>
                    </div>
                    <div className="m-5 w-1/2">
                        <div className="m-2 text-lg font-bold">PER: <span>5</span>倍</div>
                        <div className="m-2 text-lg font-bold">PBR: <span>10</span>倍</div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default StockInfoCard;