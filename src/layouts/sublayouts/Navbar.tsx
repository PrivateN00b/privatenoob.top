import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <NavLink className="navlink" to="/">
          Home
        </NavLink>
        <NavLink className="navlink" to="projects">
          Projects
        </NavLink>
      </nav>
    </>
  );
}

export default Navbar;
