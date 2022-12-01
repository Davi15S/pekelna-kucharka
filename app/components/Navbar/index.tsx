import Icon from "@components/Icon";
import { ImageWrapper, Row } from "app/styled";
import LinkComponent from "./components/Link";
import { LogoWrapper, NavbarContainer, NavbarWrapper } from "./styled";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoLogoTiktok } from "react-icons/io5";
import { BsFacebook } from "react-icons/bs";
import Link from "next/link";
import Logo from "@assets/Logo.svg";
import Image from "next/image";

function Navbar() {
  return (
    <NavbarWrapper>
      <LogoWrapper>
        <ImageWrapper w="200px" h="50px" src={Logo} alt="" />
      </LogoWrapper>
      <NavbarContainer alignItems="center">
        <Row>
          <LinkComponent text="Recepty" link="/recipes" />
          <LinkComponent text="Magazín" link="/magazine" />
        </Row>
        <Row justifyContent="flex-end" alignItems="center">
          <LinkComponent text="Přihlásit se" link="/login" />
          <Link href="">
            <Icon m="0 15px 0 0" icon={<AiOutlineInstagram size={25} color={"white"} />} />
          </Link>
          <Link href="">
            <Icon m="0 15px 0 0" icon={<IoLogoTiktok size={25} color={"white"} />} />
          </Link>
          <Link href="">
            <Icon m="0 15px 0 0" icon={<BsFacebook size={25} color={"white"} />} />
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
