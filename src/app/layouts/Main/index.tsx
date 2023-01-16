import Page from "@layouts/Main/components/Page";
import { PageBackgroundProvider } from "@contexts/PageBackgroundContext";
import { StaticImageData } from "next/image";
import React, { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import styled from "@emotion/styled";

function MainLayout({ children }: { children: React.ReactNode }) {
  const [bgImage, setBgImage] = useState<StaticImageData>();
  const [bgHeight, setBgHeight] = useState<string>();
  const [active, setActive] = useState(false);

  const handleNavbar = () => {
    if (active) {
      document.body.classList.remove("openNavbar");
    } else {
      document.body.classList.add("openNavbar");
    }
    setActive(!active);
  };

  return (
    <PageBackgroundProvider value={{ bgImage, setBgImage, bgHeight, setBgHeight }}>
      <PageContainer active={active}>
        <Navbar active={active} handleNavbar={handleNavbar} />
        <Page>{children}</Page>
        <Footer />
      </PageContainer>
    </PageBackgroundProvider>
  );
}

const PageContainer = styled.div<{ active: boolean }>`
  contain: ${({ active }) => (active ? "" : "paint")};
`;

export default MainLayout;
