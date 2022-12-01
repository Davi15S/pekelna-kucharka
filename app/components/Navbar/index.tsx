import Icon from "@components/Icon";
import { ImageWrapper, Row } from "app/styled";
import LinkComponent from "./components/Link";
import { LogoWrapper, NavbarContainer, NavbarWrapper } from "./styled";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoLogoTiktok } from "react-icons/io5";
import { BsFacebook } from "react-icons/bs";
import Link from "next/link";
import Logo from "@assets/Logo.svg";

function Navbar() {
  return (
    <NavbarWrapper justifyContent="center" alignItems="center">
      <LogoWrapper>
        <Link href="/">
          <ImageWrapper w="200px" mobileW="150px" src={Logo} alt="" />
        </Link>
      </LogoWrapper>
      <NavbarContainer alignItems="center">
        <Row alignItems="center">
          <LinkComponent text="Recepty" link="/recipes" />
          <LinkComponent text="Magazín" link="/magazine" />
        </Row>
        <Row justifyContent="flex-end" alignItems="center">
          <LinkComponent text="Přihlásit se" link="/login" />
          <Link href="" style={{ margin: "0 15px 0 0" }}>
            <Icon icon={<AiOutlineInstagram size={25} color={"white"} />} />
          </Link>
          <Link href="" style={{ margin: "0 15px 0 0" }}>
            <Icon icon={<IoLogoTiktok size={25} color={"white"} />} />
          </Link>
          <Link href="">
            <Icon icon={<BsFacebook size={25} color={"white"} />} />
          </Link>
        </Row>
      </NavbarContainer>
      <NavbarContainer mobile>
        <Row justifyContent="flex-end">Hamburger</Row>
      </NavbarContainer>
    </NavbarWrapper>
  );
}

export default Navbar;
