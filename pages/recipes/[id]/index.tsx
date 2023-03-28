import { getRecipe } from "@api/recipes";
import { RecipeAttributes } from "@shared/recipe";
import { GetServerSideProps } from "next";
import React from "react";

function RecipeSite({ recipe }: { recipe: RecipeAttributes }) {
  console.log(recipe);
  return <div>Ahoj</div>;
}

export default RecipeSite;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query as { id: string };
  const recipe = await getRecipe(id);
  return { props: { recipe: recipe.data.attributes } };
};
