import { Row, Text } from "@app/styled";
import React from "react";

function Item(props: { amount: string; unit: string; ingredient: string }) {
  return (
    <Row p="0 0 10px 0">
      <Text color="error" fontWeight="600">
        {props.amount} {props.unit}
      </Text>
      <Text p="0 0 0 10px" color="secondary" fontWeight="600">
        {props.ingredient}
      </Text>
    </Row>
  );
}

export default Item;
