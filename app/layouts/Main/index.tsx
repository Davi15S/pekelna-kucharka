import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import Page from "@components/Page";
import { PageBackgroundProvider } from "app/contexts/PageBackgroundContext";
import { StaticImageData } from "next/image";
import React, { useState } from "react";

function MainLayout({ children }: { children: React.ReactNode }) {
  const [bgImage, setBgImage] = useState<StaticImageData>();
  const [bgHeight, setBgHeight] = useState<string>("auto");

  return (
    <PageBackgroundProvider value={{ bgImage, setBgImage, bgHeight, setBgHeight }}>
      <Navbar />
      <Page>{children}</Page>
      <Footer />
    </PageBackgroundProvider>
  );
}

export default MainLayout;
