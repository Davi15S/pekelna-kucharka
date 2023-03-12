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
import { getRecipes } from "@api/recipes";
import { Recipe } from "@shared/recipe";

function Landing() {
  usePageTitle(undefined);
  usePageBackground(landingBg, "100vh");
  const [recipes, setRecipes] = useState<Recipe[]>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getRecipes();
      setRecipes(res.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <PageContent>
        <Hero />
        <Stats />
        <Favourite />
        {recipes && (
          <>
            <Trends recipes={recipes} />
            <Novelty recipes={recipes} />
          </>
        )}
      </PageContent>
    </>
  );
}

export default Landing;
