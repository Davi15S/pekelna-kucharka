import { Column, Row } from "@app/styled";
import styled from "@emotion/styled";

export const CommentWrapper = styled(Column)`
  box-shadow: ${({ theme }) => theme.shadow.default};
  border-radius: 20px;
  min-width: 400px;
  max-width: fit-content;
  flex: 1 1 400px;
`;

export const CommentImage = styled.div`
  min-width: 50px;
  min-height: 50px;
  border-radius: 50%;
  border: 1px solid white;
  position: relative;
  overflow: hidden;
`;
