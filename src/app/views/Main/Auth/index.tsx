import { PageContent } from "@layouts/Main/components/Page/styled";
import React, { useEffect, useState } from "react";
import { MainTitle } from "../Landing/components/Hero/styled";
import Button from "../../../components/Button";
import { LoginWrapper } from "./styled";
import { FcGoogle } from "react-icons/fc";
import usePageTitle from "@hooks/usePageTitle";
import usePageBackground from "@hooks/usePageBackground";
import { Column } from "@app/styled";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <BgTitle title="Přihlásit se" top="20px" mobileTop="10vh" left="-50vw" />
      <BgTitle title="Registrace" top="70vh" left="0vw" mobileTop="80vh" mobileLeft="-10vw" />
      <PageContent>
        <LoginWrapper alignItems="center" justifyContent="center" h="100vh">
          <MainTitle fontSize="40px">{isLogin ? "Přihlášení" : "Registrace"}</MainTitle>
          {isLogin ? <Button transparent text="Přihlásit se přes Google" icon={<FcGoogle style={{ marginRight: "10px" }} size={25} />} h="50px" /> : null}
          <Column h="auto" w="100%">
            {isLogin ? <LoginInputs /> : <RegisterInputs />}
          </Column>
        </LoginWrapper>
      </PageContent>
    </>
  );
}

export default Auth;
