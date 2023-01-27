import { PageBackgroundContext } from "@contexts/PageBackgroundContext";
import ActivedGallery from "@views/Main/Recipe/components/Gallery/components/ActivedGallery";
import React, { useContext } from "react";
import { PageBackground, PageWrapper, Shadow } from "./styled";

function Page(props: { children: React.ReactNode }) {
  const { bgImage, bgHeight } = useContext(PageBackgroundContext);

  return (
    <>
      <PageWrapper>{props.children}</PageWrapper>
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
