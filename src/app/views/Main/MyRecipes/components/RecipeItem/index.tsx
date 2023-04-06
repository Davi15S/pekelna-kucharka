import { Column, Image, ImageContainer, Row, Text } from "@app/styled";
import { UserRecipes } from "@shared/recipe";
import { Description } from "@views/Main/Recipes/components/Content/components/RecipeItem/styled";
import React, { useState } from "react";
import { RecipeItemWrapper } from "./styled";
import { HiPencil } from "react-icons/hi";
import { FaTrash } from "react-icons/fa";
import ConfirmDialog from "../ConfirmDialog";
import { disableScroll, enableScroll, getToken } from "@app/utils";
import { deleteRecipe } from "@api/recipes";
import { useRouter } from "next/router";
import { AiOutlineInfoCircle } from "react-icons/ai";

function RecipeItem({ recipe }: { recipe: UserRecipes }) {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  const handleDeleteRecipe = async () => {
    await deleteRecipe(recipe.id, getToken()).then(() => window.location.reload());
  };

  return (
    <>
      {isActive && (
        <ConfirmDialog
          handleConfirm={handleDeleteRecipe}
          handleCancel={() => {
            setIsActive(false);
            enableScroll();
          }}
        />
      )}
      <RecipeItemWrapper>
        <Column p="0 20px 0 0">
          <ImageContainer w="150px" h="140px" borderRadius="20px">
            <Image src={recipe.images[0].url} alt="" fill objectFit="cover" />
          </ImageContainer>
        </Column>
        <Column>
          <Text fontWeight={700} fontSize="25px" p="0 0 10px 0">
            {recipe.title}
          </Text>
          <Description>{recipe.description}</Description>
        </Column>
        <Column p="0 0 0 20px" alignItems="center">
          <AiOutlineInfoCircle size={25} style={{ cursor: "pointer", marginBottom: "5px" }} onClick={() => router.push(`/recipes/${recipe.id}`)} />
          <HiPencil size={25} style={{ cursor: "pointer", marginBottom: "10px" }} onClick={() => router.push(`/recipes/edit/${recipe.id}`)} />
          <FaTrash
            size={20}
            color={"#F24E1E"}
            style={{ cursor: "pointer" }}
            onClick={() => {
              setIsActive(true);
              disableScroll();
            }}
          />
        </Column>
      </RecipeItemWrapper>
    </>
  );
}

export default RecipeItem;
