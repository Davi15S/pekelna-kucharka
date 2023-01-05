import { Column } from "@app/styled";
import styled from "@emotion/styled";

export const ItemWrapper = styled(Column)`
  max-width: 535px;
  width: 100%;
  min-width: 300px;
  margin: 30px;
  box-shadow: ${({ theme }) => theme.shadow.trend};
  border-radius: 10px;
  transition: all 200ms ease-in-out;
  cursor: pointer;

  :hover {
    box-shadow: ${({ theme }) => theme.shadow.trendHover};
  }
`;

export const ImageContent = styled.div`
  border-radius: 20px;
  overflow: hidden;
  width: 100%;
  height: 100%;
  max-height: 300px;
`;

export const Link = styled.p``;
