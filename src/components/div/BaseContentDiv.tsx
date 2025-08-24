import { rgba } from "polished";
import { styled } from "styled-components";
import { BaseContentDivProps } from "../../utils/interfaces";
import * as stylex from '@stylexjs/stylex';
import { colors, colorsA } from "../../styles/tokens.stylex";

export const BaseContentDiv = styled.div<BaseContentDivProps>`
  background-color: ${({ theme, $bgTransparency }) => $bgTransparency 
    ? rgba(theme.colors.bg, $bgTransparency)
    : rgba(theme.colors.bg, 0.9)};
  border: double ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  box-shadow: 5px 5px 10px 2px ${({ theme }) => rgba(theme.colors.primary, 0.8)};
  margin-bottom: ${({ $isLastBottom }) => ($isLastBottom ? 0 : 20)}px;
  margin-left: ${({ $isLastLeft }) => ($isLastLeft ? 30 : 0)}px;
  width: 100%;
  height: ${({ $height }) => ($height ? `calc(${$height}% - 5px)`: "auto")};
  box-sizing: border-box;

  @media (max-width: 564px) {
    margin-bottom: 10px
  }
`;

export const bContD = stylex.create({
  base: {
    backgroundColor: colorsA.bg,
    border: `double ${colors.primary}`,
    borderRadius: "20px",
    boxShadow: `5px 5px 10px 2px ${colorsA.primary}`,
    marginBottom: {
      default: "20px",
      ["@media (max-width: 564px)"]: "10px"
    },
    marginLeft: "0px",
    width: "100%",
    height: "auto",
    boxSizing: "border-box"
  },
  backgroundColorNonT: {
    backgroundColor: colors.bg
  },
  lastBottom: {
    marginBottom: "0px"
  },
  lastLeft: {
    marginLeft: "30px"
  }
})