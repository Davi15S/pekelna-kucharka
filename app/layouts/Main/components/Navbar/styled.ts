import styled from "@emotion/styled";
import { Row } from "app/styled";

export const NavbarWrapper = styled(Row)`
  padding: 35px 100px;
  position: absolute;
  z-index: 10;

  @media only screen and (max-width: 1024px) {
    padding: 20px;
  }
`;

export const LogoWrapper = styled(Row)`
  position: absolute;
  justify-content: center;
  width: auto;

  @media only screen and (max-width: 1024px) {
    justify-content: start;
    position: relative;
    width: 200px;
  }
`;

export const NavbarContainer = styled(Row)<{ mobile?: boolean }>`
  display: ${({ mobile }) => (mobile ? "none" : "flex")};

  @media only screen and (max-width: 1024px) {
    display: ${({ mobile }) => (mobile ? "flex" : "none")};
  }
`;
