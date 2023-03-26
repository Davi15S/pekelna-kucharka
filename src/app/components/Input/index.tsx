import React from "react";
import { InputStyled, InputWrapper } from "./styled";

function Input(props: InputProps) {
  return (
    <InputWrapper maxW={props.maxW} h={props.h}>
      {props.icon}
      <InputStyled {...props} type={props.type ?? "text"} />
    </InputWrapper>
  );
}

export default Input;
