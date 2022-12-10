import { Column, Text } from "@app/styled";
import styled from "@emotion/styled";

export const TrendItemWrapper = styled(Column)<{ offset?: boolean }>`
  min-width: 300px;
  border-radius: 20px;
  overflow: hidden;
  max-width: 400px;
  box-shadow: ${({ theme }) => theme.shadow.trend};
  cursor: pointer;
  transition: all 300ms ease-in-out;
  position: relative;
  height: max-content;

  :hover {
    box-shadow: ${({ theme }) => theme.shadow.trendHover};
  }
`;

export const ImageContent = styled.div`
  max-height: 225px;
  overflow: hidden;
  border-radius: 20px;
`;

export const SubTitle = styled(Text)`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  white-space: pre-wrap;
  line-height: 1.8ex;
  height: 9ex;
  color: ${({ theme }) => theme.colors.third};
`;
