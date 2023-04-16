import { Column, Text } from "@app/styled";
import styled from "@emotion/styled";

export const TrendItemWrapper = styled(Column)<{ offset?: boolean }>`
  min-width: 300px;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  max-width: 400px;
  box-shadow: ${({ theme }) => theme.shadow.default};
  cursor: pointer;
  transition: all 300ms ease-in-out;
  position: relative;
  height: max-content;
  justify-self: center;
  height: 100%;

  :hover {
    box-shadow: ${({ theme }) => theme.shadow.hover};
  }
`;

export const SubTitle = styled(Text)`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  white-space: pre-wrap;
  line-height: 1.8ex;
  height: 9.5ex;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.third};
`;
