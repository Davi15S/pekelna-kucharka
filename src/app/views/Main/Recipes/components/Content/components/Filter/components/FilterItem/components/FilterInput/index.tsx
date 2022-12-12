import { Row, Text } from "@app/styled";
import React, { useState } from "react";
import { CheckBox } from "./styled";
import { BiCheck } from "react-icons/bi";
import PepperRating from "@components/PepperRating";

function FilterInput(props: { title?: string; rating?: number }) {
  const [checked, setChecked] = useState(false);

  return (
    <Row alignItems="center" p="5px 0">
      <CheckBox whileTap={{ scale: 1.1 }} checked={checked} onClick={() => setChecked(!checked)}>
        {checked ? <BiCheck size={25} /> : null}
      </CheckBox>
      {props.rating ? (
        <Row p="0 0 0 15px">
          <PepperRating rating={props.rating} w="22px" />
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
