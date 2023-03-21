import { Column, Row, Text } from "@app/styled";
import Button from "@components/Button";
import useOutsideComponentClick from "@hooks/useOutsideComponentClick";
import { RecipeForm } from "@shared/recipe";
import Input from "@views/Main/Auth/components/Input";
import React, { useState, useRef } from "react";
import Results from "./components/Result";
import { InputWrapper } from "./styled";

function Category({ onClick, categories }: { onClick: <T>(key: keyof RecipeForm, index: number, value: T) => void; categories?: string[] }) {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null);
  useOutsideComponentClick(ref, () => setIsActive(false));

  return (
    <Column w="100%" p="30px 0">
      <Text fontSize="16px" fontWeight="400">
        Kategorie
      </Text>
      <Row>
        {categories?.map((value, i) => (
          <Button key={i} text={value} color="red" maxW="max-content" m="5px" />
        ))}
      </Row>
      <InputWrapper w="100%" ref={ref}>
        <Input placeholder="Napiš, co hledáš..." onFocus={() => setIsActive(!isActive)} />
        {isActive && <Results onClick={onClick} selectedCategories={categories} />}
      </InputWrapper>
    </Column>
  );
}

export default Category;
