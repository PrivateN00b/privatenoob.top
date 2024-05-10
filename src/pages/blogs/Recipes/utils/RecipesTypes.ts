import { Meal } from "./RecipesEnums";

type FilterDict = {
  types: string[];
  restrictions: string[];
  costs: string[];
};

type RecipeDict = {
  to: string;
  name: string;
  meal: Meal;
  cost: number;
  restriction: string;
  difficulty: number;
  length: string;
  imgSrc: string;
  imgAlt: string;
};

export type { FilterDict, RecipeDict };
