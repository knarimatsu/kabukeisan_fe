import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { RecoilRoot } from "recoil";
import "../../src/i18n/config";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import Script from "next/script";
import type { Session } from "next-auth";

function MyApp({ Component, pageProps }: AppProps<{ session: Session }>) {
    const { t } = useTranslation();
    return (
        <>
            <Head>
                <title>{t("header.title")}</title>
                <link rel="icon" href="../public/favicons/favicon.ico" />
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <Script
                src={`https://www.googletagmanager.com/gtm.js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
                strategy="afterInteractive"
            />
            <Script id="gtm-script" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
                `}
            </Script>
            <Script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1990375823734573"
                crossOrigin="anonymous"
            ></Script>
            <RecoilRoot>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </RecoilRoot>
        </>
    );
}

export default MyApp;
