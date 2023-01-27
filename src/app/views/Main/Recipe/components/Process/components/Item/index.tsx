import { Row, Text } from "@app/styled";
import React from "react";
import { Number } from "./styled";

function Item(props: { index: number; text: string }) {
  return (
    <Row m="15px 0">
      <Number>{props.index}</Number>
      <Text color="third" fontWeight="600" p="0 0 0 20px">
        {props.text}
      </Text>
    </Row>
  );
}

export default Item;
