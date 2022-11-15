const Header = () => {
    const title = 'ONKABU';
    return(
        <>
            <header className="border-b h-12 text-3xl items-center flex">
                <div className="mx-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
                <div>{title}</div>
            </header>
        </>
    );
};

export default Header;