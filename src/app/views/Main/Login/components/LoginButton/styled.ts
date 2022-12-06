import { Row } from "@app/styled";
import styled from "@emotion/styled";
import React from "react";

export const ButtonWrapper = styled.button<{ maxW?: React.CSSProperties["width"]; transparent?: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: ${({ transparent }) => (transparent ? "transparent" : "white")};
  border: 2px solid white;
  cursor: pointer;
  margin: 20px;
  transition: all 300ms ease-in-out;

  div {
    transition: all 300ms ease-in-out;
    color: ${({ transparent }) => (transparent ? "white" : "black")};
  }

  :hover {
    background-color: ${({ transparent }) => (transparent ? "white" : "transparent")};

    div {
      color: ${({ transparent }) => (transparent ? "black" : "white")};
    }
  }
`;

export const ButtonContent = styled(Row)`
  color: white;
  justify-content: center;
  align-items: center;
`;
