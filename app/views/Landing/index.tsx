import PageTitle from "@components/PageTitle";
import React from "react";
import { LandingWrapper } from "./styled";
import landingBg from "@assets/landingBackground.png";
import { PageContent } from "app/styled";

function Landing() {
  return (
    <LandingWrapper bgImage={landingBg}>
      <PageTitle title="Pekelná kuchařka" />
      <PageContent>
        <div>ahoj</div>
      </PageContent>
    </LandingWrapper>
  );
}

export default Landing;
