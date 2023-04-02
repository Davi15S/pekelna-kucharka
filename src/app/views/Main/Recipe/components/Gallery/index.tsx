import React, { useState } from "react";
import { Image as IImage } from "@shared/recipe";
import { CarouselButton, CarouselButtonWrapper, CarouselWrapper, StyledCarousel } from "@views/Main/Landing/components/Novelty/components/Carousel/styled";
import { Image, ImageContainer, Row, Text } from "@app/styled";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import { MoreImages } from "./styled";
import ActivatedGallery from "./components/ActivatedGallery";
import { disableScroll, enableScroll } from "@app/utils";

function Gallery({ images }: { images: IImage[] }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const carouselButtonHandle = (left?: boolean) => {
    setCurrentImage(left ? (currentImage != 0 ? currentImage - 1 : images.length - 1) : currentImage >= images.length - 1 ? 0 : currentImage + 1);
  };

  return (
    <>
      {isActive && (
        <ActivatedGallery
          onClick={() => {
            enableScroll();
            setIsActive(false);
          }}
          images={images}
        />
      )}
      <CarouselWrapper style={{ marginBottom: "40px" }}>
        <CarouselButtonWrapper left justifyContent="center" leftOffset="-30px" shadow>
          {currentImage == 0 ? null : (
            <CarouselButton onClick={() => carouselButtonHandle(true)}>
              <MdOutlineArrowBackIosNew size={20} color={"white"} />
            </CarouselButton>
          )}
        </CarouselButtonWrapper>
        <CarouselButtonWrapper justifyContent="center" rightOffset="-30px" shadow>
          {currentImage >= images.length - 1 ? null : (
            <CarouselButton onClick={() => carouselButtonHandle(false)}>
              <MdOutlineArrowForwardIos size={20} color={"white"} />
            </CarouselButton>
          )}
        </CarouselButtonWrapper>
        <StyledCarousel
          onClickItem={() => {
            setIsActive(true);
            disableScroll();
          }}
          showStatus={false}
          showArrows={false}
          showIndicators={false}
          showThumbs={false}
          swipeable={true}
          emulateTouch
          selectedItem={currentImage}
          onChange={(index) => setCurrentImage(index)}
          transitionTime={200}
        >
          {images.map((image, i) => (
            <Row justifyContent="center" key={i}>
              <ImageContainer w="90%" maxH="550px" borderRadius="20px">
                <Image src={image.attributes.url} fill objectFit="cover" alt="" />
              </ImageContainer>
            </Row>
          ))}
        </StyledCarousel>
      </CarouselWrapper>
      <Row justifyContent="center">
        <Row w="90%" p="0 0 20px 0">
          <ImageContainer maxW="200px" h="120px" borderRadius="10px" m="0 20px 0 0">
            <Image src={images[currentImage + 1 > images.length - 1 ? 0 : currentImage + 1].attributes.url} alt="" fill objectFit="cover" loading="lazy" />
          </ImageContainer>
          {images.length > 2 && (
            <ImageContainer maxW="200px" h="120px" borderRadius="10px">
              {images.length - 3 > 0 && (
                <MoreImages>
                  <Text fontSize="24px" fontWeight="600">
                    +{images.length - 3} snímků
                  </Text>
                </MoreImages>
              )}
              <Image
                src={images[currentImage + 2 > images.length - 1 && images.length > 2 ? currentImage + 2 - images.length : currentImage + 2].attributes.url}
                alt=""
                fill
                objectFit="cover"
                loading="lazy"
              />
            </ImageContainer>
          )}
        </Row>
      </Row>
    </>
  );
}

export default Gallery;
