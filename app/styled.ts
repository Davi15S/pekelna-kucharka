import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import { Theme } from "styles/theme";

export const Row = styled.div<{
  w?: React.CSSProperties["width"];
  justifyContent?: React.CSSProperties["justifyContent"];
  alignItems?: React.CSSProperties["alignItems"];
  m?: React.CSSProperties["margin"];
  p?: React.CSSProperties["padding"];
  theme?: Theme;
}>`
  display: flex;
  width: ${({ w }) => (w ? w : "100%")};
  justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : "flex-start")};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "flex-start")};
  flex-direction: row;
  margin: ${({ m }) => (m ? m : "")};
  padding: ${({ p }) => (p ? p : "")};
`;

export const Column = styled.div<{
  h?: React.CSSProperties["height"];
  alignItems?: React.CSSProperties["alignItems"];
  justifyContent?: React.CSSProperties["justifyContent"];
}>`
  display: flex;
  flex-direction: column;
  height: ${({ h }) => (h ? h : "100%")};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "flex-start")};
  justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : "flex-start")};
`;

export const ImageWrapper = styled(Image)<{ w?: React.CSSProperties["width"]; h?: React.CSSProperties["height"]; mobileW?: React.CSSProperties["width"] }>`
  width: ${({ w }) => (w ? w : "auto")};
  height: ${({ h }) => (h ? h : "auto")};
  max-width: auto;
  max-height: auto;

  @media only screen and (max-width: 1024px) {
    ${({ mobileW }) => (mobileW ? `width: ${mobileW};` : "")}
  }
`;
