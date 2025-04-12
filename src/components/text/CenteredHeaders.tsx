import * as stylex from '@stylexjs/stylex';

const centeredHeaderStyle = stylex.create({
  base: {
    textAlign: "center"
  }
})

export function CenteredH1(props: any) {
  return <h1 {...props} {...stylex.props(centeredHeaderStyle.base)}></h1>
}

export function CenteredH2(props: any) {
  return <h2 {...props} {...stylex.props(centeredHeaderStyle.base)}></h2>
}
