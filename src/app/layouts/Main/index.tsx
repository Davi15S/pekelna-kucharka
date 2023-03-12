import Page from "@layouts/Main/components/Page";
import { PageBackgroundProvider } from "@contexts/PageBackgroundContext";
import { StaticImageData } from "next/image";
import React, { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { PageFixedContextProvider } from "@contexts/PageFixedContext";
import { disableScroll, enableScroll } from "@app/utils";

function MainLayout({ children }: { children: React.ReactNode }) {
  const [bgImage, setBgImage] = useState<StaticImageData>();
  const [bgHeight, setBgHeight] = useState<string>();
  const [active, setActive] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const handleNavbar = async () => {
    active ? enableScroll() : disableScroll();
    setActive(!active);
  };

  const handleIsFixed = () => {
    setIsFixed(!isFixed);
  };

  return (
    <>
      <PageBackgroundProvider value={{ bgImage, setBgImage, bgHeight, setBgHeight }}>
        <PageFixedContextProvider value={{ isFixed, handleIsFixed }}>
          <Page>
            <Navbar active={active} handleClick={handleNavbar} />
            {children}
          </Page>
          <Footer />
        </PageFixedContextProvider>
      </PageBackgroundProvider>
    </>
  );
}

export default MainLayout;
