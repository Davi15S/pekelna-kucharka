import { Row } from "@app/styled";
import React from "react";
import Stat from "./components/Stat";

function Stats() {
  return (
    <Row justifyContent="center" p="90px 0" flexWrap="wrap">
      <Stat title="20+" subTitle="Kategorií" />
      <Stat title="250+" subTitle="Receptů" />
      <Stat title="600+" subTitle="Uživatelů" />
    </Row>
  );
}

export default Stats;
