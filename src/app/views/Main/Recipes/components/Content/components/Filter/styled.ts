import { Column } from "@app/styled";
import styled from "@emotion/styled";

export const FilterWrapper = styled(Column)`
  position: -webkit-sticky;
  position: sticky;
  top: 50px;
  overflow: auto;
  height: max-content;
  max-height: calc(100vh - 100px);
  align-items: flex-start;
  width: auto;
  padding-right: 100px;
  padding-left: 5px;

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;
