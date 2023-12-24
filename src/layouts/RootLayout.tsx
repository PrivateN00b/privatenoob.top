import { NavLink, Outlet } from "react-router-dom";
import Banner from "../components/header/Banner";
import "./RootLayout.css";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <Banner />
      <nav className="navbar">
        <NavLink className="navlink" to="/">
          Home
        </NavLink>
        <NavLink className="navlink" to="projects">
          Projects
        </NavLink>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
