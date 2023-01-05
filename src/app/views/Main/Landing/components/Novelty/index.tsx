import { Column, Row } from "@app/styled";
import BgTitle from "@components/BgTitle";
import React from "react";
import Carousel from "./components/Carousel";
import Item from "./components/Item";

function Novelty() {
  return (
    <Column w="100%" p="100px 0">
      <BgTitle title="Novinky" subTitle="Novinky" />
      <Carousel />
      <Row justifyContent="space-evenly" flexWrap="wrap" m="150px 0 0 0">
        <Item />
        <Item />
        <Item />
        <Item />
      </Row>
    </Column>
  );
}

export default Novelty;
