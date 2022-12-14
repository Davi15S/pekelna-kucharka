import styled from "@emotion/styled";
import { Theme } from "@styles/theme";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Row = styled.div<{
  theme?: Theme;
  w?: React.CSSProperties["width"];
  justifyContent?: React.CSSProperties["justifyContent"];
  alignItems?: React.CSSProperties["alignItems"];
  m?: React.CSSProperties["margin"];
  p?: React.CSSProperties["padding"];
  flexWrap?: React.CSSProperties["flexWrap"];
  flexGrow?: React.CSSProperties["flexGrow"];
}>`
  display: flex;
  width: ${({ w }) => (w ? w : "100%")};
  justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : "flex-start")};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "flex-start")};
  flex-direction: row;
  margin: ${({ m }) => (m ? m : "")};
  padding: ${({ p }) => (p ? p : "")};
  flex-wrap: ${({ flexWrap }) => (flexWrap ? flexWrap : "nowrap")};
  flex-grow: ${({ flexGrow }) => (flexGrow ? flexGrow : "none")};
`;

export const Column = styled.div<{
  theme?: Theme;
  h?: React.CSSProperties["height"];
  alignItems?: React.CSSProperties["alignItems"];
  justifyContent?: React.CSSProperties["justifyContent"];
  p?: React.CSSProperties["padding"];
  w?: React.CSSProperties["width"];
  textAlign?: React.CSSProperties["textAlign"];
}>`
  display: flex;
  flex-direction: column;
  height: ${({ h }) => (h ? h : "100%")};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "flex-start")};
  justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : "flex-start")};
  padding: ${({ p }) => (p ? p : "")};
  width: ${({ w }) => (w ? w : "auto")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "")};
`;

export const ImageWrapper = styled(Image)<{
  w?: React.CSSProperties["width"];
  h?: React.CSSProperties["height"];
  mobileW?: React.CSSProperties["width"];
  maxH?: React.CSSProperties["maxHeight"];
  maxW?: React.CSSProperties["maxWidth"];
  borderRadius?: React.CSSProperties["borderRadius"];
  shadow?: boolean;
  theme?: Theme;
}>`
  width: ${({ w }) => (w ? w : "auto")};
  height: ${({ h }) => (h ? h : "auto")};
  max-width: ${({ maxW }) => (maxW ? maxW : "auto")};
  max-height: ${({ maxH }) => (maxH ? maxH : "auto")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "")};
  box-shadow: ${({ theme, shadow }) => (shadow ? theme.shadow.trend : "")};

  @media only screen and (max-width: 1024px) {
    ${({ mobileW }) => (mobileW ? `width: ${mobileW};` : "")}
  }
`;

export const Text = styled.p<{
  theme?: Theme;
  fontSize?: React.CSSProperties["fontSize"];
  fontWeight?: React.CSSProperties["fontWeight"];
  textAlign?: React.CSSProperties["textAlign"];
  p?: React.CSSProperties["padding"];
  color?: "primary" | "secondary" | "third" | "error";
}>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "400")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "start")};
  padding: ${({ p }) => (p ? p : "0")};
  color: ${({ theme, color }) => (color ? theme.colors[color] : "")};
`;

export const StyledLink = styled(Link)<{
  theme?: Theme;
  color?: "white" | "red";
  fontSize?: React.CSSProperties["fontSize"];
  underline?: boolean;
  underlineW?: React.CSSProperties["borderWidth"];
}>`
  color: ${({ theme, color }) => (color ? theme.link[color] : theme.link.white)};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
  position: relative;

  ${({ underline, theme, color, underlineW }) =>
    underline
      ? `::before {
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: -5px;
    position: absolute;
    border-bottom: ${underlineW ? underlineW : "2px"} solid ${color ? theme.link[color] : theme.link.white};
    transform: scale(0, 1);
    transition: transform 300ms ease-in-out;
    transform-origin: bottom left;
  }

  :hover {
    ::before {
      transform: scale(1, 1);
    }
  }`
      : ""}
`;
