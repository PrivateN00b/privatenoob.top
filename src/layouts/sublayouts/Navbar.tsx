import { rgb } from "polished";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSkull,
  faHouseChimney,
  faLightbulb,
  faNewspaper,
  faAngleDown,
  faAddressCard,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import BaseContentDiv from "../../components/ui/BaseContentDiv";
import { useState } from "react";

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
  max-height: 22px;
  box-shadow: 0 5px 0 ${(props) => props.theme.colors.text1};
  transition: all 0.2 ease;

  &:hover {
    box-shadow: 0 3px 0 ${(props) => props.theme.colors.text1};
    transform: translateY(2px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(5px);
  }
`;

const BaseDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0 20px 0;
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
  flex-wrap: wrap;
  gap: 20px;
  width: 80%;
  padding: 0 20px 0 20px;
  /* border-left: solid 3px ${({ theme }) => theme.colors.primary}; */

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

const OuterDropDownMenu = styled.div`
  display: flex;
  margin-top: 10px;
  position: absolute;
  left: -40%;
  top: calc(100% - 40px);
  padding: 50px 30px 0px 30px;
  height: 200px;
  width: 300px;
  opacity: 0;
  pointer-events: none;
  transform: translateY(-10px);
  transition: opacity 0.15s ease-in-out, transform 0.15s ease-in-out;
  justify-content: center;
  border-radius: 20px;
`;

const InnerDropDownMenu = styled(BaseContentDiv)`
  display: flex;
  max-height: inherit;
  max-width: inherit;
  padding: 20px 20px 20px 10px;
`;

const DropDown = styled.div`
  margin: 10px 0 0 0;
  position: relative;

  &:hover ${OuterDropDownMenu} {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }
`;

const DropDownLink = styled.a`
  color: ${(props) => props.theme.colors.text2};
  padding: 10px 30px 10px 30px;
  border-radius: 20px;
  text-decoration: none;
  font-weight: bold;
  outline-style: inset;
  outline-color: ${(props) => props.theme.colors.primary};

  &:hover {
    box-shadow: 0 3px 0 ${(props) => props.theme.colors.text1};
    transform: translateY(2px);
  }
`;

const MenuItem = styled(NavLink)`
  color: ${(props) => props.theme.colors.text2};
  padding: 5px 30px 5px 30px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 10px;
  outline-style: outset;
  outline-color: ${(props) => props.theme.colors.primary};
`;

const MenuBorder = styled.div`
  border-left: 3px solid ${({ theme }) => theme.colors.primary};
  max-height: 200px;
  margin: 0 15px 0 15px;
`;

function Navbar() {
  return (
    <>
      <Nav>
        {/* <LeftDiv>
          <NavbarImg src="src/assets/venti.webp" />
          <NavbarImg src="src/assets/yoimiya.webp" />
        </LeftDiv> */}
        <CenterDiv>
          <StyledNavLink to="/">
            <FontAwesomeIcon icon={faHouseChimney} /> Home
          </StyledNavLink>
          <StyledNavLink to="404">
            <FontAwesomeIcon icon={faAddressCard} /> About
          </StyledNavLink>
          <StyledNavLink to="404">
            <FontAwesomeIcon icon={faLightbulb} /> Projects
          </StyledNavLink>
          <DropDown>
            <DropDownLink>
              <FontAwesomeIcon icon={faNewspaper} /> Blogs{" "}
              <FontAwesomeIcon icon={faAngleDown} />
            </DropDownLink>
            <OuterDropDownMenu>
              <InnerDropDownMenu>
                <div>
                  <img
                    style={{ maxWidth: "100px" }}
                    src="src/assets/dakooters-dkooters.gif"
                  />
                </div>{" "}
                <MenuBorder />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <MenuItem to="404">Programming</MenuItem>
                  <MenuItem to="404">Recipes</MenuItem>
                  <MenuItem to="404">Personal</MenuItem>
                </div>
              </InnerDropDownMenu>
            </OuterDropDownMenu>
          </DropDown>
          <DropDown>
            <DropDownLink>
              <FontAwesomeIcon icon={faPaperclip} /> Others{" "}
              <FontAwesomeIcon icon={faAngleDown} />
            </DropDownLink>
            <OuterDropDownMenu>
              <InnerDropDownMenu>
                <div>
                  <img
                    style={{ maxWidth: "100px" }}
                    src="src/assets/bocchi-rotate.gif"
                  />
                </div>{" "}
                <MenuBorder />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <MenuItem to="404">Links</MenuItem>
                  <MenuItem to="404">Blinkies</MenuItem>
                  <MenuItem to="404">Guestbook</MenuItem>
                </div>
              </InnerDropDownMenu>
            </OuterDropDownMenu>
          </DropDown>
        </CenterDiv>
        <RightDiv>
          <StyledNavLink to="404">
            <FontAwesomeIcon icon={faSkull} /> Login
          </StyledNavLink>
        </RightDiv>
      </Nav>
    </>
  );
}

export default Navbar;
