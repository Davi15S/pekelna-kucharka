import { getUsersRecipes } from "@api/recipes";
import { Column, Text } from "@app/styled";
import BgTitle from "@components/BgTitle";
import Loading from "@components/Loading";
import { useAuth } from "@contexts/AuthContext";
import usePageBackground from "@hooks/usePageBackground";
import usePageTitle from "@hooks/usePageTitle";
import { PageContent } from "@layouts/Main/components/Page/styled";
import { UserRecipes } from "@shared/recipe";
import React, { useEffect, useState } from "react";
import RecipeItem from "./components/RecipeItem";

function MyRecipes() {
  const { user } = useAuth();
  const [recipes, setRecipes] = useState<UserRecipes[]>();

  usePageTitle("Moje recepty");
  usePageBackground(undefined);

  useEffect(() => {
    (async () => {
      if (user?.id) {
        await getUsersRecipes(user.id).then((data) => setRecipes(data.recipes));
      }
    })();
  }, []);

  return (
    <>
      <BgTitle title="Seznam" top="5vh" left="-50vw" />
      <BgTitle title="receptů" top="50vh" left="10vw" />
      <PageContent topP>
        <Column p="80px 0" alignItems="center">
          <Text fontWeight="700" fontSize="44px" textAlign="center">
            Seznam tvých receptů
          </Text>
          <Text color="third" p="30px 0" textAlign="center">
            Zde najdeš veškeré recepty, které se ti podařilo vytvořit.
          </Text>
          {recipes ? (
            <Column>
              {recipes.map((recipe, i) => (
                <RecipeItem key={i} recipe={recipe} />
              ))}
            </Column>
          ) : (
            <Loading p="30px 0" />
          )}
        </Column>
      </PageContent>
    </>
  );
}

export default MyRecipes;
