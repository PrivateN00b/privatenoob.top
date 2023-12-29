import { rgb } from "polished";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSkull,
  faHouseChimney,
  faLightbulb,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";

const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
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
  box-shadow: 0 5px 0 ${(props) => props.theme.colors.text1};
  transition: all 0.2 ease;

  &:active {
    box-shadow: none;
    transform: translateY(5px);
  }
`;

const BaseDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 20px;
`;

const LeftDiv = styled(BaseDiv)`
  width: 20%;
  align-items: center;
  margin: 0;
  padding-right: 10px;

  @media (max-width: 900px) {
    display: none;
  }
`;

const CenterDiv = styled(BaseDiv)`
  width: 60%;
  padding: 0 20px 0 20px;
  border-left: solid 3px ${({ theme }) => theme.colors.primary};

  @media (max-width: 900px) {
    border-left: 0;
    justify-content: space-between;
  }
`;

const RightDiv = styled(BaseDiv)`
  border-left: solid 3px ${({ theme }) => theme.colors.primary};
  width: 20%;
  padding-left: 10px;
`;

const NavbarImg = styled.img`
  max-height: 70px;
`;

function Navbar() {
  return (
    <>
      <Nav>
        <LeftDiv>
          <NavbarImg src="src/assets/venti.webp" />
          <NavbarImg src="src/assets/yoimiya.webp" />
        </LeftDiv>
        <CenterDiv>
          <StyledNavLink to="/">
            Home <FontAwesomeIcon icon={faHouseChimney} />
          </StyledNavLink>
          <StyledNavLink to="projects">
            Blog <FontAwesomeIcon icon={faNewspaper} />
          </StyledNavLink>
          <StyledNavLink to="projects">
            Projects <FontAwesomeIcon icon={faLightbulb} />
          </StyledNavLink>
        </CenterDiv>
        <RightDiv>
          <StyledNavLink to="projects">
            Login <FontAwesomeIcon icon={faSkull} />
          </StyledNavLink>
        </RightDiv>
      </Nav>
    </>
  );
}

export default Navbar;
