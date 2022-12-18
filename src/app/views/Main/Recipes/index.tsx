import React from "react";
import recipesBg from "@assets/backgrounds/recipesBackground.png";
import usePageBackground from "@hooks/usePageBackground";
import usePageTitle from "@hooks/usePageTitle";
import { PageContent } from "@layouts/Main/components/Page/styled";
import Hero from "./components/Hero";
import Content from "./components/Content";

function Recipes() {
  usePageBackground(recipesBg, "600px");
  usePageTitle("Recepty");

  return (
    <PageContent topP>
      <Hero />
      <Content />
    </PageContent>
  );
}

export default Recipes;
