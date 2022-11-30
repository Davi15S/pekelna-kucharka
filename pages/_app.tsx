import MainLayout from "app/layouts/Main";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/global.css";

type ComponentLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: ({ children }: { children: React.ReactNode }) => JSX.Element;
  };
};

export default function App({ Component, pageProps }: ComponentLayout) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      </Head>
      {Component.PageLayout ? (
        <Component.PageLayout>
          <Component {...pageProps} />
        </Component.PageLayout>
      ) : (
        <>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </>
      )}
    </>
  );
}
