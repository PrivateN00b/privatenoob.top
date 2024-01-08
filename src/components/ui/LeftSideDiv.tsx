import styled from "styled-components";

const LeftSideDiv = styled.div`
  width: 30%;
  max-height: 100%;
  height: 100%;

  @media (max-width: 680px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 900px) {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    column-gap: 50px;
  }
`;

export default LeftSideDiv;
