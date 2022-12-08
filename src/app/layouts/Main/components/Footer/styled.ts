import styled from "@emotion/styled";
import { Theme } from "@styles/theme";

export const FooterText = styled.p<{ theme?: Theme }>`
  text-align: center;
  color: ${({ theme }) => theme.colors.third};
  padding: 20px;
  font-size: 14px;
  max-width: 800px;
`;
