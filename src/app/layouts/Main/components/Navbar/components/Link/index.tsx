import React, { useState } from "react";
import { LinkWrapper } from "./styled";

function LinkComponent(props: {
  text: string;
  link: string;
  hover?: boolean;
  hoverItem?: React.ReactNode;
  m?: React.CSSProperties["margin"];
  color?: "red";
  onClick?: () => void;
}) {
  const [isActiveHover, setIsActiveHover] = useState(false);

  return (
    <LinkWrapper
      onClick={props.onClick}
      color={props.color}
      m={props.m}
      href={props.link}
      onMouseEnter={() => {
        props.hover && setIsActiveHover(true);
      }}
      onMouseLeave={() => {
        props.hover && setIsActiveHover(false);
      }}
    >
      {props.text}
      {isActiveHover && props.hoverItem}
    </LinkWrapper>
  );
}

export default LinkComponent;
