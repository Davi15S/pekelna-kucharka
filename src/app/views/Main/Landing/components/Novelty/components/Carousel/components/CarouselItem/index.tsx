import { Column, Image, ImageContainer, Row, Text } from "@app/styled";
import Button from "@components/Button";
import PepperRating from "@components/PepperRating";
import React from "react";
import { CarouselItemWrapper, ItemColumn } from "./styled";
import { SubTitle } from "@views/Main/Landing/components/Trends/components/TrendItem/styled";
import { useRouter } from "next/router";

function CarouselItem(props: { title: string; spiciness: number; description: string; image: string; id: string }) {
  const router = useRouter();

  return (
    <Row justifyContent="center">
      <CarouselItemWrapper w="80%" alignItems="center" p="50px 0">
        <ItemColumn w="60%" p="0 50px 0 0">
          <Column w="100%">
            <Row>
              <PepperRating rating={props.spiciness} w={30} h={30} />
            </Row>
            <Text fontWeight="bold" fontSize="30px" color="primary" p="20px 0">
              {props.title}
            </Text>
            <SubTitle fontSize="16px" fontWeight="400" color="third">
              {props.description}
            </SubTitle>
            <Button text="Celý recept" m="40px 0 0 0" maxW="220px" color="red" onClick={() => router.push(`/recipes/${props.id}`)} />
          </Column>
        </ItemColumn>
        <ItemColumn w="45%">
          <ImageContainer borderRadius="20px" w="100%" maxH="300px" shadow>
            <Image src={props.image} alt="" objectFit="cover" fill />
          </ImageContainer>
        </ItemColumn>
      </CarouselItemWrapper>
    </Row>
  );
}

export default CarouselItem;
