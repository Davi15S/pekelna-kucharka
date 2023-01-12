import { Column, Row } from "@app/styled";
import BgTitle from "@components/BgTitle";
import React from "react";
import Carousel from "./components/Carousel";
import Item from "./components/Item";
import { ItemsWrapper } from "./styled";

function Novelty() {
  return (
    <Column w="100%" p="100px 0">
      <BgTitle title="Novinky" subTitle="Novinky" />
      <Carousel />
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
