const Calc = () => {
    return (
        <>
            <main className="h-screen">
                <h1 className="text-2xl m-3">企業価値計算</h1>
                <form className="px-10 py-8 w-3/4 my-4 mx-auto border rounded-lg">
                    <label htmlFor="profit" className="block my-5">
                        当期純利益
                        <input id="profit" type="text" className="block border w-full h-9 outline-none p-3 rounded-md" />
                    </label>
                    <label htmlFor="depreciation" className="block my-5">
                        減価償却費
                        <input id="depreciation" type="text" className="block border w-full h-9 outline-none p-3 rounded-md" />
                    </label>
                    <label htmlFor="investing" className="block my-5">
                        設備投資
                        <input id="investing" type="text" className="block border w-full h-9 outline-none p-3 rounded-md" />
                    </label>
                    <label htmlFor="roic" className="block my-5">
                        ROIC
                        <input id="roic" type="text" className="block border w-full h-9 outline-none p-3 rounded-md" />
                    </label>
                    <div className="mx-auto w-1/3">
                        <input type="submit" className="border py-1 w-full"/>
                    </div>
                </form>
            </main>
        </>
    );
};

export default Calc;