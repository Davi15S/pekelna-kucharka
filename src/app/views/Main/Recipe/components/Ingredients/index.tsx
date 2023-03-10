import { Column, Row, Text } from "@app/styled";
import { RecipeAttributes } from "@shared/recipe";
import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { DescriptionWrapper } from "../Description/styled";
import Item from "./components/Item";

function Ingredients(props: { recipe: RecipeAttributes }) {
  return (
    <DescriptionWrapper w="100%" m="50px 0 0 0">
      <Row alignItems="center" justifyContent="space-between" p="0 0 20px 0" flexWrap="wrap">
        <Text fontSize="20px" fontWeight="600" p="0 10px 10px 0">
          Suroviny
        </Text>
        <Row w="max-content">
          <Text color="error">
            <AiOutlineMinus size={18} />
          </Text>
          <Text fontWeight="600" fontSize="15px" p="0 5px">
            {props.recipe.numberOfServings} porce
          </Text>
          <Text color="error">
            <AiOutlinePlus size={18} />
          </Text>
        </Row>
      </Row>
      <Column w="100%">
        {props.recipe.ingredients.map((ingredient, i) => (
          <Item amount={ingredient.amount} unit={ingredient.unit} ingredient={ingredient.ingredient} key={i} />
        ))}
      </Column>
    </DescriptionWrapper>
  );
}

export default Ingredients;
