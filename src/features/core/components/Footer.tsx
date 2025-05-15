import { colors, colorsA } from "../../../styles/tokens.stylex";
import { CenteredH2 } from "../../../components/text/CenteredHeaders";
import * as stylex from '@stylexjs/stylex';
import { Link } from "react-router-dom";

const styles = stylex.create({
  footer: {
    backgroundColor: colorsA.bg,
    border: "double",
    margin: "20px 10px 20px 10px",
    borderColor: colors.primary,
    borderRadius: "20px",
    boxShadow: `5px 5px 10px 2px ${colors.primary, 0.8}`,
    display: "flex",
    textAlign: "center",
    justifyContent: "space-between"
  },
  styledLink: {
    paddingBottom: "10px",
    ":link": {
      color: colors.link
    },
    ":visited": {
      color: colors.linkVisited
    }
  },
  linkDiv: {
    display: "flex",
    flexDirection: "column",
    ["@media (min-width: 1300px)"]: {
      flexDirection: "row",
      justifyContent: "space-evenly"
    }
  }
})

function Footer() {
  return (
    <footer {...stylex.props(styles.footer)}>
      <div style={{ width: "30%" }}>
        <CenteredH2>Infos</CenteredH2>
        <p>Last Update: 2024</p>
        <p>Total Views: UNDER CONSTRUCTION </p>
      </div>
      <div style={{ width: "40%" }}>
        <CenteredH2>Boring stuff</CenteredH2>
        <p>© PrivateNoob 2023-2024. Do whatever the hell you want with it.</p>
      </div>
      <div style={{ width: "30%", display: "flex", flexDirection: "column" }}>
        <CenteredH2>Links</CenteredH2>
        <div {...stylex.props(styles.linkDiv)}>
          <Link {...stylex.props(styles.styledLink)} to="404">Sitemap</Link>
          <Link {...stylex.props(styles.styledLink)} to="404">Accessibility</Link>
          <Link {...stylex.props(styles.styledLink)} to="404">Credits</Link>
          <Link {...stylex.props(styles.styledLink)} to="404">Back to Top</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
