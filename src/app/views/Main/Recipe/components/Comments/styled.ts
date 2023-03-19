import styled from "@emotion/styled";

export const CommentsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
  width: 100%;
  gap: 20px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;
