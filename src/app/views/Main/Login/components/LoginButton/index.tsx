import React from "react";
import { ButtonContent, ButtonWrapper } from "./styled";

function LoginButton(props: { text: string; transparent?: boolean; icon?: React.ReactNode }) {
  return (
    <ButtonWrapper transparent={props.transparent}>
      <ButtonContent>
        {props.icon}
        {props.text}
      </ButtonContent>
    </ButtonWrapper>
  );
}

export default LoginButton;
