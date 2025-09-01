export default Page

import * as stylex from '@stylexjs/stylex';
import React, { useId } from 'react'
import { Config } from 'vike-react/Config'
import { theme } from "../../../styles/theme";
import { ThemeProvider } from 'styled-components';

const styles = stylex.create({
  base: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    marginTop: "-8px",
  }
})


function Page() {
  return (
    <ThemeProvider theme={theme}>
      <div {...stylex.props(styles.base)}>
        {/* <LeftLayout /> */}
        <h1>RECIPES</h1>
        {/* <RightLayout /> */}
      </div>
    </ThemeProvider>
  )
}