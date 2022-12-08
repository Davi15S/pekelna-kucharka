import { PageContent } from "@layouts/Main/components/Page/styled";
import { FooterText } from "@layouts/Main/components/Footer/styled";
import React, { useEffect, useState } from "react";
import { MainTitle } from "../Landing/components/Hero/styled";
import Button from "../../../components/Button";
import { LoginWrapper } from "./styled";
import { FcGoogle } from "react-icons/fc";
import usePageTitle from "@hooks/usePageTitle";
import usePageBackground from "@hooks/usePageBackground";
import Input from "./components/Input";
import { Column, Row, Text } from "@app/styled";
import LoginInputs from "./components/LoginInputs";

function Auth(props: { pathName: string }) {
  const loginPath = "/login";
  const [isLogin, setIsLogin] = useState(false);
  usePageTitle(`Pekelná kuchařka | ${isLogin ? "Přihlášení" : "Registrace"}`);
  usePageBackground(undefined);

  useEffect(() => {
    setIsLogin(props.pathName == loginPath ? true : false);
  }, []);

  return (
    <PageContent>
      <LoginWrapper alignItems="center" justifyContent="center" h="100vh">
        <MainTitle fontSize="40px">{isLogin ? "Přihlášení" : "Registrace"}</MainTitle>
        <FooterText>Scelerisque elit hendrerit turpis lectus neque ipsum, egestas nunc elementum.</FooterText>
        <Button transparent text="Přihlásit se s Googlem" icon={<FcGoogle style={{ marginRight: "10px" }} size={25} />} h="50px" />
        <Column h="auto" w="100%">
          {isLogin ? <LoginInputs /> : <></>}
        </Column>
        <Button m="40px 20px 20px" text="Přihlásit se" h="50px" />
        <Row justifyContent="center" p="20px 0 0 0">
          <Text fontSize="13px">Nemáte ještě účet? Zaregistujte se!</Text>
        </Row>
      </LoginWrapper>
    </PageContent>
  );
}

export default Auth;
