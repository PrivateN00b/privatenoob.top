import { Category } from "./BlogsEnums";

type FilterDict = {
  categories: string[];
};

type BlogDict = {
  to: string;
  title: string;
  intro: string;
  categories: Category[];
  date: string;
  content: string;
};

export type { FilterDict, BlogDict };
