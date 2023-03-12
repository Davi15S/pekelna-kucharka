import { ImageWrapper, Row, Text } from "@app/styled";
import Button from "@components/Button";
import PepperRating from "@components/PepperRating";
import React from "react";
import CarouselImage from "@assets/carouselItem/carouselImage.jpeg";
import { CarouselItemWrapper, ItemColumn } from "./styled";

function CarouselItem(props: { title: string; spiceness: number }) {
  return (
    <Row justifyContent="center">
      <CarouselItemWrapper w="80%" alignItems="center" p="50px 0">
        <ItemColumn w="60%" p="0 50px 0 0">
          <Row>
            <PepperRating rating={props.spiceness} w={30} h={30} />
          </Row>
          <Text fontWeight="bold" fontSize="30px" color="primary" p="20px 0">
            {props.title}
          </Text>
          <Text fontSize="16px" fontWeight="400" color="third">
            Sollicitudin et nisl feugiat in libero suscipit arcu. Et ultricies tincidunt nulla sapien aenean diam accumsan, in arcu. Vel cras proin gravida
            feugiat massa. Magna nibh posuere lobortis nunc, est. Pharetra enim pellentesque.
          </Text>
          <Button text="Celý recept" m="70px 0 0 0" maxW="220px" color="red" />
        </ItemColumn>
        <ItemColumn w="40%" justifyContent="center">
          <ImageWrapper src={CarouselImage} alt="" borderRadius="20px" shadow />
        </ItemColumn>
      </CarouselItemWrapper>
    </Row>
  );
}

export default CarouselItem;
