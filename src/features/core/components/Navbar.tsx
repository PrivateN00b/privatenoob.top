import * as stylex from '@stylexjs/stylex';
import NavbarLink from "../../../components/link/NavbarLink";
import { colors } from "../../../styles/tokens.stylex";
import { FontIcon } from "../../../components/img/Icon";
import theme from '../../../styles/theme';
import { bContD } from '../../../components/div/BaseContentDiv';

const styles = stylex.create({
  nav: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    textAlign: "center",
    borderRadius: "0px 0px 20px 20px",
    // Background pattern design
    backgroundImage: "radial-gradient(#2548b2 2px, transparent 2px), radial-gradient(#2548b2 2px, transparent 2px);",
    backgroundSize: "70px 70px",
    backgroundPosition: "0 0, 35px 35px",
    backgroundColor: "#00013a"
  },
  dropDown: {
    margin: "25px 30px 20px 30px",  // Center DropDown links, but it needs an additional +5px on top to be on level with the Home link
    position: "relative",
  
    ":hover > div": {  // Apply to div children when hovering on dropDown
      opacity: "1",  // Reveal children div on hover
      transform: "translateY(0)",
      pointerEvents: "auto"  // Which part of the element can be interacted with the cursor / mouse (auto == ALL)
    },
    
    ":not(#__unused__) > div": {  // Apply to div children inside a dropDown element without the "__unused__" id (nothing uses this Id)
      zIndex: "5",  // Push forward on the z axis to prevent it being behind buttons on a page change
    }
  },
  outerDropDown: {
    // display: "flex",  // For some reason this gives an uniform distance between the buttons and the border
    marginTop: "10px",
    position: "absolute",  // This is needed for the outerDropDown to not take any space
    top: "calc(100% - 40px)",  // Set the position on the Y axis
    opacity: "0",
    pointerEvents: "none",
    transform: "translateY(-10px)",
    transition: "opacity 0.15s ease-in-out, transform 0.15s ease-in-out",
    cursor: "default"
  },
  outerDropDownInfos: {
    borderRadius: "200px 50px 50px 50px / 80px 25px 25px 25px",  // Set the area where the dropdown won't disappear yet
    height: "150px",
    padding: "50px 5px 10px 5px",
    
    left: {  // Set the position on the X axis
      default: "-75%",
      ["@media (max-width: 420px)"]: `-200%`
    }
  },
  outerDropDownPosts: {
    borderRadius: {
      default: "250px 50px 50px 50px / 70px 25px 25px 25px",
      ["@media (max-width: 420px)"]: "50px 250px 50px 50px / 90px 70px 25px 25px",  // Mostly invert the position of the outer selection area
      ["@media (min-width: 420px) and (max-width: 654px)"]: "100px 100px 25px 25px"  // Mostly invert the position of the outer selection area
    },
    height: "210px",
    padding: "50px 5px 0px 5px",
  
    left: {  // Set the position on the X axis
      default: "-85%",
      ["@media (max-width: 654px)"]: `-50%`
    }
  },
  outerDropDownOthers: {
    borderRadius: "200px 50px 50px 50px / 80px 25px 25px 25px",
    height: "155px",
    padding: "50px 5px 5px 5px",
  
    left: {  // Set the position on the X axis
      default: "-75%",
      ["@media (max-width: 420px)"]: `-200%`
    }
  },
  innerDropDown: {
    display: "flex",
    maxHeight: "inherit",
    maxWidth: "inherit",
    padding: "15px 20px 25px 10px",  // This padding decides the free space between the elements (ex: buttons) and the border in the dropdown
  },
  dropDownLink: {
    color: colors.text1,
    padding: {  // Size of the dropDownLink
      default: "10px 30px 10px 30px",
      ["@media (max-width: 420px)"]: "10px 20px 10px 20px"  // Under this width, the icon isn't shown anymore, so the link doesn't need to be as long either
    },
    borderRadius: "20px",
    textDecoration: "none",
    fontWeight: "bold",
    outlineStyle: "inset",
    outlineColor: colors.primary,
  
    ":hover": {
      boxShadow: `0 3px 0 ${colors.text1}`,
      transform: "translateY(2px)",
    }
  },
  menuBorder: {
    borderLeft: `3px solid ${colors.primary}`,
    maxHeight: "200px",
    margin: "0 15px 0 15px"
  }
})

