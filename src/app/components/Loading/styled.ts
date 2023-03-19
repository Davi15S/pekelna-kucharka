import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Theme } from "@styles/theme";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
    }
  100% {
    transform: rotate(360deg);
    }
`;

export const LoadingWrapper = styled.span<{ theme?: Theme }>`
  width: 50px;
  height: 50px;
  border: 5px solid ${({ theme }) => theme.colors.error};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotate} 1s linear infinite;
`;
