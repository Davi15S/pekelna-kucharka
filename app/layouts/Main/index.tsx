import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import Page from "@components/Page";
import { PageBackgroundProvider } from "app/contexts/PageBackgroundContext";
import { StaticImageData } from "next/image";
import React, { useState } from "react";

function MainLayout({ children }: { children: React.ReactNode }) {
  const [bgImage, setBgImage] = useState<StaticImageData>();

  return (
    <PageBackgroundProvider value={{ bgImage, setBgImage }}>
      <Navbar />
      <Page bgImage={bgImage}>{children}</Page>
      <Footer />
    </PageBackgroundProvider>
  );
}

export default MainLayout;
