import { styled } from "styled-components";

const MainDiv = styled.div`
  width: 70%;
  margin: 0 0 0 20px;

  @media (max-width: 420px) {
    width: 100%;
    margin: 0 0 0 0;
  }

  @media (min-width: 420px) and (max-width: 900px) {
    width: 100%;
    margin: 20px 0 0 0;
  }
`;

export default MainDiv;
