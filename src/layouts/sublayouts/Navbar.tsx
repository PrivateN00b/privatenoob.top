import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  padding: 10px;
  background-color: ${(props) =>
    props.theme.colors.tertiary}; /* Optional: Add a background color */
`;

const StyledNavLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.text2};
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 10px 30px 10px 30px;
  border-radius: 20%;
`;

function Navbar() {
  return (
    <>
      <Nav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="projects">Projects</StyledNavLink>
      </Nav>
    </>
  );
}

export default Navbar;
