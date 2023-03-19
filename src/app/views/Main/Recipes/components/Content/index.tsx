import { Column, Row } from "@app/styled";
import BgTitle from "@components/BgTitle";
import Loading from "@components/Loading";
import { Recipe } from "@shared/recipe";
import React, { useState } from "react";
import Filter from "./components/Filter";
import RecipeItem from "./components/RecipeItem";
import { ContentWrapper, RecipesWrapper } from "./styled";

function Content() {
  const [recipes, setRecipes] = useState<Recipe[]>();

  return (
    <Column w="100%">
      <BgTitle title="Katalog" top="-80px" mobileTop="0px" />
      <BgTitle title="receptů" top="70px" left="20vw" mobileTop="40px" mobileLeft="25vw" />
      <ContentWrapper justifyContent="space-around">
        <Filter setRecipes={(recipes) => setRecipes(recipes)} />
        <RecipesWrapper w="65%" alignItems="center">
          <Row p="0 0 30px 0">
            <Row>Nalezeno {recipes?.length} receptů</Row>
            <Row justifyContent="flex-end">Seřadit podle: Nejnovější</Row>
          </Row>
          {recipes ? (
            <>
              {recipes.map((recipe) => (
                <RecipeItem key={recipe.id} recipe={recipe.attributes} id={recipe.id} />
              ))}
            </>
          ) : (
            <Loading />
          )}
        </RecipesWrapper>
      </ContentWrapper>
    </Column>
  );
}

export default Content;
