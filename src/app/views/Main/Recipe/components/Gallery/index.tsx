import { ImageWrapper, Row, Text } from "@app/styled";
import React, { useState } from "react";
import recipeImage from "@assets/recipe/recipeImage.jpg";
import recipeImage1 from "@assets/recipe/recipeImage1.jpg";
import recipeImage2 from "@assets/recipe/recipeImage2.jpg";
import recipeImage3 from "@assets/recipe/recipeImage3.jpg";
import { CarouselButton, CarouselButtonWrapper, CarouselWrapper } from "@views/Main/Landing/components/Novelty/components/Carousel/styled";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import { GalleryMore, LastGalleryImageWrapper } from "./styled";

function Gallery() {
  const [images, ,] = useState([recipeImage, recipeImage1, recipeImage2, recipeImage3]);
  const [currentImage, setCurrentImage] = useState(0);

  const buttonHandle = (left: boolean) => {
    setCurrentImage(left ? (currentImage == 0 ? images.length - 1 : currentImage - 1) : currentImage == images.length - 1 ? 0 : currentImage + 1);
  };

  return (
    <>
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
      <Row p="10px 0 0 0" m="0 0 50px 0">
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
        <LastGalleryImageWrapper>
          <ImageWrapper
            src={images[currentImage + 2 > images.length - 1 && images.length > 2 ? currentImage + 2 - images.length : currentImage + 2]}
            alt=""
            w="100%"
            maxW="220px"
            maxH="125px"
            objectFit="cover"
            borderRadius="10px"
            m="0 15px 0 0"
          />
          {images.length > 3 && (
            <GalleryMore>
              <Text fontSize="24px" fontWeight="semibold">
                + {images.length - 2} snímky
              </Text>
            </GalleryMore>
          )}
        </LastGalleryImageWrapper>
      </Row>
    </>
  );
}

export default Gallery;
