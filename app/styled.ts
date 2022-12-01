import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";

export const Row = styled.div<{
  w?: React.CSSProperties["width"];
  justifyContent?: React.CSSProperties["justifyContent"];
  alignItems?: React.CSSProperties["alignItems"];
}>`
  display: flex;
  width: ${({ w }) => (w ? w : "100%")};
  justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : "flex-start")};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "flex-start")};
  flex-direction: row;
`;

export const ImageWrapper = styled(Image)<{ w?: React.CSSProperties["width"]; h?: React.CSSProperties["height"] }>`
  width: ${({ w }) => (w ? w : "100%")};
  height: ${({ h }) => (h ? h : "100%")};
  max-width: 100%;
  max-height: 100%;
`;
