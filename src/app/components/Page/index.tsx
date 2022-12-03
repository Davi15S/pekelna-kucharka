import { PageBackgroundContext } from "@contexts/PageBackgroundContext";
import React, { useContext } from "react";
import { PageBackground, Shadow } from "./styled";

function Page(props: { children: React.ReactNode }) {
  const { bgImage, bgHeight } = useContext(PageBackgroundContext);

  return (
    <>
      <div style={{ position: "relative", zIndex: 1 }}>{props.children}</div>
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
