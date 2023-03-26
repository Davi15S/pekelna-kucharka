import React, { useState } from "react";
import { HeroWrapper, MainTitle, SubTitle } from "./styled";
import { BiSearch } from "react-icons/bi";
import { Row } from "@app/styled";
import Input from "@components/Input";
import { StyledForm } from "@views/Main/Form/styled";
import qs from "qs";
import { useRouter } from "next/router";

function Hero() {
  const [search, setSearch] = useState<string>();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (search) {
      const filterQuery = {
        filters: {
          title: {
            $containsi: search,
          },
        },
      };

      const query = qs.stringify(filterQuery, {
        encodeValuesOnly: true,
      });
      router.push({ pathname: "/recipes", query: query });
    }
  };

  return (
    <HeroWrapper alignItems="center" justifyContent="center">
      <MainTitle m="0 0 30px 0">Všechny recepty pálivých jídel na jednom místě</MainTitle>
      <SubTitle>Objevujte s námi veškeré recepty na pálivá jídla, vytvořená naší skvělou pekelnou komunitou</SubTitle>
      <Row justifyContent="center" p="50px 30px 0 30px">
        <StyledForm onSubmit={(e) => handleSubmit(e)}>
          <Input
            h="100%"
            maxW="500px"
            placeholder="Hledat"
            icon={<BiSearch size={20} color={"#111111"} />}
            value={search}
            onChange={(e) => setSearch(!e.currentTarget.value.replace(/\s/g, "").length ? undefined : e.currentTarget.value)}
          />
        </StyledForm>
      </Row>
    </HeroWrapper>
  );
}

export default Hero;
