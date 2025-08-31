// pages/+onCreateGlobalContext.client.ts
// Environment: client

import type { GlobalContextClient } from 'vike/types'
import { DefaultTheme } from 'styled-components/dist/types'
import theme from '../../styles/theme'

export async function onCreateGlobalContext(globalContext: GlobalContextClient) {
  globalContext.theme = theme
}

declare global {
  namespace Vike {
    interface GlobalContextClient {
      theme: DefaultTheme
    }
  }
}