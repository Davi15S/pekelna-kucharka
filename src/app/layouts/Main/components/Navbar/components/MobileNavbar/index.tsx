import { Row } from "@app/styled";
import Icon from "@components/Icon";
import Link from "next/link";
import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { IoLogoTiktok } from "react-icons/io5";
import LinkComponent from "./components/Link";
import { LoginWrapper, MobileNavbarWrapper } from "./styled";

function MobileNavbar(props: { active: boolean; handleClick: () => void }) {
  return (
    <MobileNavbarWrapper p="50px 50px 90px" alignItems="center" {...props}>
      <LinkComponent handleClick={props.handleClick} text="Recepty" link="/recipes" />
      <LinkComponent handleClick={props.handleClick} text="Magazín" link="/magazine" />
      <LoginWrapper>
        <LinkComponent handleClick={props.handleClick} text="Přihlásit se" link="/login" last />
        <Row justifyContent="center" p="30px 0 0 0">
          <Link href="" style={{ margin: "0 10px" }}>
            <Icon icon={<AiOutlineInstagram size={25} color={"white"} />} />
          </Link>
          <Link href="" style={{ margin: "0 10px" }}>
            <Icon icon={<IoLogoTiktok size={25} color={"white"} />} />
          </Link>
          <Link href="" style={{ margin: "0 10px" }}>
            <Icon icon={<BsFacebook size={25} color={"white"} />} />
          </Link>
        </Row>
      </LoginWrapper>
    </MobileNavbarWrapper>
  );
}

export default MobileNavbar;
