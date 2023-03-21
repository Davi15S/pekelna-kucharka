import { Row } from "@app/styled";
import styled from "@emotion/styled";
import { Theme } from "@styles/theme";
import React from "react";

export const ButtonWrapper = styled.button<{
  m?: React.CSSProperties["margin"];
  maxW?: React.CSSProperties["width"];
  transparent?: boolean;
  color?: "white" | "red";
  theme?: Theme;
  h?: React.CSSProperties["height"];
  borderRadius?: React.CSSProperties["borderRadius"];
  p?: React.CSSProperties["padding"];
}>`
  width: 100%;
  display: flex;
  justify-content: center;
  height: ${({ h }) => (h ? h : "40px")};
  align-items: center;
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "10px")};
  background-color: ${({ transparent, theme, color }) => (transparent ? "transparent" : color ? theme.button[color] : "white")};
  border: 2px solid ${({ color, theme }) => (color ? theme.button[color] : "white")};
  cursor: pointer;
  transition: all 300ms ease-in-out;
  max-width: ${({ maxW }) => (maxW ? maxW : "")};
  padding: ${({ p }) => (p ? p : "5px 15px")};
  margin: ${({ m }) => (m ? m : "20px")};

  div {
    transition: all 300ms ease-in-out;
    color: ${({ transparent, color }) => (transparent ? "white" : color == "red" ? "white" : "black")};
  }

  :hover {
    background-color: ${({ transparent, color, theme }) => (transparent ? (color ? theme.button[color] : "white") : "transparent")};

    div {
      color: ${({ transparent, color, theme }) => (transparent ? (color ? "white" : "black") : color ? theme.button[color] : "white")};
    }
  }
`;

export const ButtonContent = styled(Row)`
  color: white;
  justify-content: center;
  align-items: center;
`;
