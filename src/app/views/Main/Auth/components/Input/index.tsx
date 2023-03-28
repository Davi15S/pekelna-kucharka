import React from "react";
import { IconWrapper, InputContent } from "./styled";
import { FaStarOfLife } from "react-icons/fa";

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <InputContent {...props} />
      <IconWrapper>
        <FaStarOfLife size={10} />
      </IconWrapper>
    </div>
  );
}

export default Input;
