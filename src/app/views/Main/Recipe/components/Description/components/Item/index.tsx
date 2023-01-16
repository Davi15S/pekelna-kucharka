import { Row, Text } from "@app/styled";
import React from "react";
import { ItemWrapper } from "./styled";

function Item(props: { title: string; icon: React.ReactNode; desc?: string }) {
  return (
    <ItemWrapper justifyContent="space-between" flexWrap="wrap" p="0 0 10px 0">
      <Text fontSize="16px" fontWeight="600" p="0 10px 10px 0">
        {props.title}
      </Text>
      <Row w="max-content">
        <Text color="error" p="0 0 10px 0">
          {props.icon}
        </Text>
        {props.desc && (
          <Text fontWeight="500" fontSize="16px" color="third" p="0 0 10px 8px">
            {props.desc}
          </Text>
        )}
      </Row>
    </ItemWrapper>
  );
}

export default Item;
