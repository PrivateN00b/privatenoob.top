import styled from "styled-components";

const ToDoItem = styled.h3`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: 20px;
  margin: 0 15% 20px 15%;
  padding: 10px 0 10px 0;

  @media (max-width: 1140px) {
    margin: 0 5% 20px 5%;
  }
`;

export default ToDoItem;
