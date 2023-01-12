import { Column, ImageWrapper, Row, Text } from "@app/styled";
import React from "react";
import { ImageContent, ItemWrapper } from "./styled";
import trend from "@assets/trends/trend.jpg";
import { SubTitle } from "../../../Trends/components/TrendItem/styled";

function Item() {
  return (
    <ItemWrapper>
      <ImageContent>
        <ImageWrapper src={trend} alt="" maxH="300px" w="100%" objectFit="cover" />
      </ImageContent>
      <Column p="20px">
        <Text fontSize="24px" color="error" p="0 0 10px 0" fontWeight="700">
          Ultricies tortor posue vitae, fringill
        </Text>
        <SubTitle color="third">
          Sollicitudin et nisl feugiat in libero suscipit arcu. Et ultricies tincidunt nulla sapien aenean diam accumsan, in arcusapien aenean diam accumsan, in
          arcuSollicitudin et nisl feugiat in libero suscipit arcu. Et ultricies tincidunt nulla sapien aenean diam accumsan, in arcusapien aenean diam
          accumsan, in arcuSollicitudin et nisl feugiat in libero suscipit arcu. Et ultricies tincidunt nulla sapien aenean diam accumsan, in arcusapien aenean
          diam accumsan, in arcuSollicitudin et nisl feugiat in libero suscipit arcu. Et ultricies tincidunt nulla sapien aenean diam accumsan, in arcusapien
          aenean diam accumsan, in arcuSollicitudin et nisl feugiat in libero suscipit arcu. Et ultricies tincidunt nulla sapien aenean diam accumsan, in
          arcusapien aenean diam accumsan, in arcuSollicitudin et nisl feugiat in libero suscipit arcu. Et ultricies tincidunt nulla sapien aenean diam
          accumsan, in arcusapien aenean diam accumsan, in arcu
        </SubTitle>
        <Text color="third" fontWeight="600" m="30px 0 0 0">
          1.11.2022 13.15
        </Text>
      </Column>
    </ItemWrapper>
  );
}

export default Item;
