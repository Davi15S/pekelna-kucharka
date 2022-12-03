import styled from "@emotion/styled";
import { Theme } from "@styles/theme";
import Image from "next/image";
import React from "react";

export const Row = styled.div<{
  theme?: Theme;
  w?: React.CSSProperties["width"];
  justifyContent?: React.CSSProperties["justifyContent"];
  alignItems?: React.CSSProperties["alignItems"];
  m?: React.CSSProperties["margin"];
  p?: React.CSSProperties["padding"];
  flexWrap?: React.CSSProperties["flexWrap"];
}>`
  display: flex;
  width: ${({ w }) => (w ? w : "100%")};
  justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : "flex-start")};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "flex-start")};
  flex-direction: row;
  margin: ${({ m }) => (m ? m : "")};
  padding: ${({ p }) => (p ? p : "")};
  flex-wrap: ${({ flexWrap }) => (flexWrap ? flexWrap : "nowrap")};
`;

export const Column = styled.div<{
  theme?: Theme;
  h?: React.CSSProperties["height"];
  alignItems?: React.CSSProperties["alignItems"];
  justifyContent?: React.CSSProperties["justifyContent"];
  p?: React.CSSProperties["padding"];
}>`
  display: flex;
  flex-direction: column;
  height: ${({ h }) => (h ? h : "100%")};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "flex-start")};
  justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : "flex-start")};
  padding: ${({ p }) => (p ? p : "")};
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
