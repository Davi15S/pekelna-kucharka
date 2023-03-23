export interface IFilter {
  categories: string[];
  spiciness: string[];
  origins: string[];
  cookingTime: number | readonly number[];
}

export interface IFilterQuery {
  filters?: {
    spiciness?: {
      $in: string[];
    };
    categories?: {
      $containsi: string[];
    };
    origins?: {
      $containsi: string[];
    };
    title?: {
      $containsi?: string;
    };
  };
}
