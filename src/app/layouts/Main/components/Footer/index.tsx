import { Row } from "@app/styled";
import { PageContent } from "@components/Page/styled";
import React from "react";
import { GoFlame } from "react-icons/go";
import { FooterText } from "./styled";

function Footer() {
  return (
    <PageContent>
      <Row justifyContent="center">
        <GoFlame size={25} color={"#ED4040"} />
        <GoFlame size={25} color={"#ED4040"} />
        <GoFlame size={25} color={"#ED4040"} />
      </Row>
      <Row>
        <FooterText>
          © 2022 Copyright XXX | Autorská práva k publikovaným materiálům | Podmínky pro užívání služby informační společnosti | Informace o zpracování osobních
          údajů | Cookies | Nastavení soukromí
        </FooterText>
      </Row>
    </PageContent>
  );
}

export default Footer;
