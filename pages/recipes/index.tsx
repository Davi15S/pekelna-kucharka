import { getCategories } from "@api/categories";
import { Categories } from "@shared/categories";
import Recipes from "@views/Main/Recipes";
import React from "react";

function RecipesPage({ categories }: { categories: Categories }) {
  return <Recipes categories={categories} />;
}

export default RecipesPage;

export async function getServerSideProps() {
  const categories = await getCategories();
  return { props: { categories: categories.data.attributes } };
}
