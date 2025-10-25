export default Page

import * as stylex from '@stylexjs/stylex';
import React from 'react'
import { BaseContentDiv } from "../../../../components/div/BaseContentDiv";
import Container from "../../../../components/div/Container";
import Filters from "../components/Filters";
import Blog from "../components/Blog";
import { useEffect, useState } from "react";
import { BlogData, BlogProps } from "../utils/BlogsTypes";
import { BlogCategory } from "../utils/BlogsEnums";
import { useData } from 'vike-react/useData';

function Page() {
  const [categories, setCategories] = useState([] as BlogCategory[])
  const [blogs, setBlogs] = useState([] as BlogProps[]);
  const data: BlogData = useData<BlogData>();
  
  useEffect(() => {
    // Get blogs from +data.ts
    setBlogs(data.blogs)
  }, [])

  const toBlogCategory = (name: string) => {
    switch (name) {
      case "Coding":
        return BlogCategory.Coding
      case "Food":
        return BlogCategory.Food
      case "Gaming":
        return BlogCategory.Gaming
      default:
        break
    }
  }

  /**
   * Changes the categories state's content which is used for filtering blogs
   * @param name Name of the Category (ex: Coding)
   * @param e Event property of said Checkbox
   */
  const handleFilterChange = (
    name: string,
    _: React.ChangeEvent<HTMLInputElement>
  ) => {
    const key: BlogCategory | undefined = toBlogCategory(name);
    if (typeof key !== "undefined") {
      if (categories.includes(key)) {
        // Remove category, because it is already in categories
        setCategories((prevCategories) => prevCategories.filter((cat) => cat !== key))
      } else {
        // Add category
        setCategories((prevCategories) => [...prevCategories, key])
      }
    } else {
      throw new Error("Key value in Blogs handleFilterChange is undefined!")
    }
  }

  const renderBlogs = () => {
    return blogs.map((blog) => {
      if (categories.some((cat) => blog.categories.includes(cat)) || categories.length == 0)
        return <Blog key={blog.to} {...blog} />
    }
    )
  }

  return (
    <Container $flexDirection="column">
      <meta name="description" content="Blogs made by privatenoob.top author" />
      <meta name="keywords" content="blogs, code, recipe, programming, personal, gaming" />
      <Filters onFilterChange={handleFilterChange}/>
      <BaseContentDiv $isLastBottom={true}>
        <br />
        {renderBlogs()}
      </BaseContentDiv>
    </Container>
  );
}