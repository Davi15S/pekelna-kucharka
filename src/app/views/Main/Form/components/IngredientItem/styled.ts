import { Row } from "@app/styled";
import styled from "@emotion/styled";
import { Theme } from "@styles/theme";

export const Number = styled.div<{ theme?: Theme; offsetTop?: React.CSSProperties["top"]; pointer?: boolean }>`
  min-width: 25px;
  min-height: 25px;
  background-color: ${({ theme }) => theme.background.primary};
  position: relative;
  color: ${({ theme }) => theme.colors.error};
  font-size: 18px;
  top: ${({ offsetTop }) => (offsetTop ? offsetTop : "")};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  cursor: ${({ pointer }) => (pointer ? "pointer" : "auto")};
`;

export const IngredientItemWrapper = styled(Row)`
  background-color: ${({ theme }) => theme.background.fourth};
  border-radius: 10px;
  position: relative;
`;

export const RemoveButton = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 10;
`;
