import styled from "@emotion/styled";
import { Theme } from "@styles/theme";

export const BgTitleWrapper = styled.div`
  position: relative;
`;

export const Title = styled.p<{ theme?: Theme }>`
  position: absolute;
  color: ${({ theme }) => theme.colors.quantery};
  font-size: 300px;
  left: -200px;
  top: -200px;
  font-weight: 900;
  z-index: -1;
`;

export const Subtitle = styled.h3<{ theme?: Theme }>`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.error};
  font-weight: 900;
`;
