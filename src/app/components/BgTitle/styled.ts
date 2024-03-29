import styled from "@emotion/styled";
import { Theme } from "@styles/theme";
import React from "react";

export const BgTitleWrapper = styled.div<{ h?: boolean; m?: boolean }>`
  position: relative;
  z-index: -1;
  margin-bottom: ${({ m }) => (m ? "30px" : "0px")};
  height: ${({ h }) => (h ? "auto" : "0px")};
`;

export const Title = styled.p<{
  theme?: Theme;
  top?: React.CSSProperties["top"];
  left?: React.CSSProperties["left"];
  wrap?: boolean;
  mobileTop?: React.CSSProperties["top"];
  mobileLeft?: React.CSSProperties["left"];
  center?: boolean;
}>`
  position: absolute;
  color: ${({ theme }) => theme.background.secondary};
  font-size: 300px;
  left: ${({ left }) => (left ? left : "-150px")};
  top: ${({ top }) => (top ? top : "-230px")};
  font-weight: 800;
  user-select: none;
  z-index: -1;
  white-space: ${({ wrap }) => (wrap ? "normal" : "nowrap")};

  @media only screen and (max-width: 1024px) {
    font-size: 80px;
    top: ${({ mobileTop, top }) => (mobileTop ? mobileTop : top ? top : "-18px")};
    left: ${({ mobileLeft, left }) => (mobileLeft ? mobileLeft : left ? left : "-15px")};
  }
`;

export const Subtitle = styled.h3<{ theme?: Theme }>`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.error};
  font-weight: 800;
`;
