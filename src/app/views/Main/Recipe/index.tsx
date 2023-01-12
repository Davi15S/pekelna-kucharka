import { Row, Text } from "@app/styled";
import { PageContent } from "@layouts/Main/components/Page/styled";
import React, { useState } from "react";
import { ColumnContent } from "./styled";
import Gallery from "./components/Gallery";

function Recipe(props: { id: string }) {
  return (
    <PageContent topP w="100%">
      <Row p="50px 0">
        <ColumnContent w="65%">
          <Text fontWeight="700" fontSize="44px" p="0 0 50px 0">
            Ultrices etiam arcu sagittis, in nullam varius nunc ut at. Id lacus
          </Text>
          <Gallery />
        </ColumnContent>
      </Row>
    </PageContent>
  );
}

export default Recipe;
