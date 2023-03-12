import { Column, Row, Text } from "@app/styled";
import styled from "@emotion/styled";

export const ItemWrapper = styled(Row)`
  border-radius: 30px;
  box-shadow: ${({ theme }) => theme.shadow.trend};
  background-color: ${({ theme }) => theme.background.primary};
  transition: all 300ms ease-in-out;
  cursor: pointer;
  overflow: hidden;
  min-height: 280px;

  @media only screen and (max-width: 786px) {
    flex-direction: column;
    max-width: 500px;
    width: 100%;
  }

  :hover {
    box-shadow: ${({ theme }) => theme.shadow.trendHover};
  }
`;

export const MobilePicture = styled.div`
  width: 100%;
  padding-bottom: 10px;
  @media only screen and (min-width: 786px) {
    display: none;
  }
`;

export const Title = styled.h4`
  font-size: 25px;
  font-weight: 700;
  margin: 0 0 20px 0;
`;

export const Description = styled(Text)`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: normal;
  min-height: calc(3rem + (3 * 6px));
`;

export const CategoryWrapper = styled.div`
  overflow: auto;
  display: flex;
  width: 100%;
`;

export const ContentWrapper = styled(Column)<{ picture?: boolean }>`
  @media only screen and (max-width: 786px) {
    padding: 20px;
    width: 100%;
    ${({ picture }) => (picture ? "display: none;" : "")}
  }
`;
