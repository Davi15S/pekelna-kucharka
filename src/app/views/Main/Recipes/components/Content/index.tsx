import { getRecipes } from "@api/recipes";
import { Column, Row } from "@app/styled";
import BgTitle from "@components/BgTitle";
import Button from "@components/Button";
import { Recipe } from "@shared/recipe";
import React, { useEffect, useState } from "react";
import Filter from "./components/Filter";
import RecipeItem from "./components/RecipeItem";
import { ContentWrapper, RecipesWrapper } from "./styled";

function Content() {
  const [recipes, setRecipes] = useState<{ data: Recipe[] }>();

  useEffect(() => {
    const fetchRecipes = async () => {
      await getRecipes().then((data) => setRecipes(data));
    };

    fetchRecipes();
  }, []);

  return (
    <Column w="100%">
      <BgTitle title="Katalog" top="-80px" mobileTop="0px" />
      <BgTitle title="receptů" top="70px" left="20vw" mobileTop="40px" mobileLeft="25vw" />
      <ContentWrapper justifyContent="space-around">
        <Filter />
        <RecipesWrapper w="65%" alignItems="center">
          {recipes && (
            <>
              <Row p="0 0 30px 0">
                <Row>Nalezeno {recipes?.data.length} receptů</Row>
                <Row justifyContent="flex-end">Seřadit podle: Nejnovější</Row>
              </Row>
              {recipes.data.map((recipe) => (
                <RecipeItem key={recipe.id} recipe={recipe.attributes} id={recipe.id} />
              ))}
            </>
          )}
        </RecipesWrapper>
      </ContentWrapper>
      <Row p="40px 0 0 0" justifyContent="center">
        <Button text="Zobrazit další" color="red" maxW="220px" h="45px" />
      </Row>
    </Column>
  );
}

export default Content;
