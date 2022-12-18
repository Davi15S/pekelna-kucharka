import React, { useState } from "react";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import CarouselItem from "./components/CarouselItem";
import { CarouselButton, CarouselButtonWrapper, CarouselWrapper, Indicator, IndicatorsWrapper, StyledCarousel } from "./styled";

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [items, setItems] = useState([
    { title: "dhasuihdaus", subTitle: "hduiashduis", img: "dhasuishd" },
    { title: "dhasuihdaus", subTitle: "hduiashduis", img: "dhasuishd" },
    { title: "dhasuihdaus", subTitle: "hduiashduis", img: "dhasuishd" },
  ]);

  const carouselButtonHandle = (left?: boolean) => {
    setCurrentSlide(left ? (currentSlide != 0 ? currentSlide - 1 : items.length - 1) : currentSlide >= items.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <CarouselWrapper>
      <CarouselButtonWrapper left justifyContent="center">
        {currentSlide == 0 ? null : (
          <CarouselButton onClick={() => carouselButtonHandle(true)}>
            <MdOutlineArrowBackIosNew size={20} color={"white"} />
          </CarouselButton>
        )}
      </CarouselButtonWrapper>
      <CarouselButtonWrapper justifyContent="center">
        {currentSlide >= items.length - 1 ? null : (
          <CarouselButton onClick={() => carouselButtonHandle(false)}>
            <MdOutlineArrowForwardIos size={20} color={"white"} />
          </CarouselButton>
        )}
      </CarouselButtonWrapper>
      <StyledCarousel
        onChange={(index) => setCurrentSlide(index)}
        showStatus={false}
        selectedItem={currentSlide}
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
      >
        {items.map((item, index) => (
          <CarouselItem key={index} />
        ))}
      </StyledCarousel>
      <IndicatorsWrapper justifyContent="center">
        {items.map((item, index) => (
          <Indicator key={index} active={index == currentSlide ? true : false} onClick={() => setCurrentSlide(index)} />
        ))}
      </IndicatorsWrapper>
    </CarouselWrapper>
  );
}

export default Carousel;
