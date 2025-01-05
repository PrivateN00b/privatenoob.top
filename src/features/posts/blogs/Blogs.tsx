import BaseContentDiv from "../../../components/div/BaseContentDiv";
import Container from "../../../components/div/Container";
import Filters from "./components/Filters";
import Blog from "./components/Blog";
import blogsJSON from "./utils/blogs.json";
import { useEffect, useState } from "react";
import { BlogDict } from "./utils/BlogsTypes";

export default function Blogs() {
  const [blogs, setBlogs] = useState([] as BlogDict[]);
  const localBlogs: BlogDict[] = JSON.parse(
    JSON.stringify(blogsJSON)
  ) as BlogDict[];

  useEffect(() => {
    // This shall be replaced when the backend will provide blogs as well, just as in Recipes.tsx
    setBlogs(localBlogs)
    console.log(blogs)
  }, [])

  const renderBlogs = () => {
    return blogs.map((blog, i) => <Blog key={i} {...blog} />)
  }

  return (
    <Container $flexDirection="column">
      <Filters />
      <BaseContentDiv $isLastBottom={true}>
        <br />
        {renderBlogs()}
      </BaseContentDiv>
    </Container>
  );
}
