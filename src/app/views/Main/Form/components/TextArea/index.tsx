import { Column, Text } from "@app/styled";
import React from "react";
import { RxCross2 } from "react-icons/rx";
import { RemoveButton, TextArea as TextAreaStyled, TextAreaWrapper } from "./styled";

function TextArea(props: { i: number; handleClick?: () => void }) {
  return (
    <Column w="100%" p="15px 0">
      <Text p="0 0 10px 0">Krok {props.i}</Text>
      <TextAreaWrapper>
        <TextAreaStyled />
        <RemoveButton onClick={props.handleClick}>
          <RxCross2 size={15} />
        </RemoveButton>
      </TextAreaWrapper>
    </Column>
  );
}

export default TextArea;
