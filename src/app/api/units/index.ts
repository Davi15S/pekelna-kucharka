import { IUnits } from "@shared/units";
import { fetchApi } from "..";

export const getUnits = () => {
  return fetchApi<{ data: { attributes: IUnits } }>("unit?populate=*");
};
