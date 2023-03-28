import { Column, Text } from "@app/styled";
import { RecipeForm } from "@shared/recipe";
import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { RemoveButton, TextArea as TextAreaStyled, TextAreaWrapper } from "./styled";

function TextArea(props: {
  index: number;
  handleClick?: () => void;
  setIngredient: <T>(key: keyof RecipeForm, index: number, value: T) => void;
  onlyone?: boolean;
  value: string;
}) {
  const [text, setText] = useState(props.value);

  useEffect(() => {
    props.setIngredient<string>("process", props.index, text);
  }, [text]);

  return (
    <Column w="100%" p="15px 0">
      <Text p="0 0 10px 0">Krok {props.index + 1}</Text>
      <TextAreaWrapper>
        <TextAreaStyled onChange={(e) => setText(e.currentTarget.value)} value={text} required />
        {!props.onlyone && (
          <RemoveButton onClick={props.handleClick}>
            <RxCross2 size={15} />
          </RemoveButton>
        )}
      </TextAreaWrapper>
    </Column>
  );
}

export default TextArea;