function Navbar() {
  return (
    <>
      <div {...stylex.props(styles.nav)}>
          <NavbarLink to="/" component="normal">
            <FontIcon src="/fonts/home.svg" height={theme.fontSize.large} style={{ marginRight: "3px" }} />
            Home
          </NavbarLink>

          <div {...stylex.props(styles.dropDown)}>
            <a {...stylex.props(styles.dropDownLink)}>
              <FontIcon src="/fonts/info.svg" height={theme.fontSize.medium} /> Infos{" "}
              <FontIcon src="/fonts/angle-down.svg" height={theme.fontSize.medium} />
            </a>
            <div {...stylex.props(styles.outerDropDown, styles.outerDropDownInfos)}>
              <div {...stylex.props(styles.innerDropDown, bContD.base, bContD.lastBottom, bContD.backgroundColorNonT)}>
                <div>
                  <video
                    muted autoPlay loop
                    style={{ maxWidth: "80px" }}
                    src="/dance-moves-monokuma.webm"
                  />
                </div>{" "}
                <div {...stylex.props(styles.menuBorder)} />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <NavbarLink to="about" component="dropdown">
                    About
                  </NavbarLink>
                  <NavbarLink to="projects" component="dropdown">
                    Projects
                  </NavbarLink>
                </div>
              </div>
            </div>
          </div>

          <div {...stylex.props(styles.dropDown)}>
            <a {...stylex.props(styles.dropDownLink)}>
              <FontIcon src="/fonts/newspaper.svg" height={theme.fontSize.medium} /> Posts{" "}
              <FontIcon src="/fonts/angle-down.svg" height={theme.fontSize.medium} />
            </a>
            <div {...stylex.props(styles.outerDropDown, styles.outerDropDownPosts)}>
              <div {...stylex.props(styles.innerDropDown, bContD.base, bContD.lastBottom, bContD.backgroundColorNonT)}>
                <div>
                  <video
                    muted autoPlay loop
                    style={{ maxWidth: "100px" }}
                    src="/dakooters-dkooters.webm"
                  />
                </div>{" "}
                <div {...stylex.props(styles.menuBorder)} />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <NavbarLink to="blogs" component="dropdown">
                    Blogs
                  </NavbarLink>
                  <NavbarLink to="recipes" component="dropdown">
                    Recipes
                  </NavbarLink>
                  <NavbarLink to="404" component="dropdown">
                    Personal
                  </NavbarLink>
                </div>
              </div>
            </div>
          </div>

          <div {...stylex.props(styles.dropDown)}>
            <a {...stylex.props(styles.dropDownLink)}>
              <FontIcon src="/fonts/paperclip.svg" height={theme.fontSize.medium} /> Others{" "}
              <FontIcon src="/fonts/angle-down.svg" height={theme.fontSize.medium} />
            </a>
            <div {...stylex.props(styles.outerDropDown, styles.outerDropDownOthers)}>
              <div {...stylex.props(styles.innerDropDown, bContD.base, bContD.lastBottom, bContD.backgroundColorNonT)}>
                <div>
                  <video
                    muted autoPlay loop
                    style={{ maxWidth: "80px" }} 
                    src="/bocchi-rotate.webm" 
                  />
                </div>{" "}
                <div {...stylex.props(styles.menuBorder)} />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <NavbarLink to="links" component="dropdown">
                    Links
                  </NavbarLink>
                  <NavbarLink to="404" component="dropdown">
                    Guestbook
                  </NavbarLink>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}

export default Navbar;
