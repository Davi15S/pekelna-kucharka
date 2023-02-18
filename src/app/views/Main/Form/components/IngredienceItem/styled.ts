import { Row } from "@app/styled";
import styled from "@emotion/styled";
import { Theme } from "@styles/theme";

export const Number = styled.div<{ theme?: Theme; offsetTop?: React.CSSProperties["top"] }>`
  min-width: 30px;
  min-height: 30px;
  background-color: ${({ theme }) => theme.background.primary};
  position: relative;
  color: ${({ theme }) => theme.colors.error};
  font-size: 18px;
  top: ${({ offsetTop }) => (offsetTop ? offsetTop : "20px")};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;

export const IngredientItemWrapper = styled(Row)`
  background-color: ${({ theme }) => theme.background.fourth};
  border-radius: 10px;
`;
