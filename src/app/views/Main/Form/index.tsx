import { Column, Text } from "@app/styled";
import BgTitle from "@components/BgTitle";
import Button from "@components/Button";
import usePageBackground from "@hooks/usePageBackground";
import usePageTitle from "@hooks/usePageTitle";
import { PageContent } from "@layouts/Main/components/Page/styled";
import { IUnits } from "@shared/units";
import RecipeFormComponent from "./components/RecipeFormComponent";

function Form({ units }: { units: IUnits }) {
  usePageBackground(undefined);
  usePageTitle("Vytvoření receptu");

  return (
    <>
      <PageContent topP>
        <BgTitle title="Vytvoření" top="20px" mobileTop="10vh" left="-50vw" />
        <BgTitle title="Receptu" top="65vh" left="-10vw" mobileTop="30vh" mobileLeft="-5vw" />
        <Column p="100px 0px" alignItems="center">
          <Text fontWeight="700" fontSize="44px" p="0 0 20px 0" textAlign="center">
            Vytvoření receptu
          </Text>
          <Text textAlign="center" color="third">
            Máš recept, o který se chceš podělit s komunitou? Vyplň níže požadované informace a tvůj recept zveřejníme.
          </Text>
          <RecipeFormComponent units={units}>
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
          </RecipeFormComponent>
        </Column>
      </PageContent>
    </>
  );
}

export default Form;
