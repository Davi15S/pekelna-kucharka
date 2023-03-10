import { Column, Row } from "@app/styled";
import styled from "@emotion/styled";

export const ColumnContent = styled(Column)<{ left?: boolean }>`
  padding-left: ${({ left }) => (left ? "40px" : "")};

  @media only screen and (max-width: 1024px) {
    width: 100%;
    max-width: 800px;
    padding-left: 0;
  }
`;

export const PageWrapper = styled(Row)`
  @media only screen and (max-width: 1024px) {
    justify-content: center;
  }
`;
