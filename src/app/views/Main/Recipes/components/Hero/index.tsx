import { Column, Row } from "@app/styled";
import Input from "@components/Input";
import { MainTitle, SubTitle } from "@views/Main/Landing/components/Hero/styled";
import React from "react";
import { BiSearch } from "react-icons/bi";

function Hero() {
  return (
    <Column alignItems="center" justifyContent="center" h="500px" textAlign="center">
      <MainTitle>Katalog receptů</MainTitle>
      <SubTitle>Scelerisque elit hendrerit turpis lectus neque ipsum, egestas nunc elementum.</SubTitle>
      <Row justifyContent="center" p="50px 30px 0 30px">
        <Input maxW="500px" placeholder="Hledat" icon={<BiSearch size={20} color={"#111111"} />} />
      </Row>
    </Column>
  );
}

export default Hero;
