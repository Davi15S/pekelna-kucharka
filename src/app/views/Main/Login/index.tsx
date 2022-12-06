import { PageContent } from "@components/Page/styled";
import { FooterText } from "@layouts/Main/components/Footer/styled";
import React from "react";
import { MainTitle } from "../Landing/components/Hero/styled";
import LoginButton from "./components/LoginButton";
import { LoginWrapper } from "./styled";
import { FcGoogle } from "react-icons/fc";

function Login() {
  return (
    <PageContent>
      <LoginWrapper alignItems="center" justifyContent="center" h="100vh">
        <MainTitle fontSize="40px">Přihlášení</MainTitle>
        <FooterText>Scelerisque elit hendrerit turpis lectus neque ipsum, egestas nunc elementum.</FooterText>
        <LoginButton text="Přihlásit se s Googlem" icon={<FcGoogle style={{ marginRight: "10px" }} size={25} />} />
      </LoginWrapper>
    </PageContent>
  );
}

export default Login;
