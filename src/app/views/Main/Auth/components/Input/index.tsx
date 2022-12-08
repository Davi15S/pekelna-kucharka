import React from "react";
import { InputContent } from "./styled";

function Input(props: { placeholder: string }) {
  return <InputContent placeholder={props.placeholder} />;
}

export default Input;
