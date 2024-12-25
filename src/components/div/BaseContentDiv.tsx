import { rgba } from "polished";
import styled from "styled-components";

const BaseContentDiv = styled.div<{ isLast?: boolean, display?: string }>`
  background-color: ${({ theme }) =>
    rgba(theme.colors.bg, 0.9)}; // Apply 50% transparency
  border: double ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  box-shadow: 5px 5px 10px 2px ${({ theme }) => rgba(theme.colors.primary, 0.8)};
  margin-bottom: ${(props) => ((!props.display || props.display != "flex") && props.isLast ? 0 : 20)}px;
  margin-left: ${(props) => (props.display == "flex" && props.isLast ? 20 : 0)}px;
  width: 100%;
`;

export default BaseContentDiv;
