import Page from "@layouts/Main/components/Page";
import { PageBackgroundProvider } from "@contexts/PageBackgroundContext";
import { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { PageFixedContextProvider } from "@contexts/PageFixedContext";
import { disableScroll, enableScroll, protectedRoutes } from "@app/utils";
import { useRouter } from "next/router";
import { useAuth } from "@contexts/AuthContext";
import Loading from "@components/Loading";

function MainLayout({ children }: { children: React.ReactNode }) {
  const [bgImage, setBgImage] = useState<StaticImageData>();
  const [bgHeight, setBgHeight] = useState<string>();
  const [active, setActive] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const router = useRouter();
  const { isAuthenticated, isLoading, user } = useAuth();

  const handleNavbar = async () => {
    active ? enableScroll() : disableScroll();
    setActive(!active);
  };

  const handleIsFixed = () => {
    setIsFixed(!isFixed);
  };

  const pathIsProtected = protectedRoutes.indexOf(router.pathname) !== -1;

  useEffect(() => {
    if (!isLoading && !isAuthenticated && pathIsProtected) {
      router.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, isAuthenticated, pathIsProtected, user]);

  if ((isLoading || !isAuthenticated) && pathIsProtected) {
    return <Loading p="50px" />;
  }

  return (
    <PageBackgroundProvider value={{ bgImage, setBgImage, bgHeight, setBgHeight }}>
      <PageFixedContextProvider value={{ isFixed, handleIsFixed }}>
        <Page>
          <Navbar active={active} handleClick={handleNavbar} />
          {children}
          <Footer />
        </Page>
      </PageFixedContextProvider>
    </PageBackgroundProvider>
  );
}

export default MainLayout;
