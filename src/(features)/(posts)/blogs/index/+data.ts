import type { PageContextServer } from "vike/types";
import { useConfig } from "vike-react/useConfig";
import type { BlogProps } from "../utils/BlogsTypes";
import blogsJSON from "../utils/blogs.json";
import pathNames from "../../../../utils/pathNames";

export const data = async (pageContext: PageContextServer) => {
  const config = useConfig();

  const localBlogs: BlogProps[] = JSON.parse(
              JSON.stringify(blogsJSON)
          ) as BlogProps[];

  config({
    title: "blogs",
  });

  return localBlogs;
};
