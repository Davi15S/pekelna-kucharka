import { Image, ImageContainer, Row } from "@app/styled";
import React from "react";
import { CategoryWrapper, ContentWrapper, Description, ItemWrapper, MobilePicture, Title } from "./styled";
import { AiOutlineClockCircle, AiOutlineStar } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import DescriptionStat from "./components/DescriptionStat";
import Button from "@components/Button";
import { RecipeAttributes } from "@shared/recipe";
import PepperRating from "@components/PepperRating";

function RecipeItem(props: { recipe: RecipeAttributes; id: string }) {
  return (
    <ItemWrapper href={`/recipes/${props.id}`}>
      <MobilePicture>
        <ImageContainer w="100%" h="250px" borderRadius="20px">
          <Image src={props.recipe.images.data[0].attributes.url} alt="" fill objectFit="cover" />
        </ImageContainer>
      </MobilePicture>
      <ContentWrapper w="60%" p="30px 0 30px 30px">
        <Title>{props.recipe.title}</Title>
        <Row alignItems="center" flexWrap="wrap">
          <DescriptionStat icon={<AiOutlineClockCircle size={20} color={"#ED4040"} />} text={`${props.recipe.cookingTime} min`} />
          <DescriptionStat
            icon={<BiCommentDetail size={20} color={"#ED4040"} />}
            text={`${props.recipe.comments?.data.length.toString() ?? "0"} ${
              props.recipe.comments ? (props.recipe.comments.data.length > 4 || props.recipe.comments.data.length == 0 ? "recenzí" : "recenze") : "recenzí"
            }`}
          />
          <DescriptionStat icon={<AiOutlineStar size={20} color={"#ED4040"} />} text="4/5" />
          <PepperRating p="0 20px 10px 0" rating={+props.recipe.spiciness} w={22} h={22} />
        </Row>
        <Row p="10px 0 20px 0">
          <Description color="third">{props.recipe.description}</Description>
        </Row>
        <CategoryWrapper>
          {props.recipe.categories.concat(props.recipe.origins).map((category, i) => (
            <Button key={i} text={category} color="red" transparent borderRadius="25px" m="0 20px 0 0" maxW="max-content" />
          ))}
        </CategoryWrapper>
      </ContentWrapper>
      <ImageContainer w="280px" h="220px" borderRadius="20px" m="20px 30px 20px 30px" mobileHide>
        <Image src={props.recipe.images.data[0].attributes.url} alt="" fill objectFit="cover" />
      </ImageContainer>
    </ItemWrapper>
  );
}

export default RecipeItem;
