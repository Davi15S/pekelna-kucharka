import { Row } from "@app/styled";
import React from "react";
import { InputsWrapper } from "../../styled";
import Input from "../Input";
import List from "../List";
import { IngredientItemWrapper, Number, RemoveButton } from "./styled";
import { RxCross2 } from "react-icons/rx";

function IngredientItem(props: { category: string[]; handleClick: () => void; onlyOne?: boolean }) {
  return (
    <IngredientItemWrapper gap="20px" p="20px" m="10px 0">
      <InputsWrapper minW={250}>
        <Row gap="20px">
          <Input title="Název" />
        </Row>
        <Row gap="20px">
          <Input title="Množství" maxW="150px" />
          <List listItems={props.category} title="Jednotky" />
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
