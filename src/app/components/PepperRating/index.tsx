import { Row } from "@app/styled";
import Pepper from "@components/Pepper";
import React from "react";

function PepperRating(props: {
  rating: number;
  h?: React.CSSProperties["width"];
  w?: React.CSSProperties["width"];
  arrayLenght?: number;
  p?: React.CSSProperties["padding"];
}) {
  return (
    <Row w="fit-content" p={props.p}>
      {[...Array(props.arrayLenght ?? 5)].map((x, i) => (
        <Pepper key={i} {...props} fill={props.rating >= i + 1 ? true : false} />
      ))}
    </Row>
  );
}

export default PepperRating;
