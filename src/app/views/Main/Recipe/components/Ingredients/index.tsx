import { Row, Text } from "@app/styled";
import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { DescriptionWrapper } from "../Description/styled";

function Ingredients() {
  return (
    <DescriptionWrapper w="100%" m="50px 0 0 0">
      <Row alignItems="center" justifyContent="space-between">
        <Text fontSize="20px" fontWeight="600">
          Suroviny
        </Text>
        <Row w="max-content">
          <Text color="error">
            <AiOutlineMinus size={18} />
          </Text>
          <Text fontWeight="600" fontSize="15px" p="0 5px">
            2 porce
          </Text>
          <Text color="error">
            <AiOutlinePlus size={18} />
          </Text>
        </Row>
      </Row>
    </DescriptionWrapper>
  );
}

export default Ingredients;
