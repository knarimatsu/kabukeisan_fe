import SummaryCard from "../../components/SummaryCard";
import { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";

const Portfolio = () => {
    const { data: session } = useSession();
    return (
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
    );
};

export default Portfolio;
