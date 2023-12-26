import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  padding: 10px;
  background-color: ${(props) =>
    props.theme.colors.quarteriary}; /* Optional: Add a background color */
  border-radius: 0px 0px 20px 20px;
`;

const StyledNavLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.text2};
  background-color: ${(props) => props.theme.colors.primary};
  padding: 10px 30px 10px 30px;
  border-radius: 20px;
  text-decoration: none;
  font-weight: bold;
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
