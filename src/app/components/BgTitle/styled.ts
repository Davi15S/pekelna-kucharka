import styled from "@emotion/styled";
import { Theme } from "@styles/theme";

export const BgTitleWrapper = styled.div`
  position: relative;
  margin-bottom: 30px;
`;

export const Title = styled.p<{ theme?: Theme }>`
  position: absolute;
  color: ${({ theme }) => theme.background.secondary};
  font-size: 300px;
  left: -20vw;
  top: -230px;
  font-weight: 800;
  z-index: -1;
  user-select: none;

  @media only screen and (max-width: 1024px) {
    font-size: 80px;
    top: -18px;
    left: -15px;
  }
`;

export const Subtitle = styled.h3<{ theme?: Theme }>`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.error};
  font-weight: 800;
`;
