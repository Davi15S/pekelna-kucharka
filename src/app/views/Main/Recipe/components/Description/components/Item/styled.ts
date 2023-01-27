import { Row } from "@app/styled";
import styled from "@emotion/styled";

export const ItemWrapper = styled(Row)`
  :last-child {
    padding-bottom: 0;
  }

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 1024px) {
    flex-direction: row;
  }
`;
