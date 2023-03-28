import { Recipe } from "@shared/recipe";
import { User } from "@shared/user";
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

export const getUsersRecipes = (id: number) => {
  return fetchApi<User>(`users/${id}?populate[0]=recipes&populate[1]=recipes.images`);
};

export const deleteRecipe = (id: number, token: string) => {
  return fetchApi(`recipes/${id}`, token, "DELETE");
};
