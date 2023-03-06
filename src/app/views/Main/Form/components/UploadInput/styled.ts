import styled from "@emotion/styled";
import { Theme } from "@styles/theme";

export const Button = styled.button<{ theme?: Theme }>`
  width: 100%;
  height: 100px;
  background-color: transparent;
  cursor: pointer;
  border-radius: 10px;
  outline: none;
  border: 1px dashed ${({ theme }) => theme.border.primary};
  padding: 0 20px;
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  height: 65px;
  min-width: 65px;
  background-color: #232323;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImagesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  width: 100%;
  gap: 10px;
  padding-top: 20px;
`;
