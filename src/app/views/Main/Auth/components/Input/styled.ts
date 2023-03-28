import styled from "@emotion/styled";
import { Theme } from "@styles/theme";

export const InputContent = styled.input<{ theme?: Theme }>`
  width: 100%;
  font-weight: 16px;
  background-color: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.third};
  border-bottom: 2px solid ${({ theme }) => theme.border.primary};
  padding-bottom: 10px;
  margin-top: 30px;
  position: relative;

  ::placeholder {
    color: ${({ theme }) => theme.colors.third};
  }
`;

export const IconWrapper = styled.div``;
