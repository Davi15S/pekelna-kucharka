import { Text } from "@app/styled";
import React, { useState } from "react";
import FilterItem from "./components/FilterItem";
import { FilterWrapper, Slider, SliderWrapper, ThumbIndicator } from "./styled";

function Filter() {
  const [filter, ,] = useState({
    category: ["Hlavní chody", "Polévky", "Omáčky", "Dezerty", "Přílohy", "Bezmasá jídla"],
    source: ["Mexická", "Vietnamská", "Čínská", "Česká", "Americká", "Indická"],
    peppers: [5, 4, 3, 2, 1],
  });
  const [currentValue, setCurrentValue] = useState<number | readonly number[]>([15, 120]);

  return (
    <FilterWrapper>
      <FilterItem title="Kategorie" filterInputArr={filter.category} />
      <FilterItem title="Úroveň pálivosti" peppers={filter.peppers} />
      <FilterItem title="Úroveň pálivosti" filterInputArr={filter.source} />
      <SliderWrapper>
        <Text fontSize="20px" fontWeight="700" p="0 0 45px 0">
          Doba přípravy
        </Text>
        <Slider
          trackClassName="customSlider-track"
          thumbClassName="customSlider-thumb"
          min={15}
          max={120}
          defaultValue={currentValue}
          minDistance={30}
          pearling
          step={15}
          renderThumb={(props, state) => (
            <div {...props}>
              <ThumbIndicator>
                {state.valueNow >= 120 ? state.valueNow / 60 : state.valueNow} {state.valueNow >= 120 ? "h+" : "min"}
              </ThumbIndicator>
            </div>
          )}
          onChange={(value) => {
            setCurrentValue(value);
          }}
        />
      </SliderWrapper>
    </FilterWrapper>
  );
}

export default Filter;
