import { Recipe, RecipeForm } from "@shared/recipe";
import { fetchApi } from "..";

export const getRecipes = () => {
  return fetchApi<Recipe>("recipes");
};

export const createRecipe = (data: RecipeForm) => {
  return fetchApi("recipes", undefined, "POST", data);
};
