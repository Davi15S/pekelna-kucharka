import React from "react";
import { LinkWrapper } from "./styled";

function LinkComponent(props: { text: string; link: string }) {
  return <LinkWrapper href={props.link}>{props.text}</LinkWrapper>;
}

export default LinkComponent;
