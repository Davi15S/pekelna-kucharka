import { Column } from "@app/styled";
import styled from "@emotion/styled";

export const DescriptionWrapper = styled(Column)`
  padding: 30px 30px 20px 30px;
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.shadow.default};
`;
