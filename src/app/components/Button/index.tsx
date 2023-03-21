import { Text } from "@app/styled";
import React from "react";
import { ButtonContent, ButtonWrapper } from "./styled";
import { ButtonProps } from "./types";

function Button(props: ButtonProps) {
  return (
    <ButtonWrapper {...props}>
      <ButtonContent>
        {!props.iconEnd && props.icon}
        <Text fontSize="16px" fontWeight="500" wrap="nowrap">
          {props.text}
        </Text>
        {props.iconEnd && props.icon}
      </ButtonContent>
    </ButtonWrapper>
  );
}

export default Button;
