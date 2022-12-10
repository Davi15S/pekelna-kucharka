import { PageContent } from "@layouts/Main/components/Page/styled";
import { FooterText } from "@layouts/Main/components/Footer/styled";
import React, { useEffect, useState } from "react";
import { MainTitle } from "../Landing/components/Hero/styled";
import Button from "../../../components/Button";
import { LoginWrapper } from "./styled";
import { FcGoogle } from "react-icons/fc";
import usePageTitle from "@hooks/usePageTitle";
import usePageBackground from "@hooks/usePageBackground";
import { Column, Row, StyledLink, Text } from "@app/styled";
import LoginInputs from "./components/LoginInputs";
import RegisterInputs from "./components/RegisterInputs";
import BgTitle from "@components/BgTitle";

function Auth(props: { pathName: string }) {
  const loginPath = "/login";
  const [isLogin, setIsLogin] = useState(false);
  usePageTitle(`${isLogin ? "Přihlášení" : "Registrace"}`);
  usePageBackground(undefined);

  useEffect(() => {
    setIsLogin(props.pathName == loginPath ? true : false);
  }, []);

  return (
    <>
      <BgTitle title="Přihlásit se" top="0vh" mobileTop="10vh" />
      <BgTitle title="Registrace" top="65vh" left="35vw" mobileTop="80vh" mobileLeft="55vw" />
      <PageContent>
        <LoginWrapper alignItems="center" justifyContent="center" h="100vh">
          <MainTitle fontSize="40px">{isLogin ? "Přihlášení" : "Registrace"}</MainTitle>
          <Text p="10px 0" color="third" fontSize="15px" textAlign="center">
            Scelerisque elit hendrerit turpis lectus neque ipsum, egestas nunc elementum.
          </Text>
          {isLogin ? <Button transparent text="Přihlásit se s Googlem" icon={<FcGoogle style={{ marginRight: "10px" }} size={25} />} h="50px" /> : null}
          <Column h="auto" w="100%">
            {isLogin ? <LoginInputs /> : <RegisterInputs />}
          </Column>
          <Button m="40px 20px 20px" text={isLogin ? "Přihlásit se" : "Vytvořit účet"} h="50px" />
          <Row justifyContent="center" p="20px 0 0 0">
            <Text p="0 5px 0 0" fontSize="13px">
              {isLogin ? "Nemáte ještě účet?" : "Máte již účet?"}
            </Text>
            <StyledLink href={isLogin ? "/register" : "/login"} color="red" underline underlineW="1px" fontSize="13px">
              {isLogin ? "Zaregistrujte se" : "Přihlásit se"}
            </StyledLink>
          </Row>
        </LoginWrapper>
      </PageContent>
    </>
  );
}

export default Auth;
