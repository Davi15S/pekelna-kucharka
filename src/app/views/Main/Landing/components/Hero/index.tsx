import React from "react";
import { HeroWrapper, MainTitle, SubTitle } from "./styled";
import { BiSearch } from "react-icons/bi";
import { Row } from "@app/styled";
import Input from "@components/Input";

function Hero() {
  return (
    <HeroWrapper alignItems="center" justifyContent="center">
      <MainTitle m="0 0 30px 0">Všechny recepty pálivých jídel na jednom místě</MainTitle>
      <SubTitle>Objevujte s námi veškeré recepty na pálivá jídla, vytvořená naší skvělou pekelnou komunitou</SubTitle>
      <Row justifyContent="center" p="50px 30px 0 30px">
        <Input maxW="500px" placeholder="Hledat" icon={<BiSearch size={20} color={"#111111"} />} />
      </Row>
    </HeroWrapper>
  );
}

export default Hero;
