import { Row } from "@app/styled";
import React, { useState, useEffect } from "react";
import { InputsWrapper } from "../../styled";
import Input from "../Input";
import List from "../List";
import { IngredientItemWrapper, Number, RemoveButton } from "./styled";
import { RxCross2 } from "react-icons/rx";
import { RecipeForm } from "@shared/recipe";
import { Ingredient } from "@shared/ingredient";

function IngredientItem(props: {
  handleClick?: () => void;
  onlyOne?: boolean;
  setIngredient: <T>(key: keyof RecipeForm, index: number, value: T) => void;
  index: number;
  ingredient: Ingredient;
  unitList: string[];
}) {
  const [ingredient, setTitle] = useState<string>("");
  const [amount, setAmount] = useState("");
  const [unit, setUnit] = useState(props.unitList[0]);

  useEffect(() => {
    props.setIngredient<Ingredient>("ingredients", props.index, { ingredient, amount, unit });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ingredient, amount, unit]);

  return (
    <IngredientItemWrapper gap="20px" p="20px" m="10px 0">
      <InputsWrapper minW={250}>
        <Row gap="20px">
          <Input title="Název" onChange={(e) => setTitle(e.currentTarget.value)} value={ingredient} required />
        </Row>
        <Row gap="20px">
          <Input title="Množství" maxW="150px" onChange={(e) => setAmount(e.currentTarget.value)} value={amount} required />
          <List listItems={props.unitList} title="Jednotky" onClick={(e) => setUnit(e)} value={unit} />
        </Row>
      </InputsWrapper>
      {!props.onlyOne && (
        <RemoveButton>
          <Number onClick={props.handleClick} pointer>
            <RxCross2 size={15} />
          </Number>
        </RemoveButton>
      )}
    </IngredientItemWrapper>
  );
}

export default IngredientItem;
