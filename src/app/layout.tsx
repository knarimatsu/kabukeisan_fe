"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import { RecoilRoot } from "recoil";
import { useTranslation } from "react-i18next";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

const Header = dynamic(() => import("./components/Header"));
const Footer = dynamic(() => import("./components/Footer"));

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
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
                <html lang="en">
                    <body className={inter.className}>
                        <Header />
                        {children}
                        <Footer />
                    </body>
                </html>
            </RecoilRoot>
        </>
    );
}
