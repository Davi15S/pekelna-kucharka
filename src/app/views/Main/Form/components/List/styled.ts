import { Text } from "@app/styled";
import styled from "@emotion/styled";
import { Theme } from "@styles/theme";

export const Arrow = styled.div<{ theme?: Theme; isOpen?: boolean }>`
  color: ${({ theme }) => theme.colors.error};
  transform: rotate(${({ isOpen }) => (isOpen ? "180deg" : "0deg")});
  transition: transform 300ms ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ListItems = styled.div<{ isOpen: boolean; theme?: Theme }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: auto;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.border.primary};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.background.primary};
  z-index: 10;
`;

export const ListItem = styled(Text)`
  transition: all 200ms ease-in-out;

  :hover {
    background-color: ${({ theme }) => theme.background.third};
  }
`;
