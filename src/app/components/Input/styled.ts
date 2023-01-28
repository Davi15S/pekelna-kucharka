import { Row } from "@app/styled";
import styled from "@emotion/styled";
import { Theme } from "@styles/theme";
import React from "react";

export const InputWrapper = styled(Row)<{ maxW?: React.CSSProperties["maxWidth"]; h?: React.CSSProperties["height"] }>`
  max-width: ${({ maxW }) => (maxW ? maxW : "none")};
  height: ${({ h }) => (h ? h : "45px")};
  color: ${({ theme }) => theme.background.primary};
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  padding: 20px 15px;
`;

export const InputStyled = styled.input<{ theme?: Theme; isForm?: boolean }>`
  width: 100%;
  outline: none;
  border: none;
  font-size: 16px;
  margin-left: 10px;
  background-color: transparent;
  color: ${({ theme, isForm }) => (isForm ? theme.colors.third : theme.background.primary)};

  ::placeholder {
    color: ${({ theme, isForm }) => (isForm ? theme.colors.third : theme.background.primary)};
  }
`;
