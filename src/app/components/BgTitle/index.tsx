import React from "react";
import { BgTitleWrapper, Subtitle, Title } from "./styled";

function BgTitle(props: {
  title: string;
  subTitle?: string;
  top?: React.CSSProperties["top"];
  left?: React.CSSProperties["left"];
  mobileTop?: React.CSSProperties["top"];
  mobileLeft?: React.CSSProperties["left"];
}) {
  return (
    <BgTitleWrapper>
      <Title {...props}>{props.title}</Title>
      <Subtitle>{props.subTitle}</Subtitle>
    </BgTitleWrapper>
  );
}

export default BgTitle;
