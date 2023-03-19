export interface IFilter {
  categories: string[];
  spiciness: string[];
  origin: string[];
  cookingTime: number | readonly number[];
}

export interface IFilterQuery {
  filters?: {
    spiciness?: {
      $in: string[];
    };
  };
}
