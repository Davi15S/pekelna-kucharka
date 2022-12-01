import styled from "@emotion/styled";
import { Row } from "app/styled";

export const NavbarWrapper = styled(Row)`
  padding: 35px 100px;
  position: absolute;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1024px) {
    padding: 20px;
  }
`;

export const LogoWrapper = styled(Row)`
  position: absolute;
  justify-content: center;

  @media only screen and (max-width: 1024px) {
    justify-content: start;
    position: relative;
    height: 40px;
  }
`;

export const NavbarContainer = styled(Row)<{ mobile?: boolean }>`
  display: ${({ mobile }) => (mobile ? "none" : "flex")};

  @media only screen and (max-width: 1024px) {
    display: ${({ mobile }) => (mobile ? "flex" : "none")};
  }
`;
