import React from "react";
import usePageTitle from "app/hooks/usePageTitle";
import usePageBackground from "app/hooks/usePageBackground";
import landingBg from "@assets/landingBackground.png";
import { PageContent } from "@components/Page/styled";

function Landing() {
  usePageTitle("Pekelná kuchařka");
  usePageBackground(landingBg);

  return <PageContent style={{ height: "2000px" }}>Ahoj</PageContent>;
}

export default Landing;
