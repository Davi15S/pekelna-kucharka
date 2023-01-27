import { Column, Row } from "@app/styled";
import BgTitle from "@components/BgTitle";
import Button from "@components/Button";
import React from "react";
import Item from "./components/Item";

function Comments() {
  return (
    <Column m="100px 0" w="100%">
      <BgTitle title="Komentáře" subTitle="Komentáře" />
      <Row flexWrap="wrap" justifyContent="space-around">
        <Item />
        <Item />
        <Item />
        <Item />
      </Row>
      <Row justifyContent="center" m="40px 0">
        <Button text="Zobrazit více" maxW="200px" color="red" />
      </Row>
    </Column>
  );
}

export default Comments;
