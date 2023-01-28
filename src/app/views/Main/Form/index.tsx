import { Column, Row, Text } from "@app/styled";
import BgTitle from "@components/BgTitle";
import usePageBackground from "@hooks/usePageBackground";
import { PageContent } from "@layouts/Main/components/Page/styled";
import React, { useState } from "react";
import Input from "./components/Input";
import List from "./components/List";
import UploadInput from "./components/UploadInput";

function Form() {
  usePageBackground(undefined);
  const [category, setCategory] = useState<string[]>(["Hlavní chod", "Předkrm", "Snídaně", "Dezert"]);

  return (
    <>
      <BgTitle title="Vytvoření" top="20px" mobileTop="10vh" left="-10vw" />
      <BgTitle title="Receptu" top="65vh" left="35vw" mobileTop="80vh" mobileLeft="55vw" />
      <PageContent topP>
        <Column p="100px 0" alignItems="center">
          <Text fontWeight="700" fontSize="44px" p="0 0 20px 0">
            Vytvoření receptu
          </Text>
          <Text textAlign="center" color="third">
            Máš recept, o který se chceš podělit s komunitou? Vyplň níže požadované informace a tvůj recept bude veřejný.
          </Text>
          <Column w="100%" p="35px 0">
            <Text fontWeight="800" fontSize="30px" p="0 0 20px 0" textAlign="start">
              Informace
            </Text>
            <UploadInput />
            <Input p="40px 0 0 0" title="Název receptu" placeholder="Zadejte prosím celý název tvého receptu" />
            <Column w="100%">
              <Row p="50px 0 0 0">
                <List listItems={category} title="Kategorie" p="0 10px 0 0" />
                <List listItems={category} title="Úroveň pálivosti" p="0 0 0 10px" />
              </Row>
              <Row p="30px 0 0 0">
                <Input title="Délka přípravy (minuty)" p="0 10px 0 0" />
                <Input title="Počet porcí" p="0 0 0 10px" />
              </Row>
            </Column>
          </Column>
        </Column>
      </PageContent>
    </>
  );
}

export default Form;
