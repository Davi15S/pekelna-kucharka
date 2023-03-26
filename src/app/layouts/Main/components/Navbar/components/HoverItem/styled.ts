import { Column } from "@app/styled";
import styled from "@emotion/styled";

export const HoverItemWrapper = styled(Column)`
  background-color: ${({ theme }) => theme.background.primary};
  box-shadow: ${({ theme }) => theme.shadow.default};
  border-radius: 10px;
  margin-top: 40px;
  width: 200px;
  height: max-content;
  padding: 10px 0;
`;

export const HoverItemContainer = styled(Column)`
  position: absolute;
  height: 200px;
`;
