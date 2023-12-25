import { createGlobalStyle, withTheme } from "styled-components";
import theme from "./theme";

const globalStyle = createGlobalStyle`
  :root {
  /* font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400; */

  color-scheme: light dark;
  color: ${theme.colors.text1};
  background-color: ${theme.colors.bg};

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}
`;

export default withTheme(globalStyle);
