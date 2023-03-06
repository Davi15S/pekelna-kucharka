import { Row, StyledLink, Text } from "@app/styled";
import Button from "@components/Button";
import React from "react";
import Input from "../Input";
import { Seperator } from "./styled";

function LoginInputs() {
  return (
    <>
      <Seperator justifyContent="center" alignItems="center">
        <Text fontSize="13px">nebo</Text>
      </Seperator>
      <Input placeholder="Email" />
      <Input placeholder="Heslo" />
      <Row justifyContent="flex-end" p="15px 0 0 0">
        <StyledLink href="/forgot" fontSize="13px" underline underlineW="1px">
          Zapomněli jste heslo?
        </StyledLink>
      </Row>
      <Button m="40px 0" text="Přihlásit se" h="50px" />
      <Row justifyContent="center" p="20px 0 0 0">
        <Text p="0 5px 0 0" fontSize="13px">
          Nemáte ještě účet?
        </Text>
        <StyledLink href="/register" color="red" underline underlineW="1px" fontSize="13px">
          Zaregistrujte se
        </StyledLink>
      </Row>
    </>
  );
}

export default LoginInputs;
