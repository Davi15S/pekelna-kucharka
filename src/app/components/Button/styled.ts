import { Row } from "@app/styled";
import styled from "@emotion/styled";
import { Theme } from "@styles/theme";
import React from "react";

export const ButtonWrapper = styled.button<{
  maxW?: React.CSSProperties["width"];
  transparent?: boolean;
  color?: "white" | "red";
  theme?: Theme;
  h?: React.CSSProperties["height"];
}>`
  width: 100%;
  display: flex;
  justify-content: center;
  height: ${({ h }) => (h ? h : "40px")};
  align-items: center;
  border-radius: 10px;
  background-color: ${({ transparent, theme, color }) => (transparent ? "transparent" : color ? theme.button[color] : "white")};
  border: 2px solid ${({ color, theme }) => (color ? theme.button[color] : "white")};
  cursor: pointer;
  margin: 20px;
  transition: all 300ms ease-in-out;
  max-width: ${({ maxW }) => (maxW ? maxW : "")};

  div {
    transition: all 300ms ease-in-out;
    color: ${({ transparent, color }) => (transparent ? "white" : color == "red" ? "white" : "black")};
  }

  :hover {
    background-color: ${({ transparent }) => (transparent ? "white" : "transparent")};

    div {
      color: ${({ transparent, color, theme }) => (transparent ? "black" : color ? theme.button[color] : "white")};
    }
  }
`;

export const ButtonContent = styled(Row)`
  color: white;
  justify-content: center;
  align-items: center;
`;
