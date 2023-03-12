import { PageTitleProvider } from "@contexts/PageTitleContext";
import { ThemeProvider } from "@emotion/react";
import MainLayout from "@layouts/Main";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import "@styles/global.css";
import { theme } from "../src/styles/theme";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AuthProvider from "@contexts/AuthContext";

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
        </Head>
        {Component.PageLayout ? (
          <Component.PageLayout>
            <Component {...pageProps} />
          </Component.PageLayout>
        ) : (
          <AuthProvider>
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </AuthProvider>
        )}
      </PageTitleProvider>
    </ThemeProvider>
  );
}
