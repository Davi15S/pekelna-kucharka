import { getRecipe } from "@api/recipes";
import { RecipeAttributes } from "@shared/recipe";
import Recipe from "@views/Main/Recipe";
import { GetServerSideProps } from "next";
import React from "react";

function RecipeSite({ recipe }: { recipe: RecipeAttributes }) {
  return <Recipe recipe={recipe} />;
}

export default RecipeSite;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query as { id: string };
  const recipe = await getRecipe(id);
  return { props: { recipe: recipe.data.attributes } };
};
