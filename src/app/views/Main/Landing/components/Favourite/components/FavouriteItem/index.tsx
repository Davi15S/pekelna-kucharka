import Image, { StaticImageData } from "next/image";
import React from "react";
import { ItemWrapper, SubTitle, Title } from "./styled";
import { MdKeyboardArrowRight } from "react-icons/md";

function FavouriteItem(props: { img: StaticImageData; title: string }) {
  return (
    <ItemWrapper alignItems="center">
      <Image src={props.img} alt="" />
      <Title>{props.title}</Title>
      <SubTitle justifyContent="center" alignItems="center">
        Více <MdKeyboardArrowRight size={20} />
      </SubTitle>
    </ItemWrapper>
  );
}

export default FavouriteItem;
