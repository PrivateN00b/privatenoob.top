import { BlogCategory } from "./BlogsEnums";

type FilterProps = {
  coding: boolean;
  food: boolean;
  gaming: boolean;
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

type BlogData = {
  blogs: BlogProps[]
};

export type { FilterProps, BlogProps, BlogData };
