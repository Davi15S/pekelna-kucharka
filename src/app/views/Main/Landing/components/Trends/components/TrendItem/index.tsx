import { Column, ImageWrapper, Row, Text } from "@app/styled";
import { StaticImageData } from "next/image";
import React from "react";
import { ImageContent, SubTitle, TrendItemWrapper } from "./styled";
import { MdInsertComment } from "react-icons/md";
import Pepper from "@components/Pepper";

function TrendItem(props: { image: StaticImageData; title: string; subTitle: string }) {
  return (
    <TrendItemWrapper>
      <ImageContent>
        <ImageWrapper src={props.image} alt="" w="100%" />
      </ImageContent>
      <Column p="30px 20px 15px 20px">
        <Text fontWeight="700" fontSize="24px">
          {props.title}
        </Text>
        <SubTitle>{props.subTitle}</SubTitle>
        <Row p="40px 0 0 0" justifyContent="space-between">
          <Row alignItems="center">
            <MdInsertComment size={25} color={"#AFAFAF"} style={{ transform: "scaleX(-1)" }} />
            <Text p="0 0 0 5px" fontWeight="600" fontSize="20px" style={{ color: "#AFAFAF" }}>
              55
            </Text>
          </Row>
          <Row justifyContent="flex-end">
            <Pepper w="28px" h="28px" fill />
            <Pepper w="28px" h="28px" fill />
            <Pepper w="28px" h="28px" fill />
            <Pepper w="28px" h="28px" />
            <Pepper w="28px" h="28px" />
          </Row>
        </Row>
      </Column>
    </TrendItemWrapper>
  );
}

export default TrendItem;
