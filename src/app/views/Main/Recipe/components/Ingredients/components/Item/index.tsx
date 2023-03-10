import { Text } from "@app/styled";
import React from "react";
import { ItemWrapper } from "../../../Description/components/Item/styled";

function Item(props: { amount: string; unit: string; ingredient: string }) {
  return (
    <ItemWrapper p="0 0 10px 0">
      <Text color="error" fontWeight="600" p="0 10px 10px 0">
        {props.amount} {props.unit}
      </Text>
      <Text color="secondary" fontWeight="600">
        {props.ingredient}
      </Text>
    </ItemWrapper>
  );
}

export default Item;
