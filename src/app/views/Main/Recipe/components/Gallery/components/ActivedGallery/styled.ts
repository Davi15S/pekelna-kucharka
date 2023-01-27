import { ImageWrapper } from "@app/styled";
import styled from "@emotion/styled";

export const ActiveGalleryWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: pink;
  position: relative;
  cursor: pointer;
`;
