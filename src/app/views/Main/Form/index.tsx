import { Column, Row, Text } from "@app/styled";
import BgTitle from "@components/BgTitle";
import Button from "@components/Button";
import TextArea from "@views/Main/Form/components/TextArea";
import usePageBackground from "@hooks/usePageBackground";
import usePageTitle from "@hooks/usePageTitle";
import { PageContent } from "@layouts/Main/components/Page/styled";
import React, { useState } from "react";
import IngredientItem from "./components/IngredientItem";
import Input from "./components/Input";
import List from "./components/List";
import UploadInput from "./components/UploadInput";
import { InputsWrapper } from "./styled";
import { RecipeForm } from "@shared/recipe";

function Form() {
  usePageBackground(undefined);
  const [category, setCategory] = useState<string[]>(["Hlavní chod", "Předkrm", "Snídaně", "Dezert"]);
  const [ingredients, setIngredients] = useState([{}]);
  const [progress, setProgress] = useState([""]);
  const [recipe, setRecipe] = useState<RecipeForm | null>(null);

  usePageTitle("Vytvoření receptu");

  const removeIngredient = (i: number) => {
    setIngredients((prevState) => prevState.filter((prevItem, _i) => _i !== i));
  };

  return (
    <>
      <BgTitle title="Vytvoření" top="20px" mobileTop="10vh" left="-10vw" />
      <BgTitle title="Receptu" top="65vh" left="35vw" mobileTop="80vh" mobileLeft="55vw" />
      <PageContent topP>
        <Column p="100px 0" alignItems="center">
          <Text fontWeight="700" fontSize="44px" p="0 0 20px 0" textAlign="center">
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
              <InputsWrapper p="30px 0 0 0">
                <List listItems={category} title="Kategorie" />
                <List listItems={category} title="Úroveň pálivosti" />
              </InputsWrapper>
              <InputsWrapper p="20px 0 0 0">
                <Input title="Délka přípravy (minuty)" />
                <Input title="Počet porcí" />
              </InputsWrapper>
              <Column w="100%" p="40px 0 0 0">
                <Text fontWeight="500" fontSize="18px">
                  Suroviny na 1 porci
                </Text>
                <Column w="100%" p="20px 0 0 0" alignItems="center">
                  {ingredients.map((ingredient, i) => (
                    <IngredientItem category={category} key={i} handleClick={() => removeIngredient(i)} onlyOne={ingredients.length <= 1} />
                  ))}
                  <Button text="Přidat další" maxW="220px" onClick={() => setIngredients((prevState) => [...prevState, {}])} />
                </Column>
              </Column>
              <Column w="100%" p="60px 0 0 0">
                <Text fontWeight="800" fontSize="30px">
                  Postup
                </Text>
                {progress.map((process, i) => (
                  <TextArea i={i + 1} key={i} />
                ))}
                <Row justifyContent="center">
                  <Button text="Přidat další" maxW="220px" onClick={() => setProgress((prevState) => [...prevState, ""])} />
                </Row>
              </Column>
            </Column>
          </Column>
        </Column>
      </PageContent>
    </>
  );
}

export default Form;
