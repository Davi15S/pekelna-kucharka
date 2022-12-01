import { StaticImageData } from "next/image";
import React from "react";
import { PageContent, PageBackground, Shadow } from "./styled";

function Page(props: { children: React.ReactNode; bgImage?: StaticImageData }) {
  return (
    <>
      <PageContent>{props.children}</PageContent>
      {props.bgImage && (
        <PageBackground bgImage={props.bgImage}>
          <Shadow top />
          <Shadow />
        </PageBackground>
      )}
    </>
  );
}

export default Page;
