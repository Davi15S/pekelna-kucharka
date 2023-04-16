import styled from "@emotion/styled";
import { Theme } from "@styles/theme";

export const ItemWrapper = styled.div<{ theme?: Theme }>`
  display: flex;
  flex-direction: column;
  justify-self: center;
  max-width: 500px;
  width: 100%;
  height: max-content;
  box-shadow: ${({ theme }) => theme.shadow.default};
  border-radius: 10px;
  transition: all 200ms ease-in-out;
  cursor: pointer;

  :hover {
    box-shadow: ${({ theme }) => theme.shadow.hover};
  }
`;
