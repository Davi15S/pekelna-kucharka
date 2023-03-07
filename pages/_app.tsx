import { PageTitleProvider } from "@contexts/PageTitleContext";
import { ThemeProvider } from "@emotion/react";
import MainLayout from "@layouts/Main";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import "@styles/global.css";
import { theme } from "../src/styles/theme";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Cookies from "js-cookie";
import { getMe } from "@api/user";
import { User } from "@shared/user";
import { UserProvider } from "@contexts/UserContext";

type ComponentLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: ({ children }: { children: React.ReactNode }) => JSX.Element;
  };
};

export default function App({ Component, pageProps }: ComponentLayout) {
  const [title, setTitle] = useState<string>();
  const [token, setToken] = useState<string>();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchMe = async () => {
      const token = Cookies.get("token");
      setToken(token);
      if (token) {
        await getMe(token).then((user) => setUser(user));
      }
    };

    fetchMe();
  }, []);

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
          <>
            <MainLayout>
              <UserProvider value={{ user, setUser }}>
                <Component {...pageProps} />
              </UserProvider>
            </MainLayout>
          </>
        )}
      </PageTitleProvider>
    </ThemeProvider>
  );
}
