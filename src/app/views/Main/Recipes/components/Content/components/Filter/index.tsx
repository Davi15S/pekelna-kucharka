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
import { Categories } from "@shared/categories";

function Filter({ setRecipes, categories }: { setRecipes: (recipes: Recipe[] | undefined) => void; categories: Categories }) {
  const router = useRouter();
  const controller = new AbortController();
  const [query, setQuery] = useState<string | undefined>();
  const [currentValue, setCurrentValue] = useState<number | readonly number[]>([]);
  const [filters, setFilters] = useState<IFilter>({
    categories: [],
    spiciness: [],
    origin: [],
    cookingTime: currentValue,
  });
  const debounceQuery = useDebounce(query);

  const handleFilterClick = (key: keyof IFilter, value: string, checked: boolean) => {
    setRecipes(undefined);
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
    const filterQuery: IFilterQuery = {
      filters: {
        spiciness: {
          $in: filters.spiciness,
        },
        category: {
          $in: filters.categories,
        },
      },
    };
    const query = qs.stringify(filterQuery, {
      encodeValuesOnly: true,
    });
    router.push({ pathname: router.pathname, query: query }, undefined, { scroll: false });
    setQuery(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  useEffect(() => {
    (async () => {
      const signal = controller.signal;
      const data = await getRecipes(query, signal);
      setRecipes(data?.data);
    })();

    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceQuery]);

  useEffect(() => {
    const query = qs.parse(window.location.search.substring(1)) as unknown as IFilterQuery;
    setFilters((prevState) => ({ ...prevState, spiciness: query.filters?.spiciness?.$in ?? [] }));
  }, [router.asPath]);

  return (
    <FilterWrapper>
      <FilterItem title="Kategorie" filterInputArr={categories.categories} query="categories" onClick={handleFilterClick} value={filters.categories} />
      <FilterItem title="Úroveň pálivosti" peppers={[5, 4, 3, 2, 1]} query="spiciness" onClick={handleFilterClick} value={filters.spiciness} />
      <FilterItem title="Původ jídel" filterInputArr={categories.originOfMeals} query="origin" onClick={handleFilterClick} value={filters.origin} />
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
