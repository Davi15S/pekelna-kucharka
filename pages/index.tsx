import { getRecipes } from "@api/recipes";
import { Recipe } from "@shared/recipe";
import Landing from "@views/Main/Landing";
import React from "react";

export default function Home({ recipes }: { recipes: Recipe[] }) {
  return <Landing recipes={recipes} />;
}

export async function getServerSideProps() {
  const recipes = await getRecipes();
  return { props: { recipes: recipes?.data } };
}
