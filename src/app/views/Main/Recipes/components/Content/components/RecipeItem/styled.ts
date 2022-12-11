import { Column, Row, Text } from "@app/styled";
import styled from "@emotion/styled";

export const ItemWrapper = styled(Row)`
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.shadow.trend};
  background-color: ${({ theme }) => theme.background.primary};
  transition: all 300ms ease-in-out;
  cursor: pointer;

  @media only screen and (max-width: 786px) {
    flex-direction: column;
    max-width: 500px;
  }

  :hover {
    box-shadow: ${({ theme }) => theme.shadow.trendHover};
  }
`;

export const MobilePicture = styled.div`
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
  overflow: hidden;
  line-height: 2ex;
  height: 6ex;
  position: relative;

  ::before {
    content: "...";
    bottom: 0;
    height: 2ex;
    right: 0;
    left: 50%;
    background-color: ${({ theme }) => theme.background.primary};
    position: absolute;
  }
`;

export const CategoryWrapper = styled(Row)`
  overflow: auto;
`;

export const ContentWrapper = styled(Column)<{ picture?: boolean }>`
  @media only screen and (max-width: 786px) {
    padding: 20px;
    width: 100%;
    ${({ picture }) => (picture ? "display: none;" : "")}
  }
`;
