import styled from "@emotion/styled";
import { Theme } from "@styles/theme";

export const Title = styled.h4`
  font-size: 55px;
  margin: 0;
  font-weight: 800;
`;

export const SubTitle = styled.p<{ theme?: Theme }>`
  color: ${({ theme }) => theme.colors.error};
  font-weight: 600;
`;
