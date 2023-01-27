import { Column, Row, Text } from "@app/styled";
import Button from "@components/Button";
import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { DescriptionWrapper } from "../Description/styled";
import Item from "./components/Item";

function Ingredients() {
  return (
    <DescriptionWrapper w="100%" m="50px 0 0 0">
      <Row alignItems="center" justifyContent="space-between" p="0 0 20px 0" flexWrap="wrap">
        <Text fontSize="20px" fontWeight="600" p="0 10px 10px 0">
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
      <Column w="100%">
        <Item amount="100" unit="g" ingredient="suroviny" />
        <Item amount="2" unit="lžíce" ingredient="suroviny" />
        <Item amount="3" unit="hrnky" ingredient="suroviny" />
        <Item amount="100" unit="g" ingredient="suroviny" />
        <Item amount="100" unit="g" ingredient="suroviny" />
        <Item amount="100" unit="g" ingredient="suroviny" />
        <Item amount="2" unit="lžíce" ingredient="suroviny" />
        <Item amount="3" unit="hrnky" ingredient="suroviny" />
        <Item amount="100" unit="g" ingredient="suroviny" />
        <Item amount="100" unit="g" ingredient="suroviny" />
        <Item amount="100" unit="g" ingredient="suroviny" />
        <Item amount="2" unit="lžíce" ingredient="suroviny" />
        <Item amount="3" unit="hrnky" ingredient="suroviny" />
        <Item amount="100" unit="g" ingredient="suroviny" />
        <Item amount="100" unit="g" ingredient="suroviny" />
      </Column>
    </DescriptionWrapper>
  );
}

export default Ingredients;
