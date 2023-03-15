export interface IFilter {
  categories: string[];
  spiceness: string[];
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
