import React from "react";
import pepper from "@assets/peppers/pepper.svg";
import pepperFill from "@assets/peppers/pepper-fill.svg";
import { Image } from "@app/styled";

function Pepper(props: { fill?: boolean; w?: number; h?: number }) {
  return <Image src={props.fill ? pepperFill : pepper} alt="" width={props.w ? +props.w : undefined} height={props.h ? +props.h : undefined} />;
}

export default Pepper;
