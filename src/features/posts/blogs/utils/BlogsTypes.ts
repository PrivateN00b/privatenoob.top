import { BlogCategory } from "./BlogsEnums";

type FilterProps = {
  categories: string[];
};

type BlogProps = {
  to: string;
  title: string;
  intro: string;
  categories: BlogCategory[];
  date: string;
  content: string[];
  sources: { [key: string]: string }[]; 
};

export type { FilterProps, BlogProps };
