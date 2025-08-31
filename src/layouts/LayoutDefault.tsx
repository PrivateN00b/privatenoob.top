import React from "react";
import { styled, ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import GlobalStyle from "../styles/global"
import { Link } from "../components/link/Link";

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
  return (
    <div id="page-container">
      <div id="page-content">
        {children}
      </div>
    </div>
  );
}