import React from "react";
import Input from "../Input";

function RegisterInputs() {
  return (
    <>
      <Input placeholder="Jméno" />
      <Input placeholder="Email" />
      <Input placeholder="Heslo" />
      <Input placeholder="Potvrďte heslo" />
    </>
  );
}

export default RegisterInputs;
