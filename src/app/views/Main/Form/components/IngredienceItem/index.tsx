import { Row } from "@app/styled";
import React from "react";
import { InputsWrapper } from "../../styled";
import Input from "../Input";
import List from "../List";
import { IngredientItemWrapper, Number } from "./styled";
import { RxCross2 } from "react-icons/rx";

function IngredientItem(props: { category: string[] }) {
  return (
    <IngredientItemWrapper gap="20px" p="20px">
      <Number>1</Number>
      <InputsWrapper minW={250}>
        <Row gap="20px">
          <Input title="Název" />
        </Row>
        <Row gap="20px">
          <Input title="Množství" maxW="150px" />
          <List listItems={props.category} title="Jednotky" />
          <Number offsetTop="45px">
            <RxCross2 size={20} />
          </Number>
        </Row>
      </InputsWrapper>
    </IngredientItemWrapper>
  );
}

export default IngredientItem;
