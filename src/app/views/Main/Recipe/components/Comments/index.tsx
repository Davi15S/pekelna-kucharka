import { Column, Row } from "@app/styled";
import BgTitle from "@components/BgTitle";
import Button from "@components/Button";
import { Comment } from "@shared/comment";
import React, { useState } from "react";
import Item from "./components/Item";
import { CommentsWrapper } from "./styled";
import { TextArea } from "@views/Main/Form/components/TextArea/styled";
import { StyledForm } from "@views/Main/Form/styled";
import { useAuth } from "@contexts/AuthContext";
import { createComment } from "@api/comments";
import { getToken } from "@app/utils";

function Comments({ comments, recipeId }: { comments: Comment[] | undefined; recipeId: string }) {
  const [text, setText] = useState("");
  const { user } = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    (async () => {
      await createComment({ data: { author: user?.id, recipe: +recipeId, content: text } }, getToken()).then(() => window.location.reload());
    })();
  };

  return (
    <Column m="100px 0" w="100%">
      <BgTitle title="Komentáře" subTitle="Komentáře" />
      <StyledForm onSubmit={(e) => handleSubmit(e)}>
        <Column w="100%">
          <TextArea onChange={(e) => setText(e.currentTarget.value)} value={text} placeholder="Ohodnoť tento recept!" required />
          <Button text="Odeslat" maxW="200px" color="red" m="20px 0" type="submit" />
        </Column>
      </StyledForm>
      <CommentsWrapper>
        {comments?.map((comment, i) => (
          <Item key={i} comment={comment} />
        ))}
      </CommentsWrapper>
      {/* <Row justifyContent="center" m="40px 0">
        <Button text="Zobrazit více" maxW="200px" color="red" />
      </Row> */}
    </Column>
  );
}

export default Comments;
