import { Column, Row } from "@app/styled";
import BgTitle from "@components/BgTitle";
import Button from "@components/Button";
import { useRouter } from "next/router";
import React from "react";
import Filter from "./components/Filter";
import RecipeItem from "./components/RecipeItem";
import { ContentWrapper, RecipesWrapper } from "./styled";

function Content() {
  const { push } = useRouter();

  return (
    <Column w="100%">
      <BgTitle title="Katalog" top="-80px" />
      <BgTitle title="receptů" top="70px" left="20vw" mobileTop="40px" mobileLeft="25vw" />
      <ContentWrapper justifyContent="space-around">
        <Filter />
        <RecipesWrapper w="65%" alignItems="center">
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
      <Row p="40px 0 0 0" justifyContent="center">
        <Button text="Zobrazit další" color="red" maxW="220px" h="45px" />
      </Row>
    </Column>
  );
}

export default Content;
