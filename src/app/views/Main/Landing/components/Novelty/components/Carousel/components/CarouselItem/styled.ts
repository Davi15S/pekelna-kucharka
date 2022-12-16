import { Column, Row } from "@app/styled";
import styled from "@emotion/styled";

export const CarouselItemWrapper = styled(Row)`
  @media only screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    max-width: 600px;
    padding: 30px;
    width: 100%;
  }
`;

export const ItemColumn = styled(Column)`
  @media only screen and (max-width: 1024px) {
    width: 100%;
    margin-top: 50px;
    padding: 0;
    align-items: center;
  }
`;
