import { Text } from "@app/styled";
import React, { useState } from "react";
import FilterItem from "./components/FilterItem";
import { FilterWrapper, Slider, SliderWrapper } from "./styled";

function Filter() {
  const [filter, ,] = useState({
    category: ["Hlavní chody", "Polévky", "Omáčky", "Dezerty", "Přílohy", "Bezmasá jídla"],
    source: ["Mexická", "Vietnamská", "Čínská", "Česká", "Americká", "Indická"],
    peppers: [5, 4, 3, 2, 1],
  });
  const [currentValue, setCurrentValue] = useState<number | readonly number[]>([0, 100]);

  return (
    <FilterWrapper>
      <FilterItem title="Kategorie" filterInputArr={filter.category} />
      <FilterItem title="Úroveň pálivosti" peppers={filter.peppers} />
      <FilterItem title="Úroveň pálivosti" filterInputArr={filter.source} />
      <SliderWrapper>
        <Text fontSize="20px" fontWeight="700" p="0 0 20px 0">
          Doba přípravy
        </Text>
        <Slider
          trackClassName="customSlider-track"
          thumbClassName="customSlider-thumb"
          min={0}
          max={100}
          defaultValue={currentValue}
          minDistance={10}
          onChange={(value) => {
            console.log(value);
            setCurrentValue(value);
          }}
        />
      </SliderWrapper>
    </FilterWrapper>
  );
}

export default Filter;
