import { Row } from "@app/styled";
import styled from "@emotion/styled";
import { Theme } from "@styles/theme";

export const ItemsWrapper = styled(Row)`
  overflow-x: auto;
  position: relative;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Shadow = styled.div<{ theme?: Theme; left?: boolean }>`
  position: absolute;
  ${({ left, theme }) =>
    left
      ? `background: linear-gradient(to right, ${theme.background.primary} 20%, transparent);`
      : `background: linear-gradient(to left, ${theme.background.primary} 20%, transparent);`}
  ${({ left }) => (left ? "left: 0;" : "right: 0;")}
  height: 100%;
  width: 50px;
  z-index: 10;
`;
