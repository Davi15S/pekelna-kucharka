import styled from "@emotion/styled";
import { Row } from "app/styled";
import React from "react";
import { Theme } from "styles/theme";

export const InputWrapper = styled(Row)<{ maxW?: React.CSSProperties["maxWidth"]; h?: React.CSSProperties["height"] }>`
  max-width: ${({ maxW }) => (maxW ? maxW : "none")};
  height: ${({ h }) => (h ? h : "45px")};
  color: ${({ theme }) => theme.background.primary};
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  padding: 20px 15px;
`;

export const InputStyled = styled.input<{ theme?: Theme }>`
  width: 100%;
  outline: none;
  border: none;
  font-size: 16px;
  margin-left: 10px;
  background-color: transparent;
  color: ${({ theme }) => theme.background.primary};

  ::placeholder {
    color: ${({ theme }) => theme.background.primary};
  }
`;
