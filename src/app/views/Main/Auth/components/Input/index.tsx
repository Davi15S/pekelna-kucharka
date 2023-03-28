import React from "react";
import { IconWrapper, InputContent } from "./styled";
import { TbNorthStar } from "react-icons/tb";

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <InputContent {...props}>
      {/* {props.required && (
        <IconWrapper>
          <TbNorthStar size={10} />
        </IconWrapper>
      )} */}
    </InputContent>
  );
}

export default Input;
