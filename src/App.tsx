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
import Software from "./features/blogs/software/Software";
import Home from "./features/core/Home";
import { BaseRecipePage } from "./features/blogs/recipes/BaseRecipePage";
import Recipes from "./features/blogs/recipes/Recipes";
import PageNotFound from "./features/core/components/PageNotFound";
import RootLayout from "./features/core/RootLayout";
import About from "./features/infos/About";
import Projects from "./features/infos/Projects";
import theme from "./styles/theme";
import GlobalStyle from "./styles/global"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path="About" element={<About />} />
      <Route path="Projects" element={<Projects />} />

      {/* Blogs */}
      <Route path="Software" element={<Software />} />
      <Route path="Recipes" element={<Recipes />} />
      
      {/* Recipes (Dynamic Routing) */}
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
