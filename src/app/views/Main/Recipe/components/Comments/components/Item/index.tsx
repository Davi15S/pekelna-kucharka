import { Column, ImageWrapper, Row, Text } from "@app/styled";
import React from "react";
import { CommentImage, CommentWrapper } from "./styled";

function Item() {
  return (
    <CommentWrapper m="20px 10px" p="30px 40px">
      <Row alignItems="center">
        <CommentImage>
          <ImageWrapper src="https://media.vanityfair.com/photos/631a285245c8cf69f8c2ba82/master/w_2560%2Cc_limit/1203085755" alt="" fill={true} />
        </CommentImage>
        <Text fontSize="20px" fontWeight="700" p=" 0 30px" wrap="nowrap">
          Antonín Mareš
        </Text>
        <Row justifyContent="flex-end">
          <Text fontSize="18px" fontWeight="600" color="third">
            26.1.2022
          </Text>
        </Row>
      </Row>
      <Text fontWeight="600" color="third" p="20px 0">
        Eget duis sed porttitor risus montes, suspendisse mauris. Sagittis massa vitae in velit in lectus euismod. In neque massa pretium massa pharetra id
        pharetra. Vel a a enim lectus scelerisque orci egestas. Et nunc semper praesent purus, sed eget. Cursus bibendum aenean.
      </Text>
      <Text color="error" fontWeight="700" fontSize="20px" link>
        Odpovědět
      </Text>
    </CommentWrapper>
  );
}

export default Item;
