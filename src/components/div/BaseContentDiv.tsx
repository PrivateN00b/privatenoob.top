import { rgba } from "polished";
import styled from "styled-components";
import { BaseContentDivProps } from "../../utils/interfaces";

const BaseContentDiv = styled.div<BaseContentDivProps>`
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
`;

export default BaseContentDiv;
