import React, { useEffect } from "react";
import landingBg from "@assets/backgrounds/landingBackground.png";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import usePageTitle from "@hooks/usePageTitle";
import usePageBackground from "@hooks/usePageBackground";
import Favourite from "./components/Favourite";
import { PageContent } from "@layouts/Main/components/Page/styled";
import Trends from "./components/Trends";
import Novelty from "./components/Novelty";
import { getRecipes } from "@api/recipes";

function Landing() {
  usePageTitle(undefined);
  usePageBackground(landingBg, "100vh");

  useEffect(() => {
    const fetchData = async () => {
      const res = await getRecipes();
      console.log(res);
    };

    fetchData();
  }, []);

  return (
    <>
      <PageContent>
        <Hero />
        <Stats />
        <Favourite />
        <Trends />
        <Novelty />
      </PageContent>
    </>
  );
}

export default Landing;
