import { Row } from "@app/styled";
import React from "react";
import { GoFlame } from "react-icons/go";
import { FooterText } from "./styled";

function Footer() {
  return (
    <>
      <Row justifyContent="center">
        <GoFlame size={25} color={"#ED4040"} />
        <GoFlame size={25} color={"#ED4040"} />
        <GoFlame size={25} color={"#ED4040"} />
      </Row>
      <Row justifyContent="center">
        <FooterText>
          © 2022 Copyright XXX | Autorská práva k publikovaným materiálům | Podmínky pro užívání služby informační společnosti | Informace o zpracování osobních
          údajů | Cookies | Nastavení soukromí
        </FooterText>
      </Row>
    </>
  );
}

export default Footer;
