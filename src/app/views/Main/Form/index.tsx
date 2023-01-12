import { Column, Text } from "@app/styled";
import BgTitle from "@components/BgTitle";
import { PageContent } from "@layouts/Main/components/Page/styled";
import React from "react";
import UploadInput from "./components/UploadInput";

function Form() {
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
          </Column>
        </Column>
      </PageContent>
    </>
  );
}

export default Form;
