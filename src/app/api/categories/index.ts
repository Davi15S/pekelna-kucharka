import { fetchApi } from "..";

export const getCategories = () => {
  return fetchApi<{ data: { attributes: { categories: { category: string }[]; originOfMeals: { category: string }[] } } }>(`category?populate=*`);
};
