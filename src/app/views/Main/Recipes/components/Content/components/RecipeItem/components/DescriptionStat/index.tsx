import { Row, Text } from "@app/styled";
import React from "react";

function DescriptionStat(props: { icon?: React.ReactNode; text?: string }) {
  return (
    <Row p="0 20px 10px 0" w="max-content" alignItems="center">
      {props.icon}
      <Text fontSize="14px" fontWeight="600" color="third" p="0 0 0 8px">
        {props.text}
      </Text>
    </Row>
  );
}

export default DescriptionStat;
