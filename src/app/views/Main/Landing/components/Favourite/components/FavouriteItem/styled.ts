import { Column, Row } from "@app/styled";
import styled from "@emotion/styled";

export const ItemWrapper = styled(Column)`
  cursor: pointer;
`;

export const Title = styled.p`
  padding: 10px 0;
  font-weight: 700;
`;

export const SubTitle = styled(Row)`
  color: ${({ theme }) => theme.colors.error};
  font-weight: 700;
  font-size: 14px;
`;
