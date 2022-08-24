const Onkabu = () => {
    return(
        <main className="h-screen">
            <h1 className="text-2xl m-3">{'Onkabu'}</h1>
            <form className="px-10 py-8 w-3/4 my-4 mx-auto border rounded-lg">
                <label htmlFor="stock" className="block my-5">
                    取得株数
                    <input id="stock" type="text" className="block border w-full h-9 outline-none p-3 rounded-md" />
                </label>
                <label htmlFor="buy-price" className="block my-5">
                    取得株価
                    <input id="buy-price" type="text" className="block border w-full h-9 outline-none p-3 rounded-md" />
                </label>
                <label htmlFor="now-price" className="block my-5">
                    現在株価
                    <input id="now-price" type="text" className="block border w-full h-9 outline-none p-3 rounded-md" />
                </label>
                <div className="mx-auto w-1/3"> 
                    <input type="submit" className="border py-1 w-full"/>
                </div>
            </form>
        </main>
    );
};

export default Onkabu;