import React from "react";
import { Categories } from "@shared/categories";
import { Row, Text } from "@app/styled";
import { ResultsWrapper } from "./styled";
import Button from "@components/Button";
import Loading from "@components/Loading";

function Results({ onClick, selectedCategories, categories }: { onClick: (value: string) => void; selectedCategories: string[]; categories?: Categories }) {
  return (
    <ResultsWrapper w="100%" p="20px 10px" m="10px 0">
      {categories ? (
        <>
          <Text p="0 0 0 10px" fontWeight={500}>
            Kategorie
          </Text>
          <Row p="10px 0" flexWrap="wrap">
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
                    onClick={() => onClick(category.category)}
                    type="button"
                  />
                )
              );
            })}
          </Row>
          <Text p="10px 0 0 10px" fontWeight={500}>
            Původ jídel
          </Text>
          <Row p="10px 0" flexWrap="wrap">
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
                    onClick={() => onClick(category.category)}
                    type="button"
                  />
                )
              );
            })}
          </Row>
        </>
      ) : (
        <Loading />
      )}
    </ResultsWrapper>
  );
}

export default Results;
