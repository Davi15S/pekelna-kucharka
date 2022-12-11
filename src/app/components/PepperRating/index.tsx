import Pepper from "@components/Pepper";
import React from "react";

function PepperRating(props: { rating: number; h?: React.CSSProperties["width"]; w?: React.CSSProperties["width"]; arrayLenght?: number }) {
  return (
    <>
      {[...Array(props.arrayLenght ?? 5)].map((x, i) => (
        <Pepper key={i} {...props} fill={props.rating >= i + 1 ? true : false} />
      ))}
    </>
  );
}

export default PepperRating;
