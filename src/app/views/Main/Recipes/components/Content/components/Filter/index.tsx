import React, { useState } from "react";
import FilterItem from "./components/FilterItem";
import { FilterWrapper } from "./styled";

function Filter() {
  const [filter, setFilter] = useState({
    category: ["Hlavní chody", "Polévky", "Omáčky", "Dezerty", "Přílohy", "Bezmasá jídla"],
    source: ["Mexická", "Vietnamská", "Čínská", "Česká", "Americká", "Indická"],
    peppers: [5, 4, 3, 2, 1],
  });

  return (
    <FilterWrapper>
      <FilterItem title="Kategorie" filterInputArr={filter.category} />
      <FilterItem title="Úroveň pálivosti" peppers={filter.peppers} />
      <FilterItem title="Úroveň pálivosti" filterInputArr={filter.source} />
    </FilterWrapper>
  );
}

export default Filter;
