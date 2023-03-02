import { Recipe } from "@shared/recipe";
import { fetchApi } from "..";

export const getRecipes = () => {
  return fetchApi<Recipe>("recipes");
};
