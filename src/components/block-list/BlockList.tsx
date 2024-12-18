import styled from "styled-components";

const BlockList = styled.ul`
  background-color: ${({ theme }) => theme.colors.secondary};
  text-align: left;
  margin: 0 8px 8px 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 20px;
  height: inherit;
  outline-style: outset;
  outline-color: ${({ theme }) => theme.colors.quarteriary};
  position: relative;
  z-index: 2;

  li {
    padding: 5px 0 5px 0;
  }
`;

export default BlockList;
