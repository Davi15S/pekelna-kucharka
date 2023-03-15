import { Column } from "@app/styled";
import BgTitle from "@components/BgTitle";
import { Recipe } from "@shared/recipe";
import React from "react";
import Carousel from "./components/Carousel";
import Item from "./components/Item";
import { ItemsWrapper } from "./styled";

function Novelty({ recipes }: { recipes: Recipe[] }) {
  return (
    <Column w="100%" p="100px 0">
      <BgTitle title="Novinky" subTitle="Novinky" />
      <Carousel recipes={recipes} />
      <ItemsWrapper>
        <Item />
        <Item />
        <Item />
        <Item />
      </ItemsWrapper>
    </Column>
  );
}

export default Novelty;
