import { Column, Row } from "@app/styled";
import Input from "@components/Input";
import { MainTitle, SubTitle } from "@views/Main/Landing/components/Hero/styled";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { useSearch } from "../../contexts/SearchContext";

function Hero() {
  const { setSearch, search } = useSearch();

  return (
    <Column alignItems="center" justifyContent="center" h="500px" textAlign="center">
      <MainTitle>Katalog receptů</MainTitle>
      <SubTitle>Scelerisque elit hendrerit turpis lectus neque ipsum, egestas nunc elementum.</SubTitle>
      <Row justifyContent="center" p="50px 30px 0 30px">
        <Input
          h="100%"
          maxW="500px"
          placeholder="Hledat"
          icon={<BiSearch size={20} color={"#111111"} />}
          onChange={(e) => setSearch(!e.currentTarget.value.replace(/\s/g, "").length ? undefined : e.currentTarget.value)}
          value={search}
        />
      </Row>
    </Column>
  );
}

export default Hero;
