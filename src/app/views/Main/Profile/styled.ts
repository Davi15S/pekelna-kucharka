import styled from "@emotion/styled";
import { Theme } from "@styles/theme";

export const ProfileIcon = styled.div<{ theme?: Theme }>`
  width: 120px;
  height: 120px;
  border: 2px solid ${({ theme }) => theme.colors.third};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.third};
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
`;
