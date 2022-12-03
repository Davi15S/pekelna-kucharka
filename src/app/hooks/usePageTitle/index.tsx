import { PageTitleContext } from "@contexts/PageTitleContext";
import React, { useContext } from "react";

const usePageTitle = (title: string) => {
  const { setTitle } = useContext(PageTitleContext);
  setTitle(title);
};

export default usePageTitle;
