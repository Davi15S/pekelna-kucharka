import { Row, Text } from "@app/styled";
import PepperRating from "@components/PepperRating";
import React from "react";

function DescriptionStat(props: { icon?: React.ReactNode; text?: string; peppers?: boolean }) {
  return (
    <Row p="0 20px 10px 0" w="max-content" alignItems="center">
      {props.icon ? (
        props.icon
      ) : (
        <>
          <PepperRating rating={3} w="22px" h="22px" />
        </>
      )}
      {props.peppers ? (
        ""
      ) : (
        <Text fontSize="14px" fontWeight="600" color="third" p="0 0 0 8px">
          {props.text}
        </Text>
      )}
    </Row>
  );
}

export default DescriptionStat;
