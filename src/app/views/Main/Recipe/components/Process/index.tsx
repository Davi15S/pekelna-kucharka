import BgTitle from "@components/BgTitle";
import React from "react";
import Item from "./components/Item";
import { ProcessWrapper } from "./styled";

function Process(props: { mobile: boolean }) {
  return (
    <ProcessWrapper w="100%" p="50px 0 0 0" mobile={props.mobile}>
      <BgTitle title="Postup" subTitle="Postup přípravy" />
      <Item
        index={1}
        text="Eget duis sed porttitor risus montes, suspendisse mauris. Sagittis massa vitae in velit in lectus euismod. In neque massa pretium massa pharetra id pharetra. Vel a a enim lectus scelerisque orci egestas. Et nunc semper praesent purus, sed eget. Cursus bibendum aenean."
      />
      <Item
        index={2}
        text="Eget duis sed porttitor risus montes, suspendisse mauris. Sagittis massa vitae in velit in lectus euismod. In neque massa pretium massa pharetra id pharetra. Vel a a enim lectus scelerisque orci egestas. Et nunc semper praesent purus, sed eget. Cursus bibendum aenean."
      />
      <Item
        index={3}
        text="Eget duis sed porttitor risus montes, suspendisse mauris. Sagittis massa vitae in velit in lectus euismod. In neque massa pretium massa pharetra id pharetra. Vel a a enim lectus scelerisque orci egestas. Et nunc semper praesent purus, sed eget. Cursus bibendum aenean."
      />
      <Item
        index={4}
        text="Eget duis sed porttitor risus montes, suspendisse mauris. Sagittis massa vitae in velit in lectus euismod. In neque massa pretium massa pharetra id pharetra. Vel a a enim lectus scelerisque orci egestas. Et nunc semper praesent purus, sed eget. Cursus bibendum aenean."
      />
    </ProcessWrapper>
  );
}

export default Process;
