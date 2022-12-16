import { Column } from "@app/styled";
import BgTitle from "@components/BgTitle";
import React from "react";
import Carousel from "./components/Carousel";

function Novelty() {
  return (
    <Column w="100%" p="100px 0">
      <BgTitle title="Novinky" subTitle="Novinky" />
      <Carousel />
    </Column>
  );
}

export default Novelty;
