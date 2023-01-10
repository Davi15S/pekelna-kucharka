import styled from "@emotion/styled";

export const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  gap: 50px;
  width: 100%;
  padding: 150px 0 0 0;

  @media only screen and (max-width: 715px) {
    grid-template-columns: repeat(1, minmax(300px, 1fr));
  }
`;
