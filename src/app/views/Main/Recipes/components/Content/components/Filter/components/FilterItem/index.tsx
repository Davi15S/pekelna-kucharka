import { Column, Text } from "@app/styled";
import PepperRating from "@components/PepperRating";
import React from "react";
import FilterInput from "./components/FilterInput";

function FilterItem(props: { title: string; filterInputArr?: string[]; peppers?: number[] }) {
  return (
    <Column p="0 0 50px 0">
      <Text fontSize="20px" fontWeight="700" p="0 0 15px 0">
        {props.title}
      </Text>
      {props.filterInputArr
        ? props.filterInputArr.map((inputValue) => <FilterInput title={inputValue} key={inputValue} />)
        : props.peppers?.map((rating) => <FilterInput rating={rating} key={rating} />)}
    </Column>
  );
}

export default FilterItem;
