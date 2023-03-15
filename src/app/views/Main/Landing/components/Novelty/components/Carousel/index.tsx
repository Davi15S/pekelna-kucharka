import { Recipe } from "@shared/recipe";
import React, { useState } from "react";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import CarouselItem from "./components/CarouselItem";
import { CarouselButton, CarouselButtonWrapper, CarouselWrapper, Indicator, IndicatorsWrapper, StyledCarousel } from "./styled";

function Carousel({ recipes }: { recipes: Recipe[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselButtonHandle = (left?: boolean) => {
    setCurrentSlide(left ? (currentSlide != 0 ? currentSlide - 1 : recipes.length - 1) : currentSlide >= recipes.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <CarouselWrapper>
      <CarouselButtonWrapper left justifyContent="center" shadow>
        {currentSlide == 0 ? null : (
          <CarouselButton onClick={() => carouselButtonHandle(true)}>
            <MdOutlineArrowBackIosNew size={20} color={"white"} />
          </CarouselButton>
        )}
      </CarouselButtonWrapper>
      <CarouselButtonWrapper justifyContent="center" shadow>
        {currentSlide >= recipes.length - 1 ? null : (
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
        swipeable={true}
        emulateTouch={true}
      >
        {recipes.slice(0, 5).map((recipe, i) => {
          return (
            <CarouselItem
              key={recipe.id}
              title={recipe.attributes.title}
              spiceness={+recipe.attributes.spiciness}
              description={recipe.attributes.description}
              image={recipe.attributes.images.data[0].attributes.url}
              id={recipe.id}
            />
          );
        })}
      </StyledCarousel>
      {recipes.length > 1 && (
        <IndicatorsWrapper justifyContent="center">
          {recipes.map((item, index) => (
            <Indicator key={index} active={index == currentSlide ? true : false} onClick={() => setCurrentSlide(index)} />
          ))}
        </IndicatorsWrapper>
      )}
    </CarouselWrapper>
  );
}

export default Carousel;
