import PepperRating from "@components/PepperRating";
import { RecipeAttributes } from "@shared/recipe";
import moment from "moment";
import React, { useState, useEffect } from "react";
import { AiOutlineClockCircle, AiOutlineStar } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineCalendar } from "react-icons/hi";
import Item from "./components/Item";
import { DescriptionWrapper } from "./styled";

function Description(props: { recipe: RecipeAttributes }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <DescriptionWrapper w="100%">
          <Item title="Pálivost" icon={<PepperRating rating={+props.recipe.spiciness} w={23} h={23} />} />
          <Item title="Doba přípravy" icon={<AiOutlineClockCircle size={20} />} desc={`${props.recipe.cookingTime} min`} />
          <Item title="Hodnocení" icon={<AiOutlineStar size={20} />} desc="4,5 / 5" />
          <Item title="Autor" icon={<FaRegUserCircle size={20} />} desc={props.recipe.author.data.attributes.username} />
          <Item title="Vytvořeno" icon={<HiOutlineCalendar size={20} />} desc={moment(props.recipe.publishedAt).format("DD. MM. YYYY")} />
        </DescriptionWrapper>
      )}
    </>
  );
}

export default Description;
