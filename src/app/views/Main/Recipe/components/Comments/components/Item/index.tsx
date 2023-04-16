import { Image, Row, Text } from "@app/styled";
import { Comment } from "@shared/comment";
import moment from "moment";
import React from "react";
import { CommentImage, CommentWrapper } from "./styled";

function Item({ comment }: { comment: Comment }) {
  return (
    <CommentWrapper p="20px" w="100%">
      <Row alignItems="center" flexWrap="wrap" justifyContent="space-between">
        <Row alignItems="center" w="max-content" flexWrap="wrap">
          <CommentImage>
            <Image src="https://media.vanityfair.com/photos/631a285245c8cf69f8c2ba82/master/w_2560%2Cc_limit/1203085755" alt="" fill />
          </CommentImage>
          <Text fontSize="20px" fontWeight="600" p="0 15px" wrap="nowrap">
            {comment.attributes.author.data.attributes.username}
          </Text>
        </Row>
        <Row w="max-content">
          <Text fontSize="18px" fontWeight="600" color="third">
            {moment(comment.attributes.creationTime).format("DD. MM. YYYY")}
          </Text>
        </Row>
      </Row>
      <Text fontWeight="600" color="third" p="20px 0">
        {comment.attributes.content}
      </Text>
      <Row justifyContent="end">
        <Text color="error" fontWeight="700" link>
          Odpovědět
        </Text>
      </Row>
    </CommentWrapper>
  );
}

export default Item;
