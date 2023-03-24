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
import { StyledForm, InputsWrapper } from "./styled";
import { RecipeForm } from "@shared/recipe";
import { createRecipe } from "@api/recipes";
import { TextArea as TextAreaStyled } from "./components/TextArea/styled";
import { disableScroll, getToken } from "@app/utils";
import SentConfirmation from "./components/SentConfirmation";
import { useAuth } from "@contexts/AuthContext";
import { useBeforeunload } from "react-beforeunload";
import isEqual from "lodash/isEqual";
import Category from "./components/Category";

function Form() {
  usePageBackground(undefined);
  usePageTitle("Vytvoření receptu");
  const { user } = useAuth();
  const [category, ,] = useState<string[]>(["Hlavní chod", "Předkrm", "Snídaně", "Dezert"]);
  const [unitList, ,] = useState<string[]>(["g", "kg", "litr", "lžíce", "lžička"]);

  useBeforeunload((event) => {
    if (!isEqual(recipe, initRecipe) || images.length > 0) {
      event.preventDefault();
    }
  });

  const initRecipe: RecipeForm = {
    title: "",
    author: user?.id,
    description: "",
    ingredients: [{ ingredient: "", amount: "", unit: "" }],
    cookingTime: 0,
    process: [""],
    spiciness: "1",
    publishedAt: null,
    numberOfServings: "",
    categories: [],
    origins: [],
  };

  const [images, setImages] = useState<File[]>([]);
  const [sent, setSent] = useState(false);
  const [isBeingSent, setIsBeingSent] = useState(false);
  const [recipe, setRecipe] = useState<RecipeForm>(initRecipe);

  const handleSetRecipe = (key: keyof RecipeForm, value: string | number) => {
    const result = (Object.keys(recipe) as Array<keyof typeof key>).reduce(
      (acc) => ({
        ...acc,
        [key]: value,
      }),
      recipe,
    );
    setRecipe(result);
  };

  const handleSetRecipeArray = <T,>(key: keyof RecipeForm, index: number, value: T) => {
    const updatedIngredients = [...(recipe[key] as T[])];
    updatedIngredients[index] = value;
    const updatedRecipe = { ...recipe, [key]: updatedIngredients };
    setRecipe(updatedRecipe);
  };

  const handleCreateRecipe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!sent) {
      const form = new FormData();
      images.forEach((file) => form.append(`files.images`, file));
      form.append("data", JSON.stringify(recipe));
      setIsBeingSent(true);
      disableScroll();
      const res = await createRecipe(form, getToken());
      if (res) {
        setSent(true);
      }
    }
  };

  return (
    <>
      {isBeingSent && <SentConfirmation sent={sent} />}
      <PageContent topP>
        <BgTitle title="Vytvoření" top="20px" mobileTop="10vh" left="-50vw" />
        <BgTitle title="Receptu" top="65vh" left="-10vw" mobileTop="30vh" mobileLeft="-5vw" />
        <Row p="100px 0" alignItems="center" justifyContent="center" maxW="800px">
          <StyledForm onSubmit={(e) => handleCreateRecipe(e)}>
            <Text fontWeight="700" fontSize="44px" p="0 0 20px 0" textAlign="center">
              Vytvoření receptu
            </Text>
            <Text textAlign="center" color="third">
              Máš recept, o který se chceš podělit s komunitou? Vyplň níže požadované informace a tvůj recept zveřejníme.
            </Text>
            <Column w="100%" p="35px 0">
              <Text fontWeight="800" fontSize="30px" p="0 0 20px 0" textAlign="start">
                Informace
              </Text>
              <UploadInput handleSetImages={(files) => setImages(files)} />
              <Input
                p="40px 0 0 0"
                title="Název receptu"
                placeholder="Zadejte prosím celý název tvého receptu"
                value={recipe.title}
                onChange={(e) => handleSetRecipe("title", e.currentTarget.value)}
                required
              />
              <Column w="100%" p="20px 0 0 0">
                <Text p="0 0 8px 0">Popis</Text>
                <TextAreaStyled onChange={(e) => handleSetRecipe("description", e.currentTarget.value)} value={recipe.description} required />
              </Column>
              <Category
                onChange={(arr, key) => setRecipe((prevState) => ({ ...prevState, [key]: arr }))}
                selectedCategories={recipe.categories.concat(recipe.origins)}
              />
              <Column w="100%" p="30px 0 0 0">
                <InputsWrapper p="30px 0 0 0">
                  <List listItems={category} title="Úroveň pálivosti" onClick={(e) => handleSetRecipe("spiciness", e)} value={recipe.spiciness} pepperList />
                  <Input
                    title="Délka přípravy (minuty)"
                    required
                    onChange={(e) => handleSetRecipe("cookingTime", +e.currentTarget.value)}
                    value={recipe.cookingTime}
                  />
                </InputsWrapper>
                <InputsWrapper p="20px 0 0 0">
                  <Input
                    title="Počet porcí"
                    required
                    onChange={(e) => handleSetRecipe("numberOfServings", e.currentTarget.value)}
                    value={recipe.numberOfServings}
                  />
                </InputsWrapper>
                <Column w="100%" p="40px 0 0 0">
                  <Text fontWeight="500" fontSize="18px">
                    Seznam surovin
                  </Text>
                  <Column w="100%" p="20px 0 0 0" alignItems="center">
                    {recipe.ingredients.map((ingredient, i) => (
                      <IngredientItem
                        onlyOne={recipe.ingredients.length <= 1}
                        handleClick={() => setRecipe((prevState) => ({ ...prevState, ingredients: prevState.ingredients.filter((prevItem, _i) => _i !== i) }))}
                        key={i}
                        setIngredient={(key, index, value) => handleSetRecipeArray(key, index, value)}
                        index={i}
                        ingredient={ingredient}
                        unitList={unitList}
                      />
                    ))}
                    <Button
                      text="Přidat další"
                      maxW="220px"
                      type="button"
                      onClick={() =>
                        setRecipe((prevState) => ({ ...prevState, ingredients: [...prevState.ingredients, { ingredient: "", amount: "", unit: "" }] }))
                      }
                    />
                  </Column>
                </Column>
                <Column w="100%" p="60px 0 0 0">
                  <Text fontWeight="800" fontSize="30px">
                    Postup
                  </Text>
                  {recipe.process.map((process, i) => (
                    <TextArea
                      value={process}
                      index={i}
                      key={i}
                      setIngredient={(key, index, value) => handleSetRecipeArray(key, index, value)}
                      onlyone={recipe.process.length <= 1}
                      handleClick={() => setRecipe((prevState) => ({ ...prevState, process: prevState.process.filter((prevItem, _i) => _i !== i) }))}
                    />
                  ))}
                  <Row justifyContent="center">
                    <Button
                      text="Přidat další"
                      maxW="220px"
                      type="button"
                      onClick={() => setRecipe((prevState) => ({ ...prevState, process: [...prevState.process, ""] }))}
                    />
                  </Row>
                </Column>
              </Column>
            </Column>
            <Column w="100%" alignItems="center">
              <BgTitle title="Děkujeme" top="-100px" left="-50vw" mobileTop="20px" />
              <Text fontWeight="700" fontSize="44px" textAlign="center">
                Nezapomněl jsi na něco?
              </Text>
              <Text color="third" p="20px 0" textAlign="center">
                Jestli jsi spokojený se svým receptem, neváhej ho odeslat. Tvůj recept bude po kontrole dostupná veřejnosti.
              </Text>
              <Button text="Potvrdit" maxW="220px" type="submit" />
            </Column>
          </StyledForm>
        </Row>
      </PageContent>
    </>
  );
}

export default Form;
