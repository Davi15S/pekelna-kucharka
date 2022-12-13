import { Column, Row } from "@app/styled";
import BgTitle from "@components/BgTitle";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import { StyledCarousel, Test } from "./styled";

function Novelty() {
  return (
    <Column w="100%">
      <BgTitle title="Novinky" subTitle="Novinky" />
      <StyledCarousel showArrows={true} showStatus={false}>
        <Test justifyContent="center" alignItems="center" flexGrow="1">
          AHOJ
        </Test>
        <Test justifyContent="center" alignItems="center" flexGrow="1">
          AHOJ
        </Test>
      </StyledCarousel>
    </Column>
  );
}

export default Novelty;
