// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Projects from "./pages/infos/Projects";
import RootLayout from "./layouts/RootLayout";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/global";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/infos/About";
import Recipes from "./pages/blogs/Recipes/Recipes";
import Software from "./pages/blogs/Software/Software";
import { ScrambledEggs } from "./pages/blogs/Recipes/pages/ScrambledEggs";
import { Bukta } from "./pages/blogs/Recipes/pages/Bukta";
import { ChickenLoMein } from "./pages/blogs/Recipes/pages/ChickenLoMein";
import { BaseRecipePage } from "./pages/blogs/Recipes/components/BaseRecipePage";

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
