import styled from "styled-components";
import NavbarLink from "../../../components/button_link/NavbarLink";
import BaseContentDiv from "../../../components/div/BaseContentDiv";
import theme from "../../../styles/theme";
import { FontIcon } from "../../../components/img/Icon";

const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  background-color: ${(props) =>
    props.theme.colors.quarteriary}; /* Optional: Add a background color */
  border-radius: 0px 0px 20px 20px;
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
  left: -90%;
  top: calc(100% - 40px);
  opacity: 0;
  pointer-events: none;
  transform: translateY(-10px);
  transition: opacity 0.15s ease-in-out, transform 0.15s ease-in-out;
  justify-content: center;
  `;

const OuterDropDownMenuInfos = styled(OuterDropDownMenu)`
  border-radius: 250px 50px 50px 50px / 80px 25px 25px 25px;
  height: 145px;
  padding: 50px 20px 15px 20px;

  @media (max-width: 420px) {
    left: -${window.innerWidth / 2.2}px;
  }

  @media (min-width: 420px) and (max-width: 900px) {
    left: -${window.innerWidth / 2.65}px;
  }
`;

const OuterDropDownMenuBlogs = styled(OuterDropDownMenu)`
  border-radius: 250px 50px 50px 50px / 70px 25px 25px 25px;
  height: 195px;
  padding: 50px 25px 15px 25px;

  @media (max-width: 420px) {
    left: -${window.innerWidth / 8.5}px;
  }

  @media (min-width: 545px) {
    left: -106%;
  }
`;

const OuterDropDownMenuOthers = styled(OuterDropDownMenu)`
  border-radius: 250px 50px 50px 50px / 80px 25px 25px 25px;
  height: 140px;
  padding: 50px 30px 15px 10px;

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
  padding: 15px 20px 10px 10px;
`;

const DropDown = styled.div`
  margin: 10px 0 0 0;
  position: relative;
  z-index: 5;

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
          <NavbarLink to="/" component="normal">
            <FontIcon src="/fonts/home.svg" height={theme.fontSize.large} style={{ marginRight: "3px" }} />
            <p>Home</p>
          </NavbarLink>

          <DropDown>
            <DropDownLink>
              <FontIcon src="/fonts/info.svg" height={theme.fontSize.medium} /> Infos{" "}
              <FontIcon src="/fonts/angle-down.svg" height={theme.fontSize.medium} />
            </DropDownLink>
            <OuterDropDownMenuInfos>
              <InnerDropDownMenu $isLastBottom={true} $bgTransparency={1}>
                <div>
                  <video
                    muted autoPlay loop
                    style={{ maxWidth: "80px" }}
                    src="/dance-moves-monokuma.webm"
                  />
                </div>{" "}
                <MenuBorder />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <NavbarLink to="About" component="dropdown">
                    About
                  </NavbarLink>
                  <NavbarLink to="Projects" component="dropdown">
                    Projects
                  </NavbarLink>
                </div>
              </InnerDropDownMenu>
            </OuterDropDownMenuInfos>
          </DropDown>

          <DropDown>
            <DropDownLink>
              <FontIcon src="/fonts/newspaper.svg" height={theme.fontSize.medium} /> Posts{" "}
              <FontIcon src="/fonts/angle-down.svg" height={theme.fontSize.medium} />
            </DropDownLink>
            <OuterDropDownMenuBlogs>
              <InnerDropDownMenu $isLastBottom={true} $bgTransparency={1}>
                <div>
                  <video
                    muted autoPlay loop
                    style={{ maxWidth: "100px" }}
                    src="/dakooters-dkooters.webm"
                  />
                </div>{" "}
                <MenuBorder />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <NavbarLink to="Blogs" component="dropdown">
                    Blogs
                  </NavbarLink>
                  <NavbarLink to="Recipes" component="dropdown">
                    Recipes
                  </NavbarLink>
                  <NavbarLink to="404" component="dropdown">
                    Personal
                  </NavbarLink>
                </div>
              </InnerDropDownMenu>
            </OuterDropDownMenuBlogs>
          </DropDown>

          <DropDown>
            <DropDownLink>
              <FontIcon src="/fonts/paperclip.svg" height={theme.fontSize.medium} /> Others{" "}
              <FontIcon src="/fonts/angle-down.svg" height={theme.fontSize.medium} />
            </DropDownLink>
            <OuterDropDownMenuOthers>
              <InnerDropDownMenu $isLastBottom={true} $bgTransparency={1} style={{ paddingRight: "27px" }}>
                <div>
                  <video
                    muted autoPlay loop
                    style={{ maxWidth: "80px" }} 
                    src="/bocchi-rotate.webm" 
                  />
                </div>{" "}
                <MenuBorder />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <NavbarLink to="404" component="dropdown">
                    Links
                  </NavbarLink>
                  <NavbarLink to="404" component="dropdown">
                    Guestbook
                  </NavbarLink>
                </div>
              </InnerDropDownMenu>
            </OuterDropDownMenuOthers>
          </DropDown>

          <NavbarLink to="404" component="normal">
            <FontIcon src="/fonts/skull.svg" height={theme.fontSize.medium} style={{ marginRight: "5px" }} />
            <p>Login</p>
          </NavbarLink>
        </CenterDiv>
      </Nav>
    </>
  );
}

export default Navbar;
