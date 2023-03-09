import Page from "@layouts/Main/components/Page";
import { PageBackgroundProvider } from "@contexts/PageBackgroundContext";
import { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { PageFixedContextProvider } from "@contexts/PageFixedContext";
import { User } from "@shared/user";
import Cookies from "js-cookie";
import { getMe } from "@api/user";
import { UserProvider, useUser } from "@contexts/UserContext";

function MainLayout({ children }: { children: React.ReactNode }) {
  const [bgImage, setBgImage] = useState<StaticImageData>();
  const [bgHeight, setBgHeight] = useState<string>();
  const [active, setActive] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(true);

  const handleNavbar = async () => {
    if (active) {
      document.body.classList.remove("openNavbar");
    } else {
      document.body.classList.add("openNavbar");
    }
    setActive(!active);
  };

  const handleIsFixed = () => {
    setIsFixed(!isFixed);
  };

  useEffect(() => {
    const fetchMe = async () => {
      const token = Cookies.get("token");
      if (token) {
        await getMe(token).then((user) => {
          setUser(user);
          setIsLoading(false);
        });
      } else {
        setIsLoading(false);
        setUser(undefined);
      }
    };

    fetchMe();
  }, []);

  return (
    <>
      {!isLoading && (
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
      )}
    </>
  );
}

export default MainLayout;
