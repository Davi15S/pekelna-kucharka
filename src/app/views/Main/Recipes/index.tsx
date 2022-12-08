import React from "react";
import recipesBg from "@assets/backgrounds/recipesBackground.png";
import usePageBackground from "@hooks/usePageBackground";
import usePageTitle from "@hooks/usePageTitle";
import { PageContent } from "@layouts/Main/components/Page/styled";

function Recipes() {
  usePageBackground(recipesBg, "600px");
  usePageTitle("Pekelná kuchařka | Recepty");

  return <PageContent style={{ height: "2000px" }}>Recipes</PageContent>;
}

export default Recipes;
