import { Text } from "@app/styled";
import React from "react";
import { ButtonContent, ButtonWrapper } from "./styled";
import { ButtonProps } from "./types";

function Button(props: ButtonProps) {
  return (
    <ButtonWrapper {...props}>
      <ButtonContent>
        {props.icon}
        <Text fontSize="16px" fontWeight="500">
          {props.text}
        </Text>
      </ButtonContent>
    </ButtonWrapper>
  );
}

export default Button;
