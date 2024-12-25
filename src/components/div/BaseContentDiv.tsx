import { rgba } from "polished";
import styled from "styled-components";

const BaseContentDiv = styled.div<{ isLastBottom?: boolean, isLastLeft?: boolean }>`
  background-color: ${({ theme }) =>
    rgba(theme.colors.bg, 0.9)}; // Apply 50% transparency
  border: double ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  box-shadow: 5px 5px 10px 2px ${({ theme }) => rgba(theme.colors.primary, 0.8)};
  margin-bottom: ${(props) => (props.isLastBottom ? 0 : 20)}px;
  margin-left: ${(props) => (props.isLastLeft ? 30 : 0)}px;
  width: 100%;
`;

export default BaseContentDiv;
