import { Column } from "@app/styled";
import styled from "@emotion/styled";

export const FilterWrapper = styled(Column)`
  position: -webkit-sticky;
  position: sticky;
  top: 50px;
  width: max-content;
  overflow: auto;
  height: calc(100vh - 100px);
  align-items: flex-start;
  padding: 0 100px 0 10px;
`;
