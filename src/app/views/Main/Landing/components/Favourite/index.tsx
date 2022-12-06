import { Column, Row } from "@app/styled";
import BgTitle from "@components/BgTitle";
import React from "react";
import FavouriteItem from "./components/FavouriteItem";
import favourite1 from "@assets/favourite1.png";
import { ItemsWrapper } from "./styled";

function Favourite() {
  return (
    <Row p="150px 0">
      <Column w="100%">
        <BgTitle title="Oblíbené" subTitle="Oblíbené kategorie" />
        <ItemsWrapper justifyContent="space-between">
          <FavouriteItem img={favourite1} title="Hlavní chody" />
          <FavouriteItem img={favourite1} title="Hlavní chody" />
          <FavouriteItem img={favourite1} title="Hlavní chody" />
          <FavouriteItem img={favourite1} title="Hlavní chody" />
          <FavouriteItem img={favourite1} title="Hlavní chody" />
        </ItemsWrapper>
      </Column>
    </Row>
  );
}

export default Favourite;
