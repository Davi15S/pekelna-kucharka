import styled from "@emotion/styled";
import { Theme } from "@styles/theme";

export const FooterText = styled.p<{ theme?: Theme }>`
  text-align: center;
  color: ${({ theme }) => theme.colors.fifth};
`;