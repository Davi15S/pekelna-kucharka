import { Column } from "@app/styled";
import styled from "@emotion/styled";

export const ProcessWrapper = styled(Column)<{ mobile?: boolean }>`
  display: ${({ mobile }) => (mobile ? "none" : "flex")};

  @media screen and (max-width: 1024px) {
    display: ${({ mobile }) => (mobile ? "flex" : "none")};
  }
`;
