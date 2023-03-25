import { Row, Text } from "@app/styled";
import { PageContent } from "@layouts/Main/components/Page/styled";
import React from "react";
import { ColumnContent, PageWrapper } from "./styled";
import Gallery from "./components/Gallery";
import usePageBackground from "@hooks/usePageBackground";
import Description from "./components/Description";
import Ingredients from "./components/Ingredients";
import Button from "@components/Button";
import Process from "./components/Process";
import Comments from "./components/Comments";
import { RecipeAttributes } from "@shared/recipe";
import usePageTitle from "@hooks/usePageTitle";

function Recipe({ recipe }: { recipe: RecipeAttributes }) {
  usePageBackground(undefined);
  usePageTitle(recipe.title);

  return (
    <PageContent topP w="100%">
      {recipe && (
        <PageWrapper p="50px 0" justifyContent="space-between" flexWrap="wrap">
          <ColumnContent w="65%">
            <Text fontWeight="700" fontSize="44px" p="0 0 50px 0">
              {recipe.title}
            </Text>
            <Gallery images={recipe.images} />
            <Process mobile={false} process={recipe.process} />
          </ColumnContent>
          <ColumnContent w="30%" left>
            <Description recipe={recipe} />
            <Ingredients recipe={recipe} />
            <Row flexWrap="wrap" justifyContent="space-evenly" p="20px 0">
              {recipe.categories.concat(recipe.origins).map((value, i) => (
                <Button key={i} text={value} color="red" transparent borderRadius="25px" m="5px 1px 5px 1px" maxW="max-content" />
              ))}
            </Row>
          </ColumnContent>
          <ColumnContent w="100%">
            <Process mobile={true} process={recipe.process} />
            <Comments comments={recipe.comments?.data} />
          </ColumnContent>
        </PageWrapper>
      )}
    </PageContent>
  );
}

export default Recipe;
