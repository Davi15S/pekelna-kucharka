import React from "react";
import { BgTitleWrapper, Subtitle, Title } from "./styled";

function BgTitle(props: { title: string; subTitle?: string }) {
  return (
    <BgTitleWrapper>
      <Title>{props.title}</Title>
      <Subtitle>{props.subTitle}</Subtitle>
    </BgTitleWrapper>
  );
}

export default BgTitle;
