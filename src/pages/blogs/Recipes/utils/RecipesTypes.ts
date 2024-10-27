import { Meal } from "./RecipesEnums";

type FilterDict = {
  types: string[];
  restrictions: string[];
  costs: string[];
};

type RecipeDict = {
  to: string;
  name: string;
  title: string;
  meal: Meal;
  cost: number;
  restriction: string;
  difficulty: number;
  length: string;
  imgSrc: string;
  imgAlt: string;
  infos: { [key: string]: string };
  ingredients: { [key: string]: string[] };
  steps: string[];
  sources: { [key: string]: string }[]
};

export type { FilterDict, RecipeDict };
