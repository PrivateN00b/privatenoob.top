import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "./features/core/home/Home";
import RootLayout from "./features/core/RootLayout";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/global"
import { lazy } from "react";
import pathNames from "./utils/pathNames";

// Lazy load certain pages to improve initial load times
const About = lazy(() => import("./features/infos/About"))
const Projects = lazy(() => import("./features/infos/Projects"))
const Blogs = lazy(() => import("./features/posts/blogs/Blogs"))
const Recipes = lazy(() => import("./features/posts/recipes/Recipes"))
const BlogPage = lazy(() => import("./features/posts/blogs/components/BlogPage"))
const BaseRecipePage = lazy(() => import("./features/posts/recipes/BaseRecipePage"))
const Links = lazy(() => import("./features/others/Links"))
const PageNotFound = lazy(() => import("./features/core/components/PageNotFound"))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      {/* Infos */}
      <Route path={pathNames.about} element={<About />} />
      <Route path={pathNames.projects} element={<Projects />} />

      {/* Posts */}
      <Route path={pathNames.blogs} element={<Blogs />} />
      <Route path={pathNames.recipes} element={<Recipes />} />
      
      {/* Dynamic Routing */}
      <Route path={`${pathNames.blogs}/:blogId`} element={<BlogPage />} />
      <Route path={`${pathNames.recipes}/:recipeId`} element={<BaseRecipePage />} />

      {/* Others */}
      <Route path={pathNames.links} element={<Links />} />

      <Route path={pathNames.pageNotFound} element={<PageNotFound />} />
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
