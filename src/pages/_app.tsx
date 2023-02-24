import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { Layout } from "../components/Layout";
import Footer from "../components/Footer";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <SessionProvider>
                <Header />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
                <Footer />
            </SessionProvider>
        </RecoilRoot>
    );
}

export default MyApp;
