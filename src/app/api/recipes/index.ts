import { Recipe } from "@shared/recipe";
import { fetchApi } from "..";

export const getRecipes = () => {
  return fetchApi<Recipe>("recipes");
};

export const createRecipe = (data: FormData) => {
  return fetchApi("recipes", undefined, "POST", null, data);
};
