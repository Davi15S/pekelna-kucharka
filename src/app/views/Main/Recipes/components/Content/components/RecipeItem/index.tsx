import { ImageWrapper, Row } from "@app/styled";
import React from "react";
import { CategoryWrapper, ContentWrapper, Description, ItemWrapper, MobilePicture, Title } from "./styled";
import { AiOutlineClockCircle, AiOutlineStar } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import DescriptionStat from "./components/DescriptionStat";
import Button from "@components/Button";
import recipe from "@assets/recipes/recipe.jpg";
import { useRouter } from "next/router";

function RecipeItem() {
  const navigate = useRouter();

  return (
    <ItemWrapper alignItems="center" justifyContent="space-between" w="100%" m="15px 0" onClick={() => navigate.push("/recipes/jdiusajdoisajdoisa")}>
      <MobilePicture>
        <ImageWrapper src={recipe} alt="" maxW="100%" borderRadius="20px" />
      </MobilePicture>
      <ContentWrapper w="60%" p="30px 0 30px 30px">
        <Title>Název receptu</Title>
        <Row alignItems="center" flexWrap="wrap">
          <DescriptionStat icon={<AiOutlineClockCircle size={20} color={"#ED4040"} />} text="45 min" />
          <DescriptionStat icon={<BiCommentDetail size={20} color={"#ED4040"} />} text="45 min" />
          <DescriptionStat icon={<AiOutlineStar size={20} color={"#ED4040"} />} text="45 min" />
          <DescriptionStat />
        </Row>
        <Row p="20px 0">
          <Description color="third">
            Dictumst sed aliquam faucibus adipiscing aliquam. Morbi duis tincidunt facilisis in. Lorem morbi amet, semper nunc eu platea at tristique nunc.
            Sollicitudin eu portaSollicitudin eu portaSollicitudin eu portaSollicitudin eu portaSollicitudin eu porta
          </Description>
        </Row>
        <CategoryWrapper>
          <Button text="Vietnamské" color="red" transparent borderRadius="25px" m="0 20px 0 0" />
          <Button text="Vietnamské" color="red" transparent borderRadius="25px" m="0 20px 0 0" />
          <Button text="Vietnamské" color="red" transparent borderRadius="25px" m="0 20px 0 0" />
          <Button text="Vietnamské" color="red" transparent borderRadius="25px" m="0 20px 0 0" />
          <Button text="Vietnamské" color="red" transparent borderRadius="25px" m="0 20px 0 0" />
          <Button text="Vietnamské" color="red" transparent borderRadius="25px" m="0 20px 0 0" />
        </CategoryWrapper>
      </ContentWrapper>
      <ContentWrapper w="37%" alignItems="center" justifyContent="center" h="100%" p="30px 30px 30px 0" picture>
        <ImageWrapper src={recipe} alt="" maxW="100%" borderRadius="20px" />
      </ContentWrapper>
    </ItemWrapper>
  );
}

export default RecipeItem;
