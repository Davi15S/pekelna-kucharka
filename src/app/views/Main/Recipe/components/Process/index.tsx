import BgTitle from "@components/BgTitle";
import React from "react";
import Item from "./components/Item";
import { ProcessWrapper } from "./styled";

function Process(props: { mobile: boolean; process: string[] }) {
  return (
    <ProcessWrapper w="100%" p="50px 0 0 0" mobile={props.mobile}>
      <BgTitle title="Postup" subTitle="Postup přípravy" />
      {props.process.map((process, i) => (
        <Item index={i + 1} text={process} key={i} />
      ))}
    </ProcessWrapper>
  );
}

export default Process;
