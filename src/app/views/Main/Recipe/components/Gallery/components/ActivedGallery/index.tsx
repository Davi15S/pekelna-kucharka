import { ImageWrapper } from "@app/styled";
import { StaticImageData } from "next/image";
import React from "react";
import { ActiveGalleryWrapper, Background } from "./styled";

function ActivedGallery(props: { active: boolean; handleClick: (image?: number) => void; images: StaticImageData[]; currentImage: number }) {
  return (
    <>
      {props.active ? (
        <ActiveGalleryWrapper>
          <Background onClick={() => props.handleClick()} />
          <ImageWrapper src={props.images[props.currentImage]} alt="" fill={true} objectFit="contain" maxW="70vw" maxH="70vh" />
        </ActiveGalleryWrapper>
      ) : null}
    </>
  );
}

export default ActivedGallery;
