import styled from "@emotion/styled";
import { Theme } from "@styles/theme";

export const SentConfirmationWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
  width: 100vw;
  height: 100vh;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Circle = styled.div<{ theme?: Theme }>`
  width: 120px;
  height: 120px;
  background-color: ${({ theme }) => theme.colors.error};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
