import { colors, colorsA } from "../../../styles/tokens.stylex";
import { CenteredH2 } from "../../../components/text/CenteredHeaders";
import * as stylex from '@stylexjs/stylex';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const styles = stylex.create({
  footer: {
    backgroundColor: colorsA.bg,
    border: "double",
    margin: {
      default: "20px 10px 20px 10px",
      ["@media (max-width: 420px)"]: "10px 0 10px 0"
    },
    borderColor: colors.primary,
    borderRadius: "20px",
    boxShadow: `5px 5px 10px 2px ${colorsA.primary}`,
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
  const currentYear: number = (new Date()).getFullYear();  // Get this year
  const [lastUpdate, setLastUpdate] = useState("2025")

  // Check the freshest commit on the public repo (https://github.com/PrivateN00b/privatenoob.top)
  useEffect(() => {
    const url = "https://api.github.com/repos/PrivateN00b/privatenoob.top/commits?per_page=1";
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        const date: Date = new Date(res[0]["commit"]["author"]["date"]);
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: '2-digit' };  // Use a custom format to have a more readable Date text
        const customDate: string = date.toLocaleDateString("en-US", options);
        setLastUpdate(customDate)
      })
  }, [])

  return (
    <footer {...stylex.props(styles.footer)}>
      <div style={{ width: "30%" }}>
        <CenteredH2>Infos</CenteredH2>
        <p>Last Update: {lastUpdate}</p>
      </div>
      <div style={{ width: "40%" }}>
        <CenteredH2>Boring stuff</CenteredH2>
        <p>© PrivateNoob 2023-{currentYear}. Do whatever the hell you want with it.</p>
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
