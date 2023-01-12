import Recipe from "@views/Main/Recipe";
import { useRouter } from "next/router";
import React from "react";

function RecipeSite() {
  const router = useRouter();
  const { id } = router.query as { id: string };

  return <Recipe id={id} />;
}

export default RecipeSite;
