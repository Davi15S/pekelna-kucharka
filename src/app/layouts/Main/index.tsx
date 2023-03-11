import Page from "@layouts/Main/components/Page";
import { PageBackgroundProvider } from "@contexts/PageBackgroundContext";
import { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { PageFixedContextProvider } from "@contexts/PageFixedContext";
import { User } from "@shared/user";
import { getMe } from "@api/user";
import { UserProvider } from "@contexts/UserContext";
import { disableScroll, enableScroll, refreshToken } from "@app/utils";
import ProtectedRoutes from "./components/ProtectedRoutes";

function MainLayout({ children }: { children: React.ReactNode }) {
  const [bgImage, setBgImage] = useState<StaticImageData>();
  const [bgHeight, setBgHeight] = useState<string>();
  const [active, setActive] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(true);

  const handleNavbar = async () => {
    active ? enableScroll() : disableScroll();
    setActive(!active);
  };

  const handleIsFixed = () => {
    setIsFixed(!isFixed);
  };

  useEffect(() => {
    const fetchMe = async () => {
      const rfToken = await refreshToken();
      if (rfToken) {
        await getMe(rfToken.jwt)
          .then((user) => {
            setUser(user);
            setIsLoading(false);
          })
          .catch(() => setIsLoading(false));
      } else {
        setIsLoading(false);
      }
    };

    fetchMe();
  }, []);

  return (
    <>
      {!isLoading && (
        <ProtectedRoutes>
          <PageBackgroundProvider value={{ bgImage, setBgImage, bgHeight, setBgHeight }}>
            <PageFixedContextProvider value={{ isFixed, handleIsFixed }}>
              <UserProvider value={{ user, setUser }}>
                <Page>
                  <Navbar active={active} handleClick={handleNavbar} />
                  {children}
                </Page>
              </UserProvider>
              <Footer />
            </PageFixedContextProvider>
          </PageBackgroundProvider>
        </ProtectedRoutes>
      )}
    </>
  );
}

export default MainLayout;
