import styled from "@emotion/styled";
import { Theme } from "@styles/theme";
import Link from "next/link";

export const LinkWrapper = styled(Link)<{ last?: boolean; theme?: Theme }>`
  font-size: 20px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.third};
  padding-bottom: 20px;
  width: 200px;
  text-align: center;
  margin-top: 50px;
  ${({ last, theme }) => (last ? `color: ${theme.colors.error}` : "")};
  transition: all 300ms ease-in-out;

  :hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.error};
  }
`;
