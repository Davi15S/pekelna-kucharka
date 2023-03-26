import { Row } from "@app/styled";
import styled from "@emotion/styled";

export const RecipeItemWrapper = styled(Row)`
  background-color: ${({ theme }) => theme.background.primary};
  box-shadow: ${({ theme }) => theme.shadow.default};
  max-width: 780px;
  margin: 20px 0;
  padding: 20px;
  border-radius: 20px;
  transition: all 300ms ease-in-out;

  :hover {
    box-shadow: ${({ theme }) => theme.shadow.hover};
  }
`;
