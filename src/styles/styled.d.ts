// import original module declarations
import 'styled-components';


// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
        primary: string,
        secondary: string,
        tertiary: string,
        quarteriary: string,
        bg: string,
        text1: string,
        text2: string,
        link: string,
        linkVisited: string,
      },
      fontSize: {
        small: string,
        medium: string,
        large: string,
      },
      styles: {
        contentMaxWidth: string
      }
  }
}