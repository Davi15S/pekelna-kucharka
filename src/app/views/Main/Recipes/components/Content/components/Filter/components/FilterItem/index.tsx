import { Column, Text } from "@app/styled";
import { IFilter } from "@app/utils/types";
import React from "react";
import FilterInput from "./components/FilterInput";

function FilterItem(props: {
  title: string;
  filterInputArr?: { category: string }[];
  peppers?: number[];
  query: keyof IFilter;
  onClick: (key: keyof IFilter, value: string, checked: boolean) => void;
  value: string[];
}) {
  return (
    <Column p="0 80px 50px 0">
      <Text fontSize="20px" fontWeight="700" p="0 0 15px 0">
        {props.title}
      </Text>
      {props.filterInputArr
        ? props.filterInputArr.map((inputValue, i) => (
            <FilterInput
              title={inputValue.category}
              key={i}
              handleClick={props.onClick}
              query={props.query}
              checked={props.value.includes(inputValue.category)}
            />
          ))
        : props.peppers?.map((rating) => (
            <FilterInput
              title=""
              rating={rating}
              key={rating}
              handleClick={props.onClick}
              query={props.query}
              checked={props.value.includes(rating.toString())}
            />
          ))}
    </Column>
  );
}

export default FilterItem;
