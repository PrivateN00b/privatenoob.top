import * as stylex from '@stylexjs/stylex';

export const colors = stylex.defineVars({
    primary: "#E6005D",
    secondary: "#2548b2",
    tertiary: "#2f0060",
    quarteriary: "#00013a",
    bg: "#01000e",
    text1: "white",
    text2: "#26e2de",
    link: " #27deff  ",
    linkVisited: "#a5e2ee ",
});

export const colorsA = stylex.defineVars({
    primary: `rgb(from ${colors.primary} r g b / 0.8)`,
    bg: `rgba(from ${colors.bg} r g b / 0.9)`,
});

export const fontSize = stylex.defineVars({
    small: "18px",
    medium: "21px",
    large: "27px",
});

export const otherStyles = stylex.defineVars({
    contentMaxWidth: "1520px"
});