import styled from "@emotion/styled";
import { Theme } from "@styles/theme";

export const TextArea = styled.textarea<{ theme?: Theme }>`
  width: 100%;
  outline: none;
  height: 145px;
  border-radius: 5px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.border.primary};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 16px;
  padding: 15px 20px;
  resize: none;
  font-family: inherit;
`;

export const RemoveButton = styled.div<{ theme?: Theme }>`
  position: absolute;
  top: 10px;
  right: 10px;
  color: ${({ theme }) => theme.colors.error};
  cursor: pointer;
`;

export const TextAreaWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;
