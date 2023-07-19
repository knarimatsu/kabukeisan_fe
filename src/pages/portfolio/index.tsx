import { useSession, signIn, signOut } from "next-auth/react";
import dynamic from "next/dynamic";
import React from "react";

const Header = dynamic(() => import("../../components/Header"));
const Footer = dynamic(() => import("../../components/Footer"));

const Portfolio = () => {
    const { data: session } = useSession();
    return (
        <>
            <Header />
            <main className="h-screen">
                {session && (
                    <div>
                        <h1>ポートフォリオ</h1>
                        <p>ログインユーザー</p>
                        <div>{session.user?.name}</div>
                        <p>ログインユーザーメールアドレス</p>
                        <div>{session.user?.email}</div>
                        <img src={session.user?.image as string} />
                        <button onClick={() => signOut()}>Sign out</button>
                    </div>
                )}
                {!session && (
                    <div>
                        <p>
                            ポートフォリオ機能を利用したい場合はログインしてください
                        </p>
                        <button onClick={() => signIn()}>Sign in</button>
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
};

export default Portfolio;
