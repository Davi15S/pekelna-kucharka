import React from "react";
import { IconWrapper, InputContent } from "./styled";
import { FaStarOfLife } from "react-icons/fa";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: boolean;
}

function Input(props: IInput) {
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <InputContent {...props} />
      {props.required && props.icon && (
        <IconWrapper>
          <FaStarOfLife size={10} />
        </IconWrapper>
      )}
    </div>
  );
}

export default Input;
