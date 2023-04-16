import { Row, Text } from "@app/styled";
import React from "react";
import { CheckBox } from "./styled";
import { BiCheck } from "react-icons/bi";
import PepperRating from "@components/PepperRating";
import { IFilter } from "@app/utils/types";

function FilterInput(props: {
  title: string;
  rating?: number;
  handleClick: (key: keyof IFilter, value: string, checked: boolean) => void;
  query: keyof IFilter;
  checked: boolean;
}) {
  return (
    <Row alignItems="center" p="5px 0">
      <CheckBox
        whileTap={{ scale: 1.1 }}
        checked={props.checked}
        onClick={() => {
          props.handleClick(props.query, props.rating?.toString() ?? props.title, !props.checked);
        }}
      >
        {props.checked ? <BiCheck size={25} /> : null}
      </CheckBox>
      {props.rating ? (
        <Row p="0 0 0 15px">
          <PepperRating rating={props.rating} w={23} />
        </Row>
      ) : (
        <Text color="third" fontSize="16px" p="0 0 0 15px">
          {props.title}
        </Text>
      )}
    </Row>
  );
}

export default FilterInput;
