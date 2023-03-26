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
import { useSearch } from "@views/Main/Recipes/contexts/SearchContext";

function Filter({ setRecipes, categories }: { setRecipes: (recipes: Recipe[] | undefined) => void; categories: Categories }) {
  const router = useRouter();
  const controller = new AbortController();
  const [query, setQuery] = useState<string | undefined>();
  const [startingValues, ,] = useState([15, 120]);
  const [currentValue, setCurrentValue] = useState<number[]>(startingValues);
  const { search, setSearch } = useSearch();
  const [filters, setFilters] = useState<IFilter>({
    categories: [],
    spiciness: [],
    origins: [],
  });
  const debounceQuery = useDebounce(query, 1000);

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
    const filterQuery: IFilterQuery = {
      filters: {
        spiciness: {
          $in: filters.spiciness,
        },
        categories: {
          $containsi: filters.categories,
        },
        origins: {
          $containsi: filters.origins,
        },
        title: {
          $containsi: search,
        },
        cookingTime: {
          $between: JSON.stringify(currentValue) == JSON.stringify(startingValues) ? undefined : currentValue,
        },
      },
    };
    const query = qs.stringify(filterQuery, {
      encodeValuesOnly: true,
    });
    router.push({ pathname: router.pathname, query: query }, undefined, { scroll: false });
    setQuery(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, search, currentValue]);

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
    setFilters((prevState) => ({
      ...prevState,
      spiciness: query.filters?.spiciness?.$in ?? [],
      origins: query.filters?.origins?.$containsi ?? [],
      categories: query.filters?.categories?.$containsi ?? [],
    }));
    setSearch(query.filters?.title?.$containsi);
    if (query.filters?.cookingTime?.$between && Array.isArray(query.filters.cookingTime.$between)) {
      setCurrentValue(query.filters.cookingTime.$between);
    }
  }, [router.asPath]);

  return (
    <FilterWrapper>
      <FilterItem title="Kategorie" filterInputArr={categories.categories} query="categories" onClick={handleFilterClick} value={filters.categories} />
      <FilterItem title="Úroveň pálivosti" peppers={[5, 4, 3, 2, 1]} query="spiciness" onClick={handleFilterClick} value={filters.spiciness} />
      <FilterItem title="Původ jídel" filterInputArr={categories.originOfMeals} query="origins" onClick={handleFilterClick} value={filters.origins} />
      <SliderWrapper>
        <Text fontSize="20px" fontWeight="700" p="0 0 45px 0">
          Doba přípravy
        </Text>
        <Slider
          trackClassName="customSlider-track"
          thumbClassName="customSlider-thumb"
          min={startingValues[0]}
          max={startingValues[1]}
          value={currentValue}
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
            if (Array.isArray(value)) {
              setCurrentValue(value);
            }
          }}
        />
      </SliderWrapper>
    </FilterWrapper>
  );
}

export default Filter;
