import React from "react";
import usePageTitle from "app/hooks/usePageTitle";
import usePageBackground from "app/hooks/usePageBackground";
import landingBg from "@assets/landingBackground.png";
import { PageContent } from "@components/Page/styled";
import Hero from "./components/Hero";

function Landing() {
  usePageTitle("Pekelná kuchařka");
  usePageBackground(landingBg);

  return (
    <PageContent p="0 200px">
      <Hero />
    </PageContent>
  );
}

export default Landing;
