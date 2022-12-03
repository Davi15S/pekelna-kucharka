import React from "react";
import landingBg from "@assets/landingBackground.png";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import { PageContent } from "@components/Page/styled";
import usePageTitle from "@hooks/usePageTitle";
import usePageBackground from "@hooks/usePageBackground";

function Landing() {
  usePageTitle("Pekelná kuchařka");
  usePageBackground(landingBg, "100vh");

  return (
    <PageContent p="0 200px">
      <Hero />
      <Stats />
    </PageContent>
  );
}

export default Landing;
