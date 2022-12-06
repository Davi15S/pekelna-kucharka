import React from "react";
import landingBg from "@assets/landingBackground.png";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import usePageTitle from "@hooks/usePageTitle";
import usePageBackground from "@hooks/usePageBackground";
import Favourite from "./components/Favourite";
import { PageContent } from "@components/Page/styled";

function Landing() {
  usePageTitle("Pekelná kuchařka");
  usePageBackground(landingBg, "100vh");

  return (
    <>
      <PageContent>
        <Hero />
        <Stats />
        <Favourite />
      </PageContent>
    </>
  );
}

export default Landing;
