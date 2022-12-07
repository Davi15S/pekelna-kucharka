import { Column } from "@app/styled";
import Page from "@components/Page";
import { PageBackgroundProvider } from "@contexts/PageBackgroundContext";
import { StaticImageData } from "next/image";
import React, { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function MainLayout({ children }: { children: React.ReactNode }) {
  const [bgImage, setBgImage] = useState<StaticImageData>();
  const [bgHeight, setBgHeight] = useState<string>();

  return (
    <PageBackgroundProvider value={{ bgImage, setBgImage, bgHeight, setBgHeight }}>
      <div style={{ overflow: "hidden" }}>
        <Navbar />
        <Page>{children}</Page>
        <Footer />
      </div>
    </PageBackgroundProvider>
  );
}

export default MainLayout;
