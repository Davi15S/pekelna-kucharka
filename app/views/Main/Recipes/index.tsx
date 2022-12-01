import usePageBackground from "app/hooks/usePageBackground";
import React from "react";
import recipesBg from "@assets/recipesBackground.png";
import usePageTitle from "app/hooks/usePageTitle";
import { PageContent } from "@components/Page/styled";

function Recipes() {
  usePageBackground(recipesBg, "600px");
  usePageTitle("Pekelná kuchařka | Recepty");

  return <PageContent style={{ height: "2000px" }}>Recipes</PageContent>;
}

export default Recipes;
