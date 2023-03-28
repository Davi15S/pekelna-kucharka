import { getRecipe } from "@api/recipes";
import { getUnits } from "@api/units";
import { RecipeAttributes } from "@shared/recipe";
import { IUnits } from "@shared/units";
import EditRecipe from "@views/Main/EditRecipe";
import { GetServerSideProps } from "next";
import React from "react";

function EditRecipePage({ recipe, units }: { recipe: RecipeAttributes; units: IUnits }) {
  return <EditRecipe recipe={recipe} units={units} />;
}

export default EditRecipePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query as { id: string };
  const recipe = await getRecipe(id);
  const units = await getUnits();
  return { props: { recipe: recipe.data.attributes, units: units.data.attributes } };
};
