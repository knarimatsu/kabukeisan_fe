import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { Layout } from "../components/Layout";
import Footer from "../components/Footer";
import { RecoilRoot } from "recoil";
import "../../src/i18n/config";
import Head from "next/head";
import { useTranslation } from "react-i18next";

function MyApp({ Component, pageProps }: AppProps) {
    const { t } = useTranslation();
    return (
        <>
            <Head>
                <title>{t("header.title")}</title>
                <link rel="icon" href="../public/favicons/favicon.ico" />
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <RecoilRoot>
                <SessionProvider>
                    <Header />
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                    <Footer />
                </SessionProvider>
            </RecoilRoot>
        </>
    );
}

export default MyApp;
