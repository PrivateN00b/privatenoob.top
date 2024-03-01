type FilterDict = {
  types: string[];
  restrictions: string[];
  costs: string[];
};

type RecipeDict = {
  to: string;
  name: string;
  type: string;
  cost: number;
  restriction: string;
  difficulty: number;
  length: string;
  imgSrc: string;
  imgAlt: string;
};

export type { FilterDict, RecipeDict };
