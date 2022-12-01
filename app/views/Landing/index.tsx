import PageTitle from "@components/PageTitle";
import React from "react";
import landingBg from "@assets/landingBackground.png";
import usePageBackground from "app/hooks/usePageBackground";

function Landing() {
  usePageBackground(landingBg);

  return (
    <>
      <PageTitle title="Pekelná kuchařka" />
      <div>ahoj</div>
    </>
  );
}

export default Landing;
