import LinkComponent from "./components/Link";
import { HamburgerLine, HamburgerWrapper, LogoWrapper, NavbarContainer, NavbarWrapper } from "./styled";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoLogoTiktok } from "react-icons/io5";
import { BsFacebook } from "react-icons/bs";
import Link from "next/link";
import Logo from "@assets/Logo.svg";
import { ImageWrapper, Row } from "@app/styled";
import { useState } from "react";
import MobileNavbar from "./components/MobileNavbar";

function Navbar() {
  const [active, setActive] = useState(false);

  const handleNavbar = () => {
    if (active) {
      document.body.classList.remove("openNavbar");
    } else {
      document.body.classList.add("openNavbar");
    }
    setActive(!active);
  };

  return (
    <NavbarWrapper justifyContent="center" alignItems="center">
      <LogoWrapper>
        <Link href="/">
          <ImageWrapper w="200px" mobileW="150px" src={Logo} alt="" />
        </Link>
      </LogoWrapper>
      <NavbarContainer alignItems="center" justifyContent="space-between">
        <Row alignItems="center" w="max-content">
          <LinkComponent text="Recepty" link="/recipes" />
          <LinkComponent text="Magazín" link="/magazine" />
        </Row>
        <Row justifyContent="flex-end" alignItems="center" w="max-content">
          <LinkComponent text="Přihlásit se" link="/login" />
          <Link href="" style={{ margin: "0 15px 0 0" }}>
            <AiOutlineInstagram size={25} color={"white"} />
          </Link>
          <Link href="" style={{ margin: "0 15px 0 0" }}>
            <IoLogoTiktok size={25} color={"white"} />
          </Link>
          <Link href="">
            <BsFacebook size={25} color={"white"} />
          </Link>
        </Row>
      </NavbarContainer>
      <NavbarContainer mobile>
        <MobileNavbar active={active} handleClick={handleNavbar} />
        <Row justifyContent="flex-end">
          <HamburgerWrapper onClick={handleNavbar}>
            <HamburgerLine line="1" active={active} />
            <HamburgerLine line="2" active={active} />
            <HamburgerLine line="3" active={active} />
          </HamburgerWrapper>
        </Row>
      </NavbarContainer>
    </NavbarWrapper>
  );
}

export default Navbar;
