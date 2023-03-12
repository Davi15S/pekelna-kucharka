import Loading from "@components/Loading";
import { useAuth } from "@contexts/AuthContext";
import Form from "@views/Main/Form";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function NewRecipe() {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, isLoading]);

  if (isLoading || !isAuthenticated) {
    return <Loading />;
  }

  return <Form />;
}

export default NewRecipe;
