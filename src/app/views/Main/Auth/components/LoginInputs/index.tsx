import { Row, Text } from "@app/styled";
import React from "react";
import Input from "../Input";

function LoginInputs() {
  return (
    <>
      <Input placeholder="Email" />
      <Input placeholder="Heslo" />
      <Row justifyContent="flex-end" p="15px 0 0 0">
        <Text fontSize="13px">Zapomněli jste heslo?</Text>
      </Row>
    </>
  );
}

export default LoginInputs;
