import { PageTitleContext } from "@contexts/PageTitleContext";
import React, { useContext } from "react";

const usePageTitle = (title: string | undefined) => {
  const { setTitle } = useContext(PageTitleContext);
  setTitle(`Pekelná kuchařka ${title ? `| ${title}` : ""}`);
};

export default usePageTitle;
