import Auth from "@views/Main/Auth";
import { useRouter } from "next/router";
import React from "react";

function Register() {
  const { pathname } = useRouter();

  return <Auth pathName={pathname} />;
}

export default Register;
