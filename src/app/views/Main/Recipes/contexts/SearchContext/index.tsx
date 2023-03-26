import React, { useState, createContext, useContext } from "react";

const SearchContext = createContext<{
  search: string | undefined;
  setSearch: (value: string | undefined) => void;
}>({
  search: undefined,
  setSearch: () => undefined,
});

function SearchProvider({ children }: { children: React.ReactNode }) {
  const [search, setSearch] = useState<string>();

  return <SearchContext.Provider value={{ search, setSearch }}>{children}</SearchContext.Provider>;
}

export const useSearch = () => useContext(SearchContext);

export default SearchProvider;
