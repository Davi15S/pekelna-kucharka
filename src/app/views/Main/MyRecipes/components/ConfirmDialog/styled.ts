import { Column } from "@app/styled";
import styled from "@emotion/styled";

export const ConfirmDialogWraper = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Dialog = styled(Column)`
  background-color: ${({ theme }) => theme.background.primary};
  width: max-content;
  height: max-content;
  padding: 20px 40px 10px 40px;
  border-radius: 20px;
`;
