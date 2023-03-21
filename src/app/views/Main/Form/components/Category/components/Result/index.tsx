import React, { useEffect, useState } from "react";
import { getCategories } from "@api/categories";
import { Categories } from "@shared/categories";
import { Row, Text } from "@app/styled";
import { ResultsWrapper } from "./styled";
import Button from "@components/Button";
import { RecipeForm } from "@shared/recipe";

function Results({ onClick, selectedCategories }: { onClick: <T>(key: keyof RecipeForm, index: number, value: T) => void; selectedCategories?: string[] }) {
  const [categories, setCategories] = useState<Categories>();

  useEffect(() => {
    (async () => {
      await getCategories().then((data) => {
        setCategories(data.data.attributes);
      });
    })();
  }, []);

  return (
    <ResultsWrapper w="100%" p="20px 10px" m="10px 0">
      {categories ? (
        <>
          {categories.categories.length > 0 && (
            <>
              <Text>Kategorie</Text>
              <Row p="10px 0">
                {categories.categories.map((category, i) => {
                  return (
                    !selectedCategories?.includes(category.category) && (
                      <Button
                        key={i}
                        text={category.category}
                        color="white"
                        maxW="max-content"
                        borderRadius="20px"
                        m="5px"
                        onClick={() => onClick("categories", i, category.category)}
                        type="button"
                      />
                    )
                  );
                })}
              </Row>
            </>
          )}
          {categories.originOfMeals.length > 0 && (
            <>
              <Text p="10px 0 0 0">Původ jídel</Text>
              <Row p="10px 0">
                {categories.originOfMeals.map((category, i) => {
                  return (
                    !selectedCategories?.includes(category.category) && (
                      <Button
                        key={i}
                        text={category.category}
                        color="white"
                        maxW="max-content"
                        borderRadius="20px"
                        m="5px"
                        onClick={() => onClick("categories", i + categories.categories.length, category.category)}
                        type="button"
                      />
                    )
                  );
                })}
              </Row>
            </>
          )}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </ResultsWrapper>
  );
}

export default Results;
