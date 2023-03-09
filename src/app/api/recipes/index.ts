import { Recipe } from "@shared/recipe";
import { fetchApi } from "..";

export const getRecipes = () => {
  return fetchApi<{ data: Recipe[] }>("recipes?populate=images");
};

export const createRecipe = (data: FormData, token: string) => {
  return fetchApi("recipes", token, "POST", null, data);
};
