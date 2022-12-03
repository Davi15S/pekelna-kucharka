import { Column } from "@app/styled";
import styled from "@emotion/styled";
import { Theme } from "@styles/theme";

export const MobileNavbarWrapper = styled(Column)<{ active: boolean; theme?: Theme }>`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: ${({ active }) => (active ? `0%` : "100%")};
  background-color: ${({ theme }) => theme.background.primary};
  transition: all 400ms ease-in-out;
`;

export const LoginWrapper = styled(Column)`
  margin-top: auto;
  justify-content: flex-end;
`;
