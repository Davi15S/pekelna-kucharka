import { Column, ImageWrapper, Row, Text } from "@app/styled";
import { PageContent } from "@layouts/Main/components/Page/styled";
import React, { useState } from "react";
import recipeImage from "@assets/recipe/recipeImage.jpg";
import recipeImage1 from "@assets/recipe/recipeImage1.jpg";
import recipeImage2 from "@assets/recipe/recipeImage2.jpg";
import { ColumnContent } from "./styled";
import { CarouselButton, CarouselButtonWrapper, CarouselWrapper } from "../Landing/components/Novelty/components/Carousel/styled";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";

function Recipe(props: { id: string }) {
  const [images, ,] = useState([recipeImage, recipeImage1, recipeImage2]);
  const [currentImage, setCurrentImage] = useState(0);

  const buttonHandle = (left: boolean) => {
    setCurrentImage(left ? (currentImage == 0 ? images.length - 1 : currentImage - 1) : currentImage == images.length - 1 ? 0 : currentImage + 1);
  };

  return (
    <PageContent topP w="100%">
      <Row p="50px 0">
        <ColumnContent w="65%">
          <Text fontWeight="700" fontSize="44px" p="0 0 50px 0">
            Ultrices etiam arcu sagittis, in nullam varius nunc ut at. Id lacus
          </Text>
          <CarouselWrapper>
            <CarouselButtonWrapper left justifyContent="center" leftOffset="-60px">
              <CarouselButton onClick={() => buttonHandle(true)}>
                <MdOutlineArrowBackIosNew size={20} color={"white"} />
              </CarouselButton>
            </CarouselButtonWrapper>
            <CarouselButtonWrapper justifyContent="center" rightOffset="-60px">
              <CarouselButton onClick={() => buttonHandle(false)}>
                <MdOutlineArrowForwardIos size={20} color={"white"} />
              </CarouselButton>
            </CarouselButtonWrapper>
            <ImageWrapper src={images[currentImage]} alt="" w="100%" maxH="500px" objectFit="cover" borderRadius="20px" />
          </CarouselWrapper>
          <Row p="10px 0 0 0">
            <ImageWrapper
              src={images[currentImage == images.length - 1 ? 0 : currentImage + 1]}
              alt=""
              w="100%"
              maxW="220px"
              maxH="125px"
              objectFit="cover"
              borderRadius="10px"
              m="0 15px 0 0"
            />
            <ImageWrapper
              src={
                images[
                  currentImage == images.length - 2 && images.length >= 3 ? 0 : currentImage == images.length - 1 && images.length >= 3 ? 1 : currentImage + 2
                ]
              }
              alt=""
              w="100%"
              maxW="220px"
              maxH="125px"
              objectFit="cover"
              borderRadius="10px"
              m="0 15px 0 0"
            />
          </Row>
        </ColumnContent>
      </Row>
    </PageContent>
  );
}

export default Recipe;
