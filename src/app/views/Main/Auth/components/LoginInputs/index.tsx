import { Row, StyledLink } from "@app/styled";
import React from "react";
import Input from "../Input";

function LoginInputs() {
  return (
    <>
      <Input placeholder="Email" />
      <Input placeholder="Heslo" />
      <Row justifyContent="flex-end" p="15px 0 0 0">
        <StyledLink href="/forgot" fontSize="13px" underline underlineW="1px">
          Zapomněli jste heslo?
        </StyledLink>
      </Row>
    </>
  );
}

export default LoginInputs;
