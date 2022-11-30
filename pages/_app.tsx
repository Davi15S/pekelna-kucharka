import MainLayout from "app/layouts/Main";
import type { AppProps } from "next/app";

export type ComponentLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: ({ children }: { children: React.ReactNode }) => JSX.Element;
  };
};

export default function App({ Component, pageProps }: ComponentLayout) {
  return (
    <>
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
