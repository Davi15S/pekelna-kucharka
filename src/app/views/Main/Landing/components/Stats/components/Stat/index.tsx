import { Column } from "@app/styled";
import React from "react";
import { SubTitle, Title } from "./styled";

function Stat(props: { title: string; subTitle: string }) {
  return (
    <Column alignItems="center" p="40px 90px">
      <Title>{props.title}</Title>
      <SubTitle>{props.subTitle}</SubTitle>
    </Column>
  );
}

export default Stat;
