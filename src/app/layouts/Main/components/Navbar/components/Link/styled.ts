import styled from "@emotion/styled";
import { Theme } from "@styles/theme";
import Link from "next/link";

export const LinkWrapper = styled(Link)<{ m?: React.CSSProperties["margin"]; color?: "red"; theme?: Theme }>`
  margin: ${({ m }) => (m ? m : "0 50px 0 0")};
  position: relative;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  ${({ color, theme }) => color == "red" && `color: ${theme.colors.error};`}

  ::before {
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: -5px;
    position: absolute;
    border-bottom: 2px solid ${({ theme }) => theme.colors.error};
    transform: scale(0, 1);
    transition: transform 300ms ease-in-out;
    transform-origin: bottom left;
  }

  :hover {
    ::before {
      transform: scale(1, 1);
    }
  }
`;
