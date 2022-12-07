import React from "react";
import pepper from "@assets/peppers/pepper.svg";
import pepperFill from "@assets/peppers/pepper-fill.svg";
import { ImageWrapper } from "@app/styled";

function Pepper(props: { fill?: boolean; w?: React.CSSProperties["width"]; h?: React.CSSProperties["height"] }) {
  return <ImageWrapper w={props.w} h={props.h} src={props.fill ? pepperFill : pepper} alt="" />;
}

export default Pepper;
