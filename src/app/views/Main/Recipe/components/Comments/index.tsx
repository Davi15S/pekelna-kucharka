import { Column, Row } from "@app/styled";
import BgTitle from "@components/BgTitle";
import Button from "@components/Button";
import { Comment } from "@shared/comment";
import React from "react";
import Item from "./components/Item";
import { CommentsWrapper } from "./styled";

function Comments({ comments }: { comments: Comment[] | undefined }) {
  return (
    <Column m="100px 0" w="100%">
      <BgTitle title="Komentáře" subTitle="Komentáře" />
      <CommentsWrapper>
        {comments?.map((comment, i) => (
          <Item key={i} comment={comment} />
        ))}
      </CommentsWrapper>
      <Row justifyContent="center" m="40px 0">
        <Button text="Zobrazit více" maxW="200px" color="red" />
      </Row>
    </Column>
  );
}

export default Comments;
