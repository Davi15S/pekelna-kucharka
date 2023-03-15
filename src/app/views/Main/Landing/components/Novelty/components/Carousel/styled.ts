import { Column, Row } from "@app/styled";
import styled from "@emotion/styled";
import { Theme } from "@styles/theme";
import { Carousel } from "react-responsive-carousel";

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledCarousel = styled(Carousel)`
  margin: 0;
  width: 100%;
  padding: 0;
`;

export const CarouselButtonWrapper = styled(Column)<{
  left?: boolean;
  shadow?: boolean;
  leftOffset?: React.CSSProperties["left"];
  rightOffset?: React.CSSProperties["right"];
}>`
  position: absolute;
  z-index: 10;
  ${({ left, leftOffset, rightOffset }) =>
    left ? `align-items: start; left: ${leftOffset ? leftOffset : "0"};` : `align-items: flex-end; right: ${rightOffset ? rightOffset : "0"};`};
  ${({ left, theme, shadow }) =>
    shadow
      ? left
        ? `background: linear-gradient(to right, ${theme.background.primary} 35%, transparent);`
        : `background: linear-gradient(to left, ${theme.background.primary} 35%, transparent);`
      : ""}
  width: 100px;

  @media only screen and (max-width: 768px) {
    width: 50px;
    display: none;
  }
`;

export const CarouselButton = styled.button<{ theme?: Theme }>`
  background-color: ${({ theme }) => theme.background.primary};
  border: 2px solid white;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const IndicatorsWrapper = styled(Row)`
  position: absolute;
  bottom: -50px;
`;

export const Indicator = styled.div<{ active?: boolean; theme?: Theme }>`
  width: 15px;
  height: 15px;
  margin: 0 5px;
  background-color: ${({ active, theme }) => (active ? theme.button.red : "transparent")};
  border-radius: 50%;
  border: 1px solid white;
  transition: all 500ms ease-in-out;
  cursor: pointer;
`;
