import { Dispatch, SetStateAction } from "react";
import { Meal } from "./RecipesEnums";

type FilterProps = {
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

type PortionProps = {
  portion: number,
  setPortion?: Dispatch<SetStateAction<number>>,
}

export type { FilterProps, RecipeDict, PortionProps };
