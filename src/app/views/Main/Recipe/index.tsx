import { Row, Text } from "@app/styled";
import { PageContent } from "@layouts/Main/components/Page/styled";
import React from "react";
import { ColumnContent, PageWrapper } from "./styled";
import Gallery from "./components/Gallery";
import usePageBackground from "@hooks/usePageBackground";
import Description from "./components/Description";
import Ingredients from "./components/Ingredients";
import Button from "@components/Button";
import Process from "./components/Process";
import Comments from "./components/Comments";

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
          <Process mobile={false} />
        </ColumnContent>
        <ColumnContent w="30%" left>
          <Description />
          <Ingredients />
          <Row flexWrap="wrap" justifyContent="space-evenly" p="20px 0">
            <Button text="Vietnamské" color="red" transparent borderRadius="25px" m="5px 1px 5px 1px" maxW="max-content" />
            <Button text="Polévka" color="red" transparent borderRadius="25px" m="5px 1px 5px 1px" maxW="max-content" />
            <Button text="Oběd" color="red" transparent borderRadius="25px" m="5px 1px 5px 1px" maxW="max-content" />
            <Button text="Kuřecí maso" color="red" transparent borderRadius="25px" m="5px 1px 5px 1px" maxW="max-content" />
          </Row>
        </ColumnContent>
        <ColumnContent w="100">
          <Process mobile={true} />
        </ColumnContent>
        <Comments />
      </PageWrapper>
    </PageContent>
  );
}

export default Recipe;
