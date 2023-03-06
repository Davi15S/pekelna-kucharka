import Page from "@layouts/Main/components/Page";
import { PageBackgroundProvider } from "@contexts/PageBackgroundContext";
import { StaticImageData } from "next/image";
import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { PageFixedContextProvider } from "@contexts/PageFixedContext";
import Cookies from "js-cookie";
import { getMe } from "@api/user";
import { User } from "@shared/user";

function MainLayout({ children }: { children: React.ReactNode }) {
  const [bgImage, setBgImage] = useState<StaticImageData>();
  const [bgHeight, setBgHeight] = useState<string>();
  const [active, setActive] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | undefined>();

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
      setToken(token);
      if (token) {
        await getMe(token).then((user) => setUser(user));
      }
    };

    fetchMe();
  }, []);

  return (
    <>
      <PageBackgroundProvider value={{ bgImage, setBgImage, bgHeight, setBgHeight }}>
        <PageFixedContextProvider value={{ isFixed, handleIsFixed }}>
          <Page>
            <Navbar active={active} handleClick={handleNavbar} user={user} />
            {children}
          </Page>
          <Footer />
        </PageFixedContextProvider>
      </PageBackgroundProvider>
      ;
    </>
  );
}

export default MainLayout;
