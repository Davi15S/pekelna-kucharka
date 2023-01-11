import { Column } from "@app/styled";
import styled from "@emotion/styled";
import { Theme } from "@styles/theme";
import ReactSlider from "react-slider";

export const FilterWrapper = styled(Column)`
  position: -webkit-sticky;
  position: sticky;
  top: 50px;
  overflow: auto;
  height: max-content;
  max-height: calc(100vh - 100px);
  align-items: flex-start;
  width: auto;
  padding-right: 20px;
  padding-left: 25px;

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

export const SliderWrapper = styled.div`
  width: 100%;
  padding-bottom: 20px;
`;

export const Slider = styled(ReactSlider)<{ theme?: Theme }>`
  max-width: 225px;
  padding-bottom: 20px;
  position: relative;

  .customSlider-track {
    top: 8px;
    height: 4px;
    background: ${({ theme }) => theme.slider.track};
    border-radius: 10px;
  }

  .customSlider-track-1 {
    background: ${({ theme }) => theme.slider.middleTrack};
  }

  .customSlider-thumb {
    cursor: pointer;
    background: ${({ theme }) => theme.slider.thumb};
    width: 20px;
    height: 20px;
    border-radius: 100%;
    outline: none;
    border: 2px solid white;

    :hover {
      box-shadow: 0 0 0 8px rgba(110, 110, 110, 0.1);
    }
  }
`;

export const ThumbIndicator = styled.div<{ theme?: Theme }>`
  position: absolute;
  top: -30px;
  color: ${({ theme }) => theme.colors.third};
  font-size: 16px;
  white-space: nowrap;
  display: flex;
  left: -100%;
`;
