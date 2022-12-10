import { Row } from "@app/styled";
import styled from "@emotion/styled";

export const ItemsWrapper = styled(Row)`
  overflow-x: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;
