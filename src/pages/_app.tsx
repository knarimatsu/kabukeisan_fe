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
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
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
            <Script
                id="gtm-script"
                strategy="afterInteractive"
                // dangerouslySetInnerHTML={{
                //     __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                //                     new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                //                     j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                //                     'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                //                     })(window,document,'script','dataLayer','GTM-T2RKJ6P');`,
                // }}
            >
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
                `}
            </Script>
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
