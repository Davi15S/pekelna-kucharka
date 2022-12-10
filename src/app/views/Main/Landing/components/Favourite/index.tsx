import { Column, Row } from "@app/styled";
import BgTitle from "@components/BgTitle";
import React from "react";
import FavouriteItem from "./components/FavouriteItem";
import { ItemsWrapper } from "./styled";
import favourite1 from "@assets/favourites/favourite1.png";
import favourite2 from "@assets/favourites/favourite2.png";
import favourite3 from "@assets/favourites/favourite3.png";
import favourite4 from "@assets/favourites/favourite4.png";

function Favourite() {
  return (
    <Row p="150px 0">
      <Column w="100%">
        <BgTitle title="Oblíbené" subTitle="Oblíbené kategorie" />
        <ItemsWrapper justifyContent="space-between">
          <FavouriteItem img={favourite1} title="Hlavní chody" />
          <FavouriteItem img={favourite2} title="Omáčky" />
          <FavouriteItem img={favourite3} title="Dezerty" />
          <FavouriteItem img={favourite4} title="Polévky" />
          <FavouriteItem img={favourite1} title="Hlavní chody" />
        </ItemsWrapper>
      </Column>
    </Row>
  );
}

export default Favourite;
