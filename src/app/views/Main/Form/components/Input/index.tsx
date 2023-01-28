import { Column, Text } from "@app/styled";
import { InputStyled } from "@components/Input/styled";
import React from "react";
import { InputWrapper } from "./styled";

function Input(props: RecipeInputProps) {
  return (
    <Column w="100%" {...props}>
      {props.title && <Text p="0 0 8px 0">{props.title}</Text>}
      <InputWrapper maxH={props.maxH} alignItems="center" p="0 10px">
        <InputStyled isForm {...props} type={props.type ?? "text"} />
      </InputWrapper>
    </Column>
  );
}

export default Input;
