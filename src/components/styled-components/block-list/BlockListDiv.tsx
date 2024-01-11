import styled from "styled-components";

const BlockListDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.quarteriary};
  display: inline-block;
  width: 40%;
  margin: 20px;
  border-radius: 20px;
  text-align: center;
  min-width: 300px;
  flex-grow: 1;
  height: 100%;
  outline-style: outset;
  outline-color: ${({ theme }) => theme.colors.tertiary};
`;

export default BlockListDiv;
