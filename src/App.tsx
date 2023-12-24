// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  NavLink,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Projects from "./pages/Projects";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="Projects" element={<Projects />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
