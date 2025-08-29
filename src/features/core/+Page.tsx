export default Page

import * as stylex from '@stylexjs/stylex';
import LeftLayout from "./components/LeftLayout";
import RightLayout from "./components/RightLayout";
import CenterLayout from "./components/CenterLayout";
import React, { useId } from 'react'
import { Config } from 'vike-react/Config'
import { theme } from "../../styles/theme";
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
  // Will be printed on the server and in the browser:
  console.log('Rendering the landing page')

  const id = useId()
  console.log(id)

  return (
    <ThemeProvider theme={theme}>
      <div {...stylex.props(styles.base)}>
        {/* <LeftLayout /> */}
        <CenterLayout />
        {/* <RightLayout /> */}
      </div>
    </ThemeProvider>
  )
}