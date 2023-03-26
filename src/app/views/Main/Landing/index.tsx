import React, { useEffect, useState } from "react";
import landingBg from "@assets/backgrounds/landingBackground.png";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import usePageTitle from "@hooks/usePageTitle";
import usePageBackground from "@hooks/usePageBackground";
import Favourite from "./components/Favourite";
import { PageContent } from "@layouts/Main/components/Page/styled";
import Trends from "./components/Trends";
import Novelty from "./components/Novelty";
import { Recipe } from "@shared/recipe";

function Landing({ recipes }: { recipes: Recipe[] }) {
  usePageTitle(undefined);
  usePageBackground(landingBg, "100vh");

  return (
    <PageContent>
      <Hero />
      <Stats />
      <Favourite />
      <Trends recipes={recipes} />
      <Novelty recipes={recipes} />
    </PageContent>
  );
}

export default Landing;
