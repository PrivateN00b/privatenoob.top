import type { Config } from 'vike/types'
import vikeReact from 'vike-react/config'
import vikeReactStyledComponents from "vike-react-styled-components/config"

export default {
  stream: true,
  extends: [vikeReact, vikeReactStyledComponents],
} satisfies Config