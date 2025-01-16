// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "./features/core/home/Home";
import PageNotFound from "./features/core/components/PageNotFound";
import RootLayout from "./features/core/RootLayout";
import About from "./features/infos/About";
import Projects from "./features/infos/Projects";
import theme from "./styles/theme";
import GlobalStyle from "./styles/global"
import Blogs from "./features/posts/blogs/Blogs";
import Recipes from "./features/posts/recipes/Recipes";
import { BaseRecipePage } from "./features/posts/recipes/BaseRecipePage";
import BlogPage from "./features/posts/blogs/components/BlogPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path="About" element={<About />} />
      <Route path="Projects" element={<Projects />} />

      {/* Blogs */}
      <Route path="Blogs" element={<Blogs />} />
      <Route path="Recipes" element={<Recipes />} />
      
      {/* Dynamic Routing */}
      <Route path="Blogs/:blogId" element={<BlogPage />} />
      <Route path="Recipes/:recipeId" element={<BaseRecipePage />} />

      <Route path="404" element={<PageNotFound />} />
    </Route>
  )
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
