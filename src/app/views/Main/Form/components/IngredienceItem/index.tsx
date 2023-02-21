import { Row } from "@app/styled";
import React from "react";
import { InputsWrapper } from "../../styled";
import Input from "../Input";
import List from "../List";
import { IngredientItemWrapper, Number } from "./styled";
import { RxCross2 } from "react-icons/rx";

function IngredientItem(props: { category: string[]; index: number; handleClick: () => void }) {
  return (
    <IngredientItemWrapper gap="20px" p="20px" m="10px 0">
      <Number>{props.index}</Number>
      <InputsWrapper minW={250}>
        <Row gap="20px">
          <Input title="Název" />
        </Row>
        <Row gap="20px">
          <Input title="Množství" maxW="150px" />
          <List listItems={props.category} title="Jednotky" />
          <Number offsetTop="45px" onClick={props.handleClick}>
            <RxCross2 size={20} />
          </Number>
        </Row>
      </InputsWrapper>
    </IngredientItemWrapper>
  );
}

export default IngredientItem;
