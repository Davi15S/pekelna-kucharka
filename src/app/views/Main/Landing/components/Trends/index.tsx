import { Column } from "@app/styled";
import BgTitle from "@components/BgTitle";
import React from "react";
import TrendItem from "./components/TrendItem";
import { ButtonWrapper, ItemsWrapper, SubTitle } from "./styled";
import Button from "@components/Button";
import { useRouter } from "next/router";
import { Recipe } from "@shared/recipe";
import { getImage } from "@app/utils";

function Trends({ recipes }: { recipes: Recipe[] }) {
  const { push } = useRouter();

  return (
    <Column w="100%" p="200px 0 150px 0">
      <BgTitle title="Trendy" subTitle="Trendy" />
      <Column alignItems="center" w="100%" p="80px 0 0 0">
        <SubTitle textAlign="center">
          Phasellus vitae purus vel lorem ac est, viverra cursus. At aliquam, arcu rutrum suspendisse molestie turpis egestas. Lectus dolor nam gravida quis
          enim sem ac. Lectus facilisi diam sapien, semper nunc.
        </SubTitle>
        <ItemsWrapper>
          {recipes.map((recipe) => (
            <TrendItem
              key={recipe.id}
              image={getImage(recipe.attributes.images.data[0].attributes.url)}
              title={recipe.attributes.title}
              subTitle={recipe.attributes.description}
              comments={recipe.attributes.comments.data.length}
              id={recipe.id}
              spiceness={+recipe.attributes.spiciness}
            />
          ))}
        </ItemsWrapper>
        <ButtonWrapper p="40px 0 0 0" justifyContent="center">
          <Button onClick={() => push("/recipes")} text="Zobrazit další" color="red" maxW="220px" h="45px" />
        </ButtonWrapper>
      </Column>
    </Column>
  );
}

export default Trends;
