import React, { useState } from "react";
import { ActivatedGalleryWrapper, CloseButton, Shadow } from "./styled";
import { Image as IImage } from "@shared/recipe";
import { StyledCarousel } from "@views/Main/Landing/components/Novelty/components/Carousel/styled";
import { Image, ImageContainer, Row } from "@app/styled";
import { RxCross2 } from "react-icons/rx";

function ActivatedGallery({ onClick, images, clickedImage }: { onClick: () => void; images: IImage[]; clickedImage: number }) {
  const [currentImage, setCurrentImage] = useState(clickedImage);

  const carouselButtonHandle = (left?: boolean) => {
    setCurrentImage(left ? (currentImage != 0 ? currentImage - 1 : images.length - 1) : currentImage >= images.length - 1 ? 0 : currentImage + 1);
  };

  return (
    <ActivatedGalleryWrapper>
      <Shadow />
      <CloseButton onClick={onClick}>
        <RxCross2 size={40} />
      </CloseButton>
      <StyledCarousel
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
            <ImageContainer maxH="70vh" maxW="90vw">
              <Image src={image.attributes.url} fill objectFit="contain" alt="" />
            </ImageContainer>
          </Row>
        ))}
      </StyledCarousel>
    </ActivatedGalleryWrapper>
  );
}

export default ActivatedGallery;
