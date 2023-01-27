import { Row } from "@app/styled";
import styled from "@emotion/styled";

export const NavbarWrapper = styled(Row)`
  padding: 35px 100px;
  position: absolute;
  z-index: 2;

  @media only screen and (max-width: 1024px) {
    padding: 20px;
  }
`;

export const LogoWrapper = styled(Row)`
  position: absolute;
  justify-content: center;
  width: auto;
  flex-grow: 1;

  @media only screen and (max-width: 1024px) {
    justify-content: start;
    position: relative;
    width: 200px;
  }
`;

export const NavbarContainer = styled(Row)<{ mobile?: boolean }>`
  display: ${({ mobile }) => (mobile ? "none" : "flex")};
  max-width: 1800px;

  @media only screen and (max-width: 1024px) {
    justify-content: flex-end;
  }

  @media only screen and (max-width: 768px) {
    display: ${({ mobile }) => (mobile ? "flex" : "none")};
  }
`;

export const HamburgerWrapper = styled.div`
  display: block;
  height: 26px;
  width: 32px;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;

export const HamburgerLine = styled.span<{ line?: "1" | "2" | "3"; active?: boolean }>`
  display: block;
  height: 4px;
  width: 100%;
  border-radius: 10px;
  background: ${({ line, active }) => (line == "2" ? "red" : line == "3" && active ? "red" : "white")};
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: ${({ line }) => (line == "3" ? "-1" : "0")};
  ${({ line, active }) => (line == "2" && active ? "opacity: 0;" : "")}
  ${({ line, active }) => (line == "1" ? `top: 0;` : line == "2" ? `bottom: ${active ? "0" : "50%"}; transform: translate(0%, 50%);` : `bottom: 0;`)}
  transform-origin: ${({ line }) => (line == "1" ? `0% 0%` : `0% 100%;`)};
  transform: rotate(${({ line, active }) => (active ? (line == "1" ? `45deg` : `-45deg`) : `Odeg`)});
`;
