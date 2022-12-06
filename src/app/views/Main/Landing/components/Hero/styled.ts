import { Column } from "@app/styled";
import styled from "@emotion/styled";
import { Theme } from "@styles/theme";
import React from "react";

export const HeroWrapper = styled(Column)`
  height: 100vh;
  width: 100%;
  text-align: center;
  max-width: 900px;
`;

export const MainTitle = styled.h1<{ fontSize?: React.CSSProperties["fontSize"]; mobileFontSize?: React.CSSProperties["fontSize"] }>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "50px")};

  @media only screen and (max-width: 768px) {
    font-size: ${({ mobileFontSize }) => (mobileFontSize ? mobileFontSize : "30px")};
  }
`;

export const SubTitle = styled.h2<{ theme?: Theme }>`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 16px;
`;
