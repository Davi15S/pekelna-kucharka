import { Row, Text } from "@app/styled";
import styled from "@emotion/styled";

export const SubTitle = styled(Text)`
  color: ${({ theme }) => theme.colors.secondary};
  max-width: 700px;
`;

export const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 40px 25px;
  padding-top: 80px;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 1240px) {
    grid-template-columns: repeat(3, 1fr);

    div:nth-of-type(3n - 1) {
      top: 40px;
    }
  }
`;

export const ButtonWrapper = styled(Row)`
  @media only screen and (min-width: 1240px) {
    padding-top: 100px;
  }
`;
