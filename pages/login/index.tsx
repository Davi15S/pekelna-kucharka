import Loading from "@components/Loading";
import { useAuth } from "@contexts/AuthContext";
import Auth from "@views/Main/Auth";
import { useRouter } from "next/router";
import React from "react";

function LoginPage() {
  const { pathname } = useRouter();
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  if (isAuthenticated) {
    router.push("/");
    return <Loading p="170px 0 0 0" />;
  }

  return <Auth pathName={pathname} />;
}

export default LoginPage;
