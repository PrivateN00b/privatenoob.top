import { Link } from "./Link";
import * as stylex from '@stylexjs/stylex';
import { colors } from "../../styles/tokens.stylex";

const styles = stylex.create({
  base: {
    display: "flex",
    alignItems: "center",
    color: colors.text1,
    textDecoration: "none",
    fontWeight: "bold",
    justifyContent: "center"
  },
  styledLink: {
    backgroundColor: colors.primary,
    borderRadius: "20px",
    maxHeight: "22px",
    boxShadow: `0 5px 0 ${colors.text1}`,
    transition: "all 0.2 ease",
    lineHeight: "1",
    margin: "20px 30px 20px 20px",  // Increase navbar height by 40px

    padding: {
      default: "10px 30px 10px 30px",
      ["@media (max-width: 420px)"]: "10px 20px 10px 20px"
    },

    ":hover": {
      boxShadow: `0 3px 0 ${colors.text1}`,
      transform: "translateY(2px)"
    },

    ":active": {
      boxShadow: "none",
      transform: "translateY(5px)"
    }
  },
  dropDownLink: {
    padding: "5px 30px 5px 30px",
    borderRadius: "10px",
    marginTop: "10px",
    outlineStyle: "outset",
    outlineColor: colors.primary    
  }
})

interface NavbarLinkProps {
  to: string;
  component: string;
  children: React.ReactNode;
}

export default function NavbarLink({
  to,
  component,
  children,
}: NavbarLinkProps) {
  {
    if (component.toLowerCase() == "dropdown")  // Render DropDownLink
      return <Link style={[styles.base, styles.dropDownLink]} href={to}>{children}</Link>;
    else if (component.toLowerCase() == "normal")  // Render StyledLink
      return <Link style={[styles.base, styles.styledLink]} href={to}>{children}</Link>;
  }
}
