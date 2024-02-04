import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSkull,
  faHouseChimney,
  faNewspaper,
  faAngleDown,
  faAddressCard,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import BaseContentDiv from "../../components/ui/BaseContentDiv";

const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  background-color: ${(props) =>
    props.theme.colors.quarteriary}; /* Optional: Add a background color */
  border-radius: 0px 0px 20px 20px;
`;

const StyledNavLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.text1};
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

  @media (max-width: 420px) {
    padding: 10px 20px 10px 20px;
  }
`;

const BaseDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0 20px 0;
`;

// const LeftDiv = styled(BaseDiv)`
//   width: 20%;
//   align-items: center;
//   margin: 0;
//   padding-right: 10px;

//   @media (max-width: 900px) {
//     display: none;
//   }
// `;

const CenterDiv = styled(BaseDiv)`
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  padding: 0 20px 0 20px;
  /* border-left: solid 3px ${({ theme }) => theme.colors.primary}; */

  @media (max-width: 900px) {
  }
`;

// const RightDiv = styled(BaseDiv)`
//   border-left: solid 3px ${({ theme }) => theme.colors.primary};
//   width: 20%;
//   padding-left: 10px;
// `;

const OuterDropDownMenu = styled.div`
  display: flex;
  margin-top: 10px;
  position: absolute;
  left: -100%;
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

const OuterDropDownMenuInfos = styled(OuterDropDownMenu)`
  /* top: -230px;
  padding: 20px 30px 30px 30px; */
  border-radius: 250px 50px 50px 50px / 80px 25px 25px 25px;
  height: 200px;
  width: 260px;

  @media (max-width: 420px) {
    left: -${window.innerWidth / 2.2}px;
  }

  @media (min-width: 420px) and (max-width: 900px) {
    left: -${window.innerWidth / 2.65}px;
  }
`;

const OuterDropDownMenuBlogs = styled(OuterDropDownMenu)`
  border-radius: 250px 50px 50px 50px / 70px 25px 25px 25px;

  @media (max-width: 420px) {
    left: -${window.innerWidth / 8.5}px;
  }

  @media (min-width: 545px) {
    left: -126%;
  }
`;

const OuterDropDownMenuOthers = styled(OuterDropDownMenu)`
  border-radius: 250px 50px 50px 50px / 80px 25px 25px 25px;
  height: 200px;
  width: 280px;

  @media (max-width: 420px) {
    left: -${window.innerWidth / 2}px;
  }

  @media (min-width: 545px) and (max-width: 720px) {
    left: -65%;
  }
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
    z-index: 1;
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }
`;

const DropDownLink = styled.a`
  color: ${(props) => props.theme.colors.text1};
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

  @media (max-width: 420px) {
    padding: 10px 20px 10px 20px;
  }
`;

const MenuItem = styled(NavLink)`
  color: ${(props) => props.theme.colors.text1};
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

const StyledFAIcon = styled(FontAwesomeIcon)`
  @media (max-width: 420px) {
    display: none;
  }
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
            <StyledFAIcon icon={faHouseChimney} /> Home
          </StyledNavLink>

          <DropDown>
            <DropDownLink>
              <StyledFAIcon icon={faAddressCard} /> Infos{" "}
              <FontAwesomeIcon icon={faAngleDown} />
            </DropDownLink>
            <OuterDropDownMenuInfos>
              <InnerDropDownMenu>
                <div>
                  <img
                    style={{ maxWidth: "100px" }}
                    src="/dakooters-dkooters.gif"
                  />
                </div>{" "}
                <MenuBorder />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <MenuItem to="About">About</MenuItem>
                  <MenuItem to="Projects">Projects</MenuItem>
                  <MenuItem to="404">Uses</MenuItem>
                </div>
              </InnerDropDownMenu>
            </OuterDropDownMenuInfos>
          </DropDown>

          <DropDown>
            <DropDownLink>
              <StyledFAIcon icon={faNewspaper} /> Blogs{" "}
              <FontAwesomeIcon icon={faAngleDown} />
            </DropDownLink>
            <OuterDropDownMenuBlogs>
              <InnerDropDownMenu>
                <div>
                  <img
                    style={{ maxWidth: "100px" }}
                    src="/dakooters-dkooters.gif"
                  />
                </div>{" "}
                <MenuBorder />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <MenuItem to="Software">Software</MenuItem>
                  <MenuItem to="Recipes">Recipes</MenuItem>
                  <MenuItem to="404">Personal</MenuItem>
                </div>
              </InnerDropDownMenu>
            </OuterDropDownMenuBlogs>
          </DropDown>

          <DropDown>
            <DropDownLink>
              <StyledFAIcon icon={faPaperclip} /> Others{" "}
              <FontAwesomeIcon icon={faAngleDown} />
            </DropDownLink>
            <OuterDropDownMenuOthers>
              <InnerDropDownMenu>
                <div>
                  <img style={{ maxWidth: "100px" }} src="/bocchi-rotate.gif" />
                </div>{" "}
                <MenuBorder />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <MenuItem to="404">Links</MenuItem>
                  <MenuItem to="404">Blinkies</MenuItem>
                  <MenuItem to="404">Guestbook</MenuItem>
                </div>
              </InnerDropDownMenu>
            </OuterDropDownMenuOthers>
          </DropDown>

          <StyledNavLink to="404">
            <StyledFAIcon icon={faSkull} /> Login
          </StyledNavLink>
        </CenterDiv>
      </Nav>
    </>
  );
}

export default Navbar;
