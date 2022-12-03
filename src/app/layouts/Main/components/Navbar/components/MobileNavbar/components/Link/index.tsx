import React from "react";
import { LinkWrapper } from "./styled";

function LinkComponent(props: { text: string; link: string; last?: boolean; handleClick: () => void }) {
  return (
    <LinkWrapper onClick={props.handleClick} href={props.link} {...props}>
      {props.text}
    </LinkWrapper>
  );
}

export default LinkComponent;
