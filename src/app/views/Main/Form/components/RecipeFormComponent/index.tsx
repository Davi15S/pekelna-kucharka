import { Column, Row, Text } from "@app/styled";
import Button from "@components/Button";
import TextArea from "@views/Main/Form/components/TextArea";
import React, { useState } from "react";
import { RecipeAttributes, RecipeForm } from "@shared/recipe";
import { createRecipe } from "@api/recipes";
import { disableScroll, getToken } from "@app/utils";
import { useAuth } from "@contexts/AuthContext";
import { useBeforeunload } from "react-beforeunload";
import isEqual from "lodash/isEqual";
import { IUnits } from "@shared/units";
import SentConfirmation from "../SentConfirmation";
import { InputsWrapper, StyledForm } from "../../styled";
import UploadInput from "../UploadInput";
import Input from "../Input";
import Category from "../Category";
import List from "../List";
import { TextArea as TextAreaStyled } from "../TextArea/styled";
import IngredientItem from "../IngredientItem";

function RecipeFormComponent({
  units,
  children,
  fetchedRecipe,
  editRecipe,
}: {
  units: IUnits;
  children: React.ReactNode;
  fetchedRecipe?: RecipeAttributes;
  editRecipe?: boolean;
}) {
  const { user } = useAuth();

  useBeforeunload((event) => {
    if (!isEqual(recipe, initRecipe) || images.length > 0) {
      event.preventDefault();
    }
  });

  const initRecipe: RecipeForm = {
    title: fetchedRecipe?.title ?? "",
    author: user?.id,
    description: fetchedRecipe?.description ?? "",
    ingredients: fetchedRecipe?.ingredients ?? [{ ingredient: "", amount: "", unit: units.units[0].unit }],
    cookingTime: fetchedRecipe?.cookingTime ?? 0,
    process: fetchedRecipe?.process ?? [""],
    spiciness: fetchedRecipe?.spiciness ?? "1",
    publishedAt: null,
    numberOfServings: fetchedRecipe?.numberOfServings ?? "",
    categories: fetchedRecipe?.categories ?? [],
    origins: fetchedRecipe?.origins ?? [],
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

  const handleUpdateRecipe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Update recipe!");
  };

  return (
    <>
      {isBeingSent && <SentConfirmation sent={sent} />}
      <Column alignItems="center" justifyContent="center" maxW="800px" w="100%">
        <StyledForm onSubmit={(e) => (editRecipe ? handleUpdateRecipe(e) : handleCreateRecipe(e))}>
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
                <List listItems={[]} title="Úroveň pálivosti" onClick={(e) => handleSetRecipe("spiciness", e)} value={recipe.spiciness} pepperList />
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
                      unitList={units.units.map((obj) => `${obj.unit}`)}
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
          {children}
        </StyledForm>
      </Column>
    </>
  );
}

export default RecipeFormComponent;
