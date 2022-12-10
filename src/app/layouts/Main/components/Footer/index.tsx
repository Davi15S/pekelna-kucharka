import { Column, Row } from "@app/styled";
import React from "react";
import { GoFlame } from "react-icons/go";
import { FooterText, FooterWrapper } from "./styled";

function Footer() {
  return (
    <FooterWrapper p="40px 0 20px 0">
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
    </FooterWrapper>
  );
}

export default Footer;
