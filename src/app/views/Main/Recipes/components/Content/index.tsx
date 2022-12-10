import { Column, Row } from "@app/styled";
import BgTitle from "@components/BgTitle";
import React from "react";
import RecipeItem from "./components/RecipeItem";
import { ContentWrapper, FilterWrapper, RecipesWrapper } from "./styled";

function Content() {
  return (
    <ContentWrapper p="130px 0 0 0" justifyContent="space-between">
      <BgTitle title="Katalog" />
      <BgTitle title="receptů" top="50px" left="30vw" />
      <FilterWrapper w="30%">Filter</FilterWrapper>
      <RecipesWrapper w="65%">
        <Row p="0 0 30px 0">
          <Row>Nalezeno 21 receptů</Row>
          <Row justifyContent="flex-end">Seřadit podle: Nejnovější</Row>
        </Row>
        <RecipeItem />
        <RecipeItem />
        <RecipeItem />
        <RecipeItem />
        <RecipeItem />
        <RecipeItem />
      </RecipesWrapper>
    </ContentWrapper>
  );
}

export default Content;
