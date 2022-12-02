import styled from "@emotion/styled";
import { Column } from "app/styled";
import { Theme } from "styles/theme";

export const HeroWrapper = styled(Column)`
  height: 100vh;
  width: 100%;
  text-align: center;
  max-width: 900px;
`;

export const MainTitle = styled.h1`
  font-size: 50px;

  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const SubTitle = styled.h2<{ theme?: Theme }>`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 16px;
`;
