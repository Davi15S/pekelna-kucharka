import { Row } from "@app/styled";
import React from "react";
import { LoadingWrapper } from "./styled";

function Loading(props: { p?: React.CSSProperties["padding"] }) {
  return (
    <Row justifyContent="center" p={props.p}>
      <LoadingWrapper />
    </Row>
  );
}

export default Loading;
