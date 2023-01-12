import styled from "@emotion/styled";
import { Theme } from "@styles/theme";

export const ItemWrapper = styled.div<{ theme?: Theme }>`
  display: flex;
  flex-direction: column;
  justify-self: center;
  max-width: 500px;
  width: 100%;
  height: max-content;
  box-shadow: ${({ theme }) => theme.shadow.trend};
  border-radius: 10px;
  transition: all 200ms ease-in-out;
  cursor: pointer;

  :hover {
    box-shadow: ${({ theme }) => theme.shadow.trendHover};
  }
`;

export const ImageContent = styled.div`
  border-radius: 20px;
  overflow: hidden;
  width: 100%;
  height: 100%;
  max-height: 300px;
`;
