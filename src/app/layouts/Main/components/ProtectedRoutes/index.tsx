import { useUser } from "@contexts/UserContext";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function ProtectedRoutes({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (router.route.match("/recipes/new")) {
      if (!user) {
        router.push("/");
      }
    }
  }, []);

  return <>{!isLoading && children}</>;
}

export default ProtectedRoutes;
