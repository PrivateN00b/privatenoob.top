import styled from "styled-components";

const StyledItem = styled.h3`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.quarteriary};
  border-radius: 20px;
  margin: 0 15% 15px 15%;
  padding: 5px 0 5px 0;
  outline-style: outset;
  outline-color: ${({ theme }) => theme.colors.tertiary};

  @media (max-width: 1140px) {
    margin: 0 5% 20px 5%;
  }
`;

export default StyledItem;
