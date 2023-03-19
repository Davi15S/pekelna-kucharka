import React from "react";
import recipesBg from "@assets/backgrounds/recipesBackground.png";
import usePageBackground from "@hooks/usePageBackground";
import usePageTitle from "@hooks/usePageTitle";
import { PageContent } from "@layouts/Main/components/Page/styled";
import Hero from "./components/Hero";
import Content from "./components/Content";
import { Categories } from "@shared/categories";

function Recipes({ categories }: { categories: Categories }) {
  usePageBackground(recipesBg, "600px");
  usePageTitle("Recepty");

  return (
    <PageContent topP>
      <Hero />
      <Content categories={categories} />
    </PageContent>
  );
}

export default Recipes;
