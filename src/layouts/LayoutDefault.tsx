import React from "react";
import { styled, ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import GlobalStyle from "../styles/global"
import { Link } from "../components/link/Link";
import * as stylex from '@stylexjs/stylex';
import LeftLayout from "./components/LeftLayout";
import RightLayout from "./components/RightLayout";
import CenterLayout from "./components/CenterLayout";

const styles = stylex.create({
  base: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    marginTop: "-8px",
  }
})

export default function LayoutDefault({ children }: { children: React.ReactNode }) {
  console.log("IN LAYOUTDEFAULT")

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Content>{children}</Content>
    </ThemeProvider>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  console.log(children)
  
  return (
    <div {...stylex.props(styles.base)}>
      {/* <LeftLayout /> */}
      <CenterLayout children={children}/>
      {/* <RightLayout /> */}
    </div>
  );
}