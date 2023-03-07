import { loginUser } from "@api/auth";
import { Row, StyledLink, Text } from "@app/styled";
import Button from "@components/Button";
import React, { useState } from "react";
import Input from "../Input";
import { Seperator } from "./styled";
import Cookie from "js-cookie";

function LoginInputs() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await loginUser(email, password).catch((e: Error) => console.log(e));
    if (res?.jwt) {
      Cookie.set("token", res.jwt);
      window.location.replace("/");
    }
  };

  return (
    <>
      <Seperator justifyContent="center" alignItems="center">
        <Text fontSize="13px">nebo</Text>
      </Seperator>
      <form style={{ width: "100%" }} onSubmit={(e) => handleLogin(e)}>
        <Input placeholder="Email" onChange={(e) => setEmail(e.currentTarget.value)} required type="email" />
        <Input placeholder="Heslo" onChange={(e) => setPassword(e.currentTarget.value)} required type="password" />
        <Row justifyContent="flex-end" p="15px 0 0 0">
          <StyledLink href="/forgot" fontSize="13px" underline underlineW="1px">
            Zapomněli jste heslo?
          </StyledLink>
        </Row>
        <Button m="40px 0" text="Přihlásit se" h="50px" type="submit" />
      </form>
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
