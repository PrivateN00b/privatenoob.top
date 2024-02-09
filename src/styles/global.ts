import { createGlobalStyle, withTheme } from "styled-components";
import theme from "./theme";

const globalStyle = createGlobalStyle`
  :root {
  font-family: Ubuntu, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  font-size: ${theme.fontSize.medium};

  @media (max-width: 800px) {
    font-size: ${theme.fontSize.small};
  }

  color-scheme: dark;
  color: ${theme.colors.text1};
  background-color: #121212;
  /* opacity: 0.8;
  background: linear-gradient(135deg, #2f92d755 25%, transparent 25%) -10px 0/ 20px 20px, linear-gradient(225deg, #2f92d7 25%, transparent 25%) -10px 0/ 20px 20px, linear-gradient(315deg, #2f92d755 25%, transparent 25%) 0px 0/ 20px 20px, linear-gradient(45deg, #2f92d7 25%, #000000 25%) 0px 0/ 20px 20px; */
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

html {
  --s: 120px; /* control the size */
  --c1: #620057 ;
  --c2: #01000e;
  --c3: #2f0060;
  
  --_g: var(--c1) 10%,var(--c2) 10.5% 19%,#0000 19.5% 80.5%,var(--c2) 81% 89.5%,var(--c3) 90%;
  --_c: from -90deg at 37.5% 50%,#0000 75%;
  --_l1: linear-gradient(145deg,var(--_g));
  --_l2: linear-gradient( 35deg,var(--_g));
  background: 
    var(--_l1), var(--_l1) calc(var(--s)/2) var(--s),
    var(--_l2), var(--_l2) calc(var(--s)/2) var(--s),
    conic-gradient(var(--_c),var(--c1) 0) calc(var(--s)/8) 0,
    conic-gradient(var(--_c),var(--c3) 0) calc(var(--s)/2) 0,
    linear-gradient(90deg,var(--c3) 38%,var(--c1) 0 50%,var(--c3) 0 62%,var(--c1) 0);
  background-size: var(--s) calc(2*var(--s)/3);
}
`;

export default withTheme(globalStyle);
