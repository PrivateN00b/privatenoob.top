import type { Config } from 'vike/types'
import vikeReact from 'vike-react/config'
import vikeReactStyledComponents from "vike-react-styled-components/config"
import Layout from "./layouts/LayoutDefault";

export default {
  Layout,
  
  stream: true,
  extends: [vikeReact, vikeReactStyledComponents],
  prerender: true,
  includeAssetsImportedByServer: true
} satisfies Config