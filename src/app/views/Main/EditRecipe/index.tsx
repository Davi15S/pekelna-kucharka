import { Column, Text } from "@app/styled";
import BgTitle from "@components/BgTitle";
import Button from "@components/Button";
import { PageContent } from "@layouts/Main/components/Page/styled";
import { RecipeAttributes } from "@shared/recipe";
import { IUnits } from "@shared/units";
import React from "react";
import RecipeFormComponent from "../Form/components/RecipeFormComponent";

function EditRecipe({ recipe, units }: { recipe: RecipeAttributes; units: IUnits }) {
  return (
    <PageContent topP>
      <BgTitle title="Úprava" left="-50vw" top="-100px" />
      <BgTitle title="receptu" left="-25vw" top="100px" />
      <Column p="100px 0" w="100%" alignItems="center">
        <Text fontWeight="700" fontSize="44px" p="0 0 20px 0" textAlign="center">
          Úprava receptu
        </Text>
        <RecipeFormComponent units={units} fetchedRecipe={recipe} editRecipe>
          <Column w="100%" alignItems="center" p="30px 0 0 0">
            <BgTitle title="Děkujeme" top="-100px" left="-50vw" mobileTop="20px" />
            <Text fontWeight="700" fontSize="44px" textAlign="center">
              Nezapomněl jsi na něco?
            </Text>
            <Text color="third" p="20px 0" textAlign="center">
              Jestli jsi spokojený se svým receptem, neváhej ho odeslat. Tvůj recept bude po kontrole dostupná veřejnosti.
            </Text>
            <Button text="Potvrdit" maxW="220px" type="submit" />
          </Column>
        </RecipeFormComponent>
      </Column>
    </PageContent>
  );
}

export default EditRecipe;
