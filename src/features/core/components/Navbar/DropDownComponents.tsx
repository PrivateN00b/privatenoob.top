import * as stylex from '@stylexjs/stylex';
import NavbarLink from "../../../../components/button_link/NavbarLink";
import { colors } from "../../../../styles/tokens.stylex";
import { bContD } from '../../../../components/div/BaseContentDiv';

const styles = stylex.create({
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
  menuBorder: {
    borderLeft: `3px solid ${colors.primary}`,
    maxHeight: "200px",
    margin: "0 15px 0 15px"
  }
})

export const DropDownInfos = () => {
    return <div {...stylex.props(styles.outerDropDown, styles.outerDropDownInfos)}>
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
        <NavbarLink to="About" component="dropdown">
          About
        </NavbarLink>
        <NavbarLink to="Projects" component="dropdown">
          Projects
        </NavbarLink>
      </div>
    </div>
  </div>
}

export const DropDownPosts = () => {
    return <div {...stylex.props(styles.outerDropDown, styles.outerDropDownPosts)}>
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
    </div>
    </div>
}

export const DropDownOthers = () => {
    return <div {...stylex.props(styles.outerDropDown, styles.outerDropDownOthers)}>
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
        <NavbarLink to="404" component="dropdown">
          Links
        </NavbarLink>
        <NavbarLink to="404" component="dropdown">
          Guestbook
        </NavbarLink>
      </div>
    </div>
  </div>
}

// export const DropDownInfos = () => {
//     return <div className='outerDropDown' id='outerDropDownInfos'>
//     <div className='innerDropDown'{...stylex.props(bContD.base, bContD.lastBottom, bContD.backgroundColorNonT)}>
//       <div>
//         <video
//           muted autoPlay loop
//           style={{ maxWidth: "80px" }}
//           src="/dance-moves-monokuma.webm"
//         />
//       </div>{" "}
//       <div className='menuBorder' />
//       <div style={{ display: "flex", flexDirection: "column" }}>
//         <NavbarLink to="About" component="dropdown">
//           About
//         </NavbarLink>
//         <NavbarLink to="Projects" component="dropdown">
//           Projects
//         </NavbarLink>
//       </div>
//     </div>
//   </div>
// }

// export const DropDownPosts = () => {
//     return <div className='outerDropDown' id='outerDropDownPosts'>
//     <div className='innerDropDown' {...stylex.props(bContD.base, bContD.lastBottom, bContD.backgroundColorNonT)}>
//       <div>
//         <video
//           muted autoPlay loop
//           style={{ maxWidth: "100px" }}
//           src="/dakooters-dkooters.webm"
//         />
//       </div>{" "}
//       <div className='menuBorder' />
//       <div style={{ display: "flex", flexDirection: "column" }}>
//         <NavbarLink to="Blogs" component="dropdown">
//           Blogs
//         </NavbarLink>
//         <NavbarLink to="Recipes" component="dropdown">
//           Recipes
//         </NavbarLink>
//         <NavbarLink to="404" component="dropdown">
//           Personal
//         </NavbarLink>
//       </div>
//     </div>
//     </div>
// }

// export const DropDownOthers = () => {
//     return <div className='outerDropDown' id='outerDropDownOthers'>
//     <div className='innerDropDown' {...stylex.props(bContD.base, bContD.lastBottom, bContD.backgroundColorNonT)}>
//       <div>
//         <video
//           muted autoPlay loop
//           style={{ maxWidth: "80px" }} 
//           src="/bocchi-rotate.webm" 
//         />
//       </div>{" "}
//       <div className='menuBorder' />
//       <div style={{ display: "flex", flexDirection: "column" }}>
//         <NavbarLink to="404" component="dropdown">
//           Links
//         </NavbarLink>
//         <NavbarLink to="404" component="dropdown">
//           Guestbook
//         </NavbarLink>
//       </div>
//     </div>
//   </div>
// }