import Input from "@components/Input";
import { Row } from "app/styled";
import React from "react";
import { HeroWrapper, MainTitle, SubTitle } from "./styled";
import { BiSearch } from "react-icons/bi";

function Hero() {
  return (
    <HeroWrapper alignItems="center" justifyContent="center">
      <MainTitle>Ultricies tortor posue vitae, fringilla platea.</MainTitle>
      <SubTitle>Scelerisque elit hendrerit turpis lectus neque ipsum, egestas nunc elementum.</SubTitle>
      <Row justifyContent="center" p="50px 40px 0 40px">
        <Input maxW="700px" placeholder="Hledat" icon={<BiSearch size={20} color={"#111111"} />} />
      </Row>
    </HeroWrapper>
  );
}

export default Hero;
