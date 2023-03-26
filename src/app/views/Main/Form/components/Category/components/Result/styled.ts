import { Column } from "@app/styled";
import styled from "@emotion/styled";

export const ResultsWrapper = styled(Column)`
  background-color: ${({ theme }) => theme.background.third};
  border-radius: 10px;
  height: max-content;
  max-height: 350px;
  overflow-y: auto;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
`;
