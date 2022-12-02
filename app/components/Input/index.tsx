import React from "react";
import { InputStyled, InputWrapper } from "./styled";

function Input(props: InputProps) {
  return (
    <InputWrapper maxW={props.maxW}>
      {props.icon}
      <InputStyled {...props} type="text" />
    </InputWrapper>
  );
}

export default Input;
