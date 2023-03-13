import { Text } from "@app/styled";
import { IFilter, IFilterQuery } from "@app/utils/types";
import React, { useState, useEffect } from "react";
import FilterItem from "./components/FilterItem";
import { FilterWrapper, Slider, SliderWrapper, ThumbIndicator } from "./styled";
import qs from "qs";
import { useRouter } from "next/router";
import { getRecipes } from "@api/recipes";
import { Recipe } from "@shared/recipe";
import useDebounce from "@hooks/useDebounce";

function Filter({ setRecipes }: { setRecipes: (recipes: Recipe[] | undefined) => void }) {
  const router = useRouter();
  const controller = new AbortController();
  const [query, setQuery] = useState<string | undefined>();
  const [filter, ,] = useState({
    category: ["Hlavní chod", "Polévka", "Omáčka", "Dezert", "Příloha", "Bezmasé jídlo"],
    source: ["Mexická", "Vietnamská", "Čínská", "Česká", "Americká", "Indická"],
    peppers: [5, 4, 3, 2, 1],
  });
  const [currentValue, setCurrentValue] = useState<number | readonly number[]>([]);
  const [filters, setFilters] = useState<IFilter>({
    categories: [],
    spiceness: [],
    origin: [],
    cookingTime: currentValue,
  });
  const debounceQuery = useDebounce(query);

  const handleFilterClick = (key: keyof IFilter, value: string, checked: boolean) => {
    const updatedFilter = [...(filters[key] as string[])];
    if (checked) {
      updatedFilter.push(value);
    } else {
      const index = updatedFilter.indexOf(value);
      if (index > -1) {
        updatedFilter.splice(index, 1);
      }
    }
    const filter = { ...filters, [key]: updatedFilter };
    setFilters(filter);
  };

  useEffect(() => {
    setFilters((state) => ({ ...state, cookingTime: currentValue }));
  }, [currentValue]);

  useEffect(() => {
    (async () => {
      const filterQuery: IFilterQuery = {
        filters: {
          spiciness: {
            $in: filters.spiceness,
          },
        },
      };

      const query = qs.stringify(filterQuery, {
        encodeValuesOnly: true,
      });

      console.log(query);

      router.push({ pathname: router.pathname, query: query ?? "" }, undefined, { scroll: false });
      setQuery(query);
    })();
  }, [filters]);

  useEffect(() => {
    (async () => {
      const signal = controller.signal;
      const data = await getRecipes(query, signal);
      setRecipes(data?.data);
    })();

    return () => controller.abort();
  }, [debounceQuery]);

  useEffect(() => {
    const query = qs.parse(window.location.search.substring(1)) as unknown as IFilterQuery;
    setFilters((prevState) => ({ ...prevState, spiceness: query.filters?.spiciness?.$in ?? [] }));
  }, []);

  return (
    <FilterWrapper>
      <FilterItem title="Kategorie" filterInputArr={filter.category} query="categories" onClick={handleFilterClick} value={filters.categories} />
      <FilterItem title="Úroveň pálivosti" peppers={filter.peppers} query="spiceness" onClick={handleFilterClick} value={filters.spiceness} />
      <FilterItem title="Původ jídel" filterInputArr={filter.source} query="origin" onClick={handleFilterClick} value={filters.origin} />
      <SliderWrapper>
        <Text fontSize="20px" fontWeight="700" p="0 0 45px 0">
          Doba přípravy
        </Text>
        <Slider
          trackClassName="customSlider-track"
          thumbClassName="customSlider-thumb"
          min={15}
          max={120}
          defaultValue={[15, 120]}
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
