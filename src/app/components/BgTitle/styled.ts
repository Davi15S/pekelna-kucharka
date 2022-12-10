import styled from "@emotion/styled";
import { Theme } from "@styles/theme";
import React from "react";

export const BgTitleWrapper = styled.div`
  position: relative;
  margin-bottom: 30px;
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
  left: ${({ left }) => (left ? left : "-20vw")};
  top: ${({ top }) => (top ? top : "-230px")};
  font-weight: 800;
  z-index: -1;
  user-select: none;
  white-space: ${({ wrap }) => (wrap ? "normal" : "nowrap")};

  @media only screen and (max-width: 1024px) {
    font-size: 80px;
    top: ${({ mobileTop }) => (mobileTop ? mobileTop : "-18px")};
    left: ${({ mobileLeft }) => (mobileLeft ? mobileLeft : "-15px")};
  }
`;

export const Subtitle = styled.h3<{ theme?: Theme }>`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.error};
  font-weight: 800;
`;
