import BaseContentDiv from "../../../components/div/BaseContentDiv";
import Container from "../../../components/div/Container";
import Filters from "./components/Filters";
import Blog from "./components/Blog";
import blogsJSON from "./utils/blogs.json";
import { useEffect, useState } from "react";
import { BlogProps } from "./utils/BlogsTypes";

export default function Blogs() {
  const [blogs, setBlogs] = useState([] as BlogProps[]);
  const localBlogs: BlogProps[] = JSON.parse(
    JSON.stringify(blogsJSON)
  ) as BlogProps[];

  useEffect(() => {
    // This shall be replaced when the backend will provide blogs as well, just as in Recipes.tsx
    setBlogs(localBlogs)
  }, [])

  const renderBlogs = () => {
    return blogs.map((blog, i) => <Blog key={i} {...blog} />)
  }

  return (
    <Container $flexDirection="column">
      <Filters onFilterChange={() => {}}/>
      <BaseContentDiv $isLastBottom={true}>
        <br />
        {renderBlogs()}
      </BaseContentDiv>
    </Container>
  );
}
