import React, { useEffect, useState } from "react";
import recipesBg from "@assets/backgrounds/recipesBackground.png";
import usePageBackground from "@hooks/usePageBackground";
import usePageTitle from "@hooks/usePageTitle";
import { PageContent } from "@layouts/Main/components/Page/styled";
import Hero from "./components/Hero";
import Content from "./components/Content";
import { Categories } from "@shared/categories";
import { getCategories } from "@api/categories";
import SearchProvider from "./contexts/SearchContext";

function Recipes() {
  usePageBackground(recipesBg, "600px");
  usePageTitle("Recepty");
  const [categories, setCategories] = useState<Categories>();

  useEffect(() => {
    (async () => {
      await getCategories().then((data) => setCategories(data.data.attributes));
    })();
  }, []);

  return (
    <SearchProvider>
      <PageContent topP>
        <Hero />
        <Content categories={categories} />
      </PageContent>
    </SearchProvider>
  );
}

export default Recipes;
