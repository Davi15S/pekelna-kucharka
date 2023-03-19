import { Recipe } from "@shared/recipe";
import { fetchApi } from "..";

export const getRecipes = (query?: string, signal?: AbortSignal) => {
  return fetchApi<{ data: Recipe[] }>("recipes?populate=*" + `${query ? `&${query}` : ""}`, undefined, "GET", undefined, undefined, signal);
};

export const createRecipe = (data: FormData, token: string) => {
  return fetchApi("recipes", token, "POST", null, data);
};

export const getRecipe = (id: string) => {
  return fetchApi<{ data: Recipe }>(`recipes/${id}?populate[0]=images&populate[1]=ingredients&populate[2]=author&populate[3]=comments.author`);
};
