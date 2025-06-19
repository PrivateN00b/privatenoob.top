import * as stylex from '@stylexjs/stylex';
import NavbarLink from "../../../../components/button_link/NavbarLink";
import { colors } from "../../../../styles/tokens.stylex";
import { FontIcon } from "../../../../components/img/Icon";
import theme from '../../../../styles/theme';
import { lazy, Suspense } from 'react';

const DropDownInfos = lazy(() => import('./DropDownComponents').then(module => ({ default: module.DropDownInfos })));
const DropDownOthers = lazy(() => import('./DropDownComponents').then(module => ({ default: module.DropDownOthers })));
const DropDownPosts = lazy(() => import('./DropDownComponents').then(module => ({ default: module.DropDownPosts })));

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
  }
})

function Navbar() {
  return (
    <>
      <div {...stylex.props(styles.nav)}>
          <NavbarLink to="/" component="normal">
            <FontIcon src="/fonts/home.svg" height={theme.fontSize.large} style={{ marginRight: "3px" }} />
            <p>Home</p>
          </NavbarLink>

          <div {...stylex.props(styles.dropDown)}>
            <a {...stylex.props(styles.dropDownLink)}>
              <FontIcon src="/fonts/info.svg" height={theme.fontSize.medium} /> Infos{" "}
              <FontIcon src="/fonts/angle-down.svg" height={theme.fontSize.medium} />
            </a>
            <Suspense>
              <DropDownInfos />
            </Suspense>
          </div>

          <div {...stylex.props(styles.dropDown)}>
            <a {...stylex.props(styles.dropDownLink)}>
              <FontIcon src="/fonts/newspaper.svg" height={theme.fontSize.medium} /> Posts{" "}
              <FontIcon src="/fonts/angle-down.svg" height={theme.fontSize.medium} />
            </a>
            <Suspense>
              <DropDownPosts />
            </Suspense>
          </div>

          <div {...stylex.props(styles.dropDown)}>
            <a {...stylex.props(styles.dropDownLink)}>
              <FontIcon src="/fonts/paperclip.svg" height={theme.fontSize.medium} /> Others{" "}
              <FontIcon src="/fonts/angle-down.svg" height={theme.fontSize.medium} />
            </a>
            <Suspense>
              <DropDownOthers />
            </Suspense>
          </div>
      </div>
    </>
  );
}

export default Navbar;
