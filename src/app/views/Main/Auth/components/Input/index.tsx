import React from "react";
import { InputContent } from "./styled";

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <InputContent {...props} />;
}

export default Input;
