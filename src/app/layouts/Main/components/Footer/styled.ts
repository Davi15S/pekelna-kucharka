import { Column } from "@app/styled";
import styled from "@emotion/styled";
import { Theme } from "@styles/theme";

export const FooterWrapper = styled(Column)`
  z-index: 10;
  position: relative;
`;

export const FooterText = styled.p<{ theme?: Theme }>`
  text-align: center;
  color: ${({ theme }) => theme.colors.third};
  padding: 20px;
  font-size: 14px;
  max-width: 800px;

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
