import { Column, Image, ImageContainer, Row, Text } from "@app/styled";
import React from "react";
import { SubTitle, TrendItemWrapper } from "./styled";
import { MdInsertComment } from "react-icons/md";
import PepperRating from "@components/PepperRating";
import { useRouter } from "next/router";

function TrendItem(props: { image: string; title: string; subTitle: string; comments: number; id: string; spiceness: number }) {
  const router = useRouter();

  return (
    <TrendItemWrapper onClick={() => router.push(`/recipes/${props.id}`)}>
      <ImageContainer w="100%" maxH="260px">
        <Image src={props.image} fill objectFit="cover" alt="" />
      </ImageContainer>
      <Column p="30px 20px 15px 20px" w="100%">
        <Text fontWeight="700" fontSize="24px" p="0 0 10px 0">
          {props.title}
        </Text>
        <SubTitle>{props.subTitle}</SubTitle>
        <Row p="40px 0 0 0" justifyContent="space-between">
          <Row alignItems="center">
            <MdInsertComment size={25} color={"#AFAFAF"} style={{ transform: "scaleX(-1)" }} />
            <Text p="0 0 0 5px" fontWeight="600" fontSize="20px" style={{ color: "#AFAFAF" }}>
              {props.comments}
            </Text>
          </Row>
          <Row justifyContent="flex-end">
            <PepperRating rating={props.spiceness} w="28px" h="28px" />
          </Row>
        </Row>
      </Column>
    </TrendItemWrapper>
  );
}

export default TrendItem;
