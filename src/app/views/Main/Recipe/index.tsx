import { Text } from "@app/styled";
import { PageContent } from "@layouts/Main/components/Page/styled";
import React from "react";
import { ColumnContent, PageWrapper } from "./styled";
import Gallery from "./components/Gallery";
import usePageBackground from "@hooks/usePageBackground";
import Description from "./components/Description";

function Recipe(props: { id: string }) {
  usePageBackground(undefined);

  return (
    <PageContent topP w="100%">
      <PageWrapper p="50px 0" justifyContent="space-between" flexWrap="wrap">
        <ColumnContent w="65%">
          <Text fontWeight="700" fontSize="44px" p="0 0 50px 0">
            Ultrices etiam arcu sagittis, in nullam varius nunc ut at. Id lacus
          </Text>
          <Gallery />
        </ColumnContent>
        <ColumnContent w="30%" left>
          <Description />
        </ColumnContent>
      </PageWrapper>
    </PageContent>
  );
}

export default Recipe;
