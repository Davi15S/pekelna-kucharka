import styled from "@emotion/styled";
import Link from "next/link";

export const LinkWrapper = styled(Link)`
  margin-right: 50px;
  position: relative;

  ::before {
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: -5px;
    position: absolute;
    border-bottom: 2px solid red;
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
