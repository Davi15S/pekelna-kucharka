import { PageBackgroundContext } from "app/contexts/PageBackgroundContext";
import React, { useContext } from "react";
import { PageContent, PageBackground, Shadow } from "./styled";

function Page(props: { children: React.ReactNode }) {
  const { bgImage, bgHeight } = useContext(PageBackgroundContext);

  return (
    <>
      {props.children}
      {bgImage && (
        <PageBackground bgImage={bgImage} h={bgHeight}>
          <Shadow top />
          <Shadow />
        </PageBackground>
      )}
    </>
  );
}

export default Page;
