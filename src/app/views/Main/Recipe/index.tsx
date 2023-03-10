import { Row, Text } from "@app/styled";
import { PageContent } from "@layouts/Main/components/Page/styled";
import React, { useEffect, useState } from "react";
import { ColumnContent, PageWrapper } from "./styled";
import Gallery from "./components/Gallery";
import usePageBackground from "@hooks/usePageBackground";
import Description from "./components/Description";
import Ingredients from "./components/Ingredients";
import Button from "@components/Button";
import Process from "./components/Process";
import Comments from "./components/Comments";
import { getRecipe } from "@api/recipes";
import { RecipeAttributes } from "@shared/recipe";

function Recipe(props: { id: string }) {
  usePageBackground(undefined);
  const [recipe, setRecipe] = useState<RecipeAttributes>();

  useEffect(() => {
    const fetchData = async () => {
      await getRecipe(props.id).then((data) => setRecipe(data.data.attributes));
    };

    fetchData();
  }, []);

  return (
    <PageContent topP w="100%">
      {recipe && (
        <PageWrapper p="50px 0" justifyContent="space-between" flexWrap="wrap">
          <ColumnContent w="65%">
            <Text fontWeight="700" fontSize="44px" p="0 0 50px 0">
              {recipe.title}
            </Text>
            <Gallery />
            <Process mobile={false} process={recipe.process} />
          </ColumnContent>
          <ColumnContent w="30%" left>
            <Description recipe={recipe} />
            <Ingredients recipe={recipe} />
            <Row flexWrap="wrap" justifyContent="space-evenly" p="20px 0">
              <Button text={recipe.category} color="red" transparent borderRadius="25px" m="5px 1px 5px 1px" maxW="max-content" />
            </Row>
          </ColumnContent>
          <ColumnContent w="100">
            <Process mobile={true} process={recipe.process} />
            <Comments />
          </ColumnContent>
        </PageWrapper>
      )}
    </PageContent>
  );
}

export default Recipe;
