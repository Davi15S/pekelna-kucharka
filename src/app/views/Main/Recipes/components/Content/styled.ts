import { Column, Row } from "@app/styled";
import styled from "@emotion/styled";

export const ContentWrapper = styled(Row)`
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const RecipesWrapper = styled(Column)`
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const StickyNavbar = styled.div``;
