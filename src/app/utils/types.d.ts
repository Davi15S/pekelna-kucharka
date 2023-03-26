export interface IFilter {
  categories: string[];
  spiciness: string[];
  origins: string[];
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
    cookingTime?: {
      $between?: number[] | number;
    };
  };
}
