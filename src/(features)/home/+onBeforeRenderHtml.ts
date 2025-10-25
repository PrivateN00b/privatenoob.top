import { ServerStyleSheet } from "styled-components";
import type { PageContext } from "vike/types";
import '../../../src/stylex.css'

export default (pageContext: PageContext) => {
  pageContext.styleSheet = new ServerStyleSheet();
};
