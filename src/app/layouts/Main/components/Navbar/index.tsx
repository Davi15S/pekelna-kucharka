import LinkComponent from "./components/Link";
import { HamburgerLine, HamburgerWrapper, LogoWrapper, NavbarContainer, NavbarWrapper } from "./styled";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoLogoTiktok } from "react-icons/io5";
import { BsFacebook } from "react-icons/bs";
import Link from "next/link";
import Logo from "@assets/Logo.svg";
import { Image, ImageContainer, Row } from "@app/styled";
import MobileNavbar from "./components/MobileNavbar";
import { useAuth } from "@contexts/AuthContext";
import HoverItem from "./components/HoverItem";

function Navbar(props: { active: boolean; handleClick: () => void }) {
  const { user } = useAuth();

  return (
    <NavbarWrapper justifyContent="center" alignItems="center">
      <LogoWrapper>
        <Link href="/">
          <ImageContainer w="200px" mobileW="150px" h="50px">
            <Image src={Logo} alt="" fill objectFit="contain" />
          </ImageContainer>
        </Link>
      </LogoWrapper>
      <NavbarContainer alignItems="center" justifyContent="space-between">
        <Row alignItems="center" w="max-content">
          <LinkComponent text="Recepty" link="/recipes" />
          <LinkComponent text="Magazín" link="/magazine" />
        </Row>
        <Row justifyContent="flex-end" alignItems="center" w="max-content">
          {user ? <LinkComponent text="Profil" link="" hover hoverItem={<HoverItem />} /> : <LinkComponent text="Přihlásit se" link="/login" />}
          {user ? <LinkComponent text="Vytvořit recept" link="/recipes/new" /> : null}
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
        <MobileNavbar active={props.active} handleClick={props.handleClick} />
        <Row justifyContent="flex-end">
          <HamburgerWrapper onClick={props.handleClick}>
            <HamburgerLine line="1" active={props.active} />
            <HamburgerLine line="2" active={props.active} />
            <HamburgerLine line="3" active={props.active} />
          </HamburgerWrapper>
        </Row>
      </NavbarContainer>
    </NavbarWrapper>
  );
}

export default Navbar;
