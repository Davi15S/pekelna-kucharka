import { PageTitleContext } from "app/contexts/PageTitleContext";
import React, { useContext } from "react";

const usePageTitle = (title: string) => {
  const { setTitle } = useContext(PageTitleContext);
  setTitle(title);
};

export default usePageTitle;
