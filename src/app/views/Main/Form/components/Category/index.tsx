import { Column, Row, Text } from "@app/styled";
import Button from "@components/Button";
import useOutsideComponentClick from "@hooks/useOutsideComponentClick";
import Input from "@views/Main/Auth/components/Input";
import React, { useState, useRef, useEffect } from "react";
import Results from "./components/Result";
import { InputWrapper } from "./styled";
import { RxCrossCircled } from "react-icons/rx";
import { RecipeForm } from "@shared/recipe";
import { getCategories } from "@api/categories";
import { Categories } from "@shared/categories";
import useDebounce from "@hooks/useDebounce";

function Category({ onChange, selectedCategories }: { onChange: (arr: string[], key: keyof RecipeForm) => void; selectedCategories: string[] }) {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null);
  useOutsideComponentClick(ref, () => setIsActive(false));
  const [categories, setCategories] = useState<string[]>(selectedCategories);
  const [fetchedCategories, setFetchedCategories] = useState<Categories>();
  const [search, setSearch] = useState<string>();
  const [searchedItems, setSearchedItems] = useState<Categories>();

  const debouncedValue = useDebounce(search);

  useEffect(() => {
    const categoriesArr: string[] = [];
    const originsArr: string[] = [];
    categories.forEach((value) => {
      if (fetchedCategories?.categories.some((category) => category.category == value)) {
        categoriesArr.push(value);
      } else if (fetchedCategories?.originOfMeals.some((origin) => origin.category == value)) {
        originsArr.push(value);
      }
    });

    onChange(categoriesArr, "categories");
    onChange(originsArr, "origins");
  }, [categories]);

  useEffect(() => {
    (async () => {
      await getCategories().then((data) => setFetchedCategories(data.data.attributes));
    })();
  }, []);

  useEffect(() => {
    if (search) {
      const results: Categories = {
        categories: fetchedCategories?.categories.filter((value) => value.category.toLowerCase().indexOf(search.toLowerCase()) !== -1) ?? [],
        originOfMeals: fetchedCategories?.originOfMeals.filter((value) => value.category.toLowerCase().indexOf(search.toLowerCase()) !== -1) ?? [],
      };
      setSearchedItems(results);
    }
  }, [debouncedValue]);

  return (
    <Column w="100%" p="50px 0">
      <Text fontSize="16px" fontWeight="400">
        Kategorie
      </Text>
      <Row p="10px 0 0 0" flexWrap="wrap">
        {categories.map((value, i) => (
          <Button
            text={value}
            key={i}
            m="5px"
            color="red"
            maxW="max-content"
            type="button"
            p="5px 10px 5px 15px"
            icon={
              <Row p="0 0 0 10px">
                <RxCrossCircled size={20} />
              </Row>
            }
            iconEnd
            onClick={() => setCategories((prevState) => prevState.filter((_value) => _value != value))}
          />
        ))}
      </Row>
      <InputWrapper w="100%" ref={ref}>
        <Input
          placeholder="Napiš, co hledáš..."
          onFocus={() => setIsActive(!isActive)}
          onChange={(e) => {
            if (e.currentTarget.value == "") {
              setSearchedItems(undefined);
            }
            setSearch(e.currentTarget.value);
          }}
        />
        {isActive && (
          <Results
            onClick={(value) => setCategories((prevState) => [...prevState, value])}
            selectedCategories={selectedCategories}
            categories={searchedItems ?? fetchedCategories}
          />
        )}
      </InputWrapper>
    </Column>
  );
}

export default Category;
