import { ThemeProvider } from "@emotion/react";
import { PageTitleProvider } from "app/contexts/PageTitleContext";
import MainLayout from "app/layouts/Main";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import { theme } from "styles/theme";
import "../styles/global.css";

type ComponentLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: ({ children }: { children: React.ReactNode }) => JSX.Element;
  };
};

export default function App({ Component, pageProps }: ComponentLayout) {
  const [title, setTitle] = useState<string>();

  return (
    <ThemeProvider theme={theme}>
      <PageTitleProvider value={{ title, setTitle }}>
        <Head>
          <title>{title}</title>
          <meta property="og:title" content="My page title" key="title" />
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
      </PageTitleProvider>
    </ThemeProvider>
  );
}
