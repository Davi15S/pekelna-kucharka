import PepperRating from "@components/PepperRating";
import React, { useState, useEffect } from "react";
import { AiOutlineClockCircle, AiOutlineStar } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineCalendar } from "react-icons/hi";
import Item from "./components/Item";
import { DescriptionWrapper } from "./styled";

function Description() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <DescriptionWrapper w="100%">
          <Item title="Pálivost" icon={<PepperRating rating={3} w="23px" h="23px" />} />
          <Item title="Doba přípravy" icon={<AiOutlineClockCircle size={20} />} desc="45 min" />
          <Item title="Hodnocení" icon={<AiOutlineStar size={20} />} desc="4,5 / 5" />
          <Item title="Autor" icon={<FaRegUserCircle size={20} />} desc="Adam Mašek" />
          <Item title="Vytvořeno" icon={<HiOutlineCalendar size={20} />} desc="10. 11. 2022" />
        </DescriptionWrapper>
      )}
    </>
  );
}

export default Description;
