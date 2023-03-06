import { craeteUser } from "@api/user";
import { Row, StyledLink, Text } from "@app/styled";
import Button from "@components/Button";
import React, { useState } from "react";
import Input from "../Input";

function RegisterInputs() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password == passwordConfirm) {
      const res = await craeteUser(email, username, password);
      console.log(res);
    } else {
      console.log("Wrong passwords!");
    }
  };

  return (
    <>
      <form onSubmit={(e) => handleRegister(e)}>
        <Input placeholder="Jméno" onChange={(e) => setUsername(e.currentTarget.value)} />
        <Input placeholder="Email" onChange={(e) => setEmail(e.currentTarget.value)} />
        <Input placeholder="Heslo" onChange={(e) => setPassword(e.currentTarget.value)} type="password" />
        <Input placeholder="Potvrďte heslo" onChange={(e) => setPasswordConfirm(e.currentTarget.value)} type="password" />
        <Button m="40px 0" text="Registrovat se" h="50px" type="submit" />
      </form>
      <Row justifyContent="center" p="20px 0 0 0">
        <Text p="0 5px 0 0" fontSize="13px">
          Máte již účet?
        </Text>
        <StyledLink href="/login" color="red" underline underlineW="1px" fontSize="13px">
          Přihlásit se
        </StyledLink>
      </Row>
    </>
  );
}

export default RegisterInputs;
