import { createGlobalStyle, withTheme } from "styled-components";
import { colors, fontSize } from "./tokens.stylex"

const globalStyle = createGlobalStyle`
  @font-face {
    font-family: "W95F";
    src: url("/fonts/W95font.otf");
    font-size: 10px;
    font-display: swap;
  }

  @font-face {
    font-family: "W95F";
    src: url("/fonts/W95font-Bold.otf");
    font-weight: bold;
    font-display: swap;
  }

  :root {
  font-family: W95F, system-ui, sans-serif;
  text-align: center;
  line-height: 1.5;
  font-weight: 400;
  font-size: ${fontSize.medium};
  
  @media (max-width: 800px) {
    font-size: ${fontSize.small};
  }

  color-scheme: dark;
  color: ${colors.text1};
  background-color: #121212;
  /* opacity: 0.8;
  background: linear-gradient(135deg, #2f92d755 25%, transparent 25%) -10px 0/ 20px 20px, linear-gradient(225deg, #2f92d7 25%, transparent 25%) -10px 0/ 20px 20px, linear-gradient(315deg, #2f92d755 25%, transparent 25%) 0px 0/ 20px 20px, linear-gradient(45deg, #2f92d7 25%, #000000 25%) 0px 0/ 20px 20px; */
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

    h1,
  h2 {
    /* color: ${({ }) => colors.primary}; */
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    background-image: linear-gradient(
      45deg,
      aqua,
      magenta,
      ${({ }) => colors.primary}
    );
    animation: animate 5s linear infinite;
    background-size: 400%;
  }

  @keyframes animate {
    0% {
      background-position: 0 0;
    }
    25% {
      background-position: 100% 0;
    }
    50% {
      background-position: 100% 100%;
    }
    75% {
      background-position: 0 100%;
    }
    100% {
      background-position: 0 0;
    }
  }
}

html {
  --s: 120px; /* control the size */
  --c1:rgb(73, 0, 65) ;
  --c2: #01000e;
  --c3:rgb(38, 0, 78);
  
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
