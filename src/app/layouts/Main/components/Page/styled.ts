import { Column } from "@app/styled";
import styled from "@emotion/styled";
import { StaticImageData } from "next/image";
import React from "react";

export const PageBackground = styled(Column)<{ bgImage?: StaticImageData; h: React.CSSProperties["height"] }>`
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ h }) => h && h};
  position: absolute;
  z-index: 0;
  background-image: url(${({ bgImage }) => (bgImage ? bgImage.src : "")});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Shadow = styled.div<{ top?: boolean }>`
  height: 40%;
  position: absolute;
  width: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(13, 13, 13, 0.74) 32.29%, #0e0e0e 100%);
  transform: rotateX(${({ top }) => (top ? `-180deg` : `0deg`)});
  ${({ top }) => (top ? `top: 0;` : `bottom: 0;`)};
`;

export const PageContent = styled(Column)<{
  p?: React.CSSProperties["padding"];
  mobileP?: React.CSSProperties["padding"];
  topP?: React.CSSProperties["padding"];
}>`
  padding: ${({ p, topP }) => (p ? p : `${topP ? "100px" : "0px"} 20px 0 20px`)};
  align-items: center;
  max-width: 1400px;
  width: 100%;
`;

export const PageWrapper = styled.div`
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;
