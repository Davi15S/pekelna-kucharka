import { getUnits } from "@api/units";
import { IUnits } from "@shared/units";
import Form from "@views/Main/Form";
import React from "react";

function NewRecipe({ units }: { units: IUnits }) {
  return <Form units={units} />;
}

export default NewRecipe;

export async function getServerSideProps() {
  const units = await getUnits();
  return { props: { units: units?.data.attributes } };
}
